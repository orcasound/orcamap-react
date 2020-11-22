import React, { useEffect, useState } from 'react'
import config from './config'
import { Layer, Feature } from 'react-mapbox-gl'

import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(config.spreadsheetId)
doc.useApiKey(config.apiKey)

type coordinate = {
  lat: number
  long: number
}

type coordinates = coordinate[]

let initialCoordinates: coordinates

const Marker: React.FC = () => {
  const [coordinates, setCoordinates] = useState(initialCoordinates)
  useEffect(function effectFunction() {
    async function loadSpreadsheet() {
      await doc.loadInfo()
      const sheet = doc.sheetsByIndex[0]
      console.log(sheet.title)
      console.log(sheet.rowCount)
      
       // TODO: this currently returns a single row from a sheet with at least 2+ entries, so only one map point is returned from sheets request.
      const rows = await sheet.getRows()
      
      console.log(rows[0].timestamp)
      const coordinates = []
      for (let i = 0; rows[i] != null && i < sheet.rowCount; i++) {
        coordinates.push({ long: rows[i].longitude, lat: rows[i].latitude })
      }
      setCoordinates(coordinates)
    }
    loadSpreadsheet()
  }, [])
  return (
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
      {coordinates &&
        coordinates.map((row) => {
          return <Feature key="row" coordinates={[row.long, row.lat]} />
        })}
    </Layer>
  )
}

export default Marker
