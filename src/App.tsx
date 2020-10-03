import React from 'react'
import Map from './Map'
import config from './config'
import { Layer, Feature } from 'react-mapbox-gl'
// const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=OrcaSoundVisualObs&majorDimension=ROWS&key=${config.apiKey}`;

const { GoogleSpreadsheet } = require('google-spreadsheet') // google-spreadsheet package sharing link on slack
const doc = new GoogleSpreadsheet(config.spreadsheetId)

doc.useApiKey(config.apiKey)

async function loadSpreadsheet() {
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]
  console.log(sheet.title) 
  console.log(sheet.rowCount)
  const rows = await sheet.getRows()
  console.log(rows)
  // const Markers=rows.forEach((element: { latitude: number | number[] | number[][] | number[][][]; longitude: number | number[] | number[][] | number[][][] }) => {
  //   return <Feature coordinates={[element.latitude,element.longitude]} />
  // });
  // won't be able to understand what to do with foreach I mean stuck in strictly type thing of TSX
  return rows
}

function App() {
  var rows=loadSpreadsheet()
  console.log(rows)
  // console.log(row)
//   const Markers = rows.map(function(row) {
//     return <Feature coordinates={[row.latitude,row.longitude]} />
// })
  
  return (
    <div className="App">
      <header className="App-header">
        <Map //eslint-disable-next-line
          style="mapbox://styles/mapbox/light-v9"
          containerStyle={{
            height: '100vh',
            width: '100vw',
          }}
          zoom={[6.5]}
          center={[-122.48628245579, 47.5124806092584]}
        >
          <Layer
              type="symbol"
              id="marker"
              layout={{ 'icon-image': 'marker-15' }}
            >
              <Feature coordinates={[47.51248061,-122.4862825]} />
          </Layer>
        </Map>
      </header>
    </div>
  )
}

export default App
