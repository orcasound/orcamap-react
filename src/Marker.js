import React, { useEffect, useState } from 'react'
import config from './config'
import { Layer, Feature } from 'react-mapbox-gl'

import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(config.spreadsheetId)
doc.useApiKey(config.apiKey)

function Marker() {
  const [coordinates, setCoordinates] = useState([])
  useEffect(function effectFunction() {
    async function loadSpreadsheet() {
      await doc.loadInfo()
      const sheet = doc.sheetsByIndex[0]
      console.log(sheet.title)
      console.log(sheet.rowCount)
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
      {coordinates.map((row) => {
        return <Feature key="row" coordinates={[row.long, row.lat]} />
      })}
    </Layer>
  )
}

export default Marker
