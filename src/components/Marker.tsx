/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'

import { Layer, Feature } from 'react-mapbox-gl'
import { GoogleSpreadsheet } from 'google-spreadsheet'

import config from '../config/config'

const doc = new GoogleSpreadsheet(config.spreadsheetId)
doc.useApiKey(config.apiKey)

type COORDINATE = {
  lat: number
  long: number
}

type COORDINATES = COORDINATE[]

const Marker: React.FC = () => {
  const [coordinates, setCoordinates] = useState<COORDINATES>([
    {
      lat: 0,
      long: 0,
    },
  ])

  useEffect(() => {
    try {
      const loadSpreadsheet = async () => {
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        console.log(sheet.title)
        console.log(sheet.rowCount)

        // TODO: this currently returns a single row from a sheet with 2+ entries, so only one map point is returned from sheets.
        const rows = await sheet.getRows()
        console.log('rows', rows)

        console.log(rows[0].timestamp)
        const newCoordinates = []
        for (let i = 0; rows[i] != null && i < sheet.rowCount; i++) {
          newCoordinates.push({
            long: rows[i].longitude,
            lat: rows[i].latitude,
          })
        }
        setCoordinates(newCoordinates)
      }

      loadSpreadsheet()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
      {coordinates &&
        coordinates.map((row, index) => {
          // eslint-disable-next-line
          return <Feature key={index} coordinates={[row.long, row.lat]} />
        })}
    </Layer>
  )
}

export default Marker
