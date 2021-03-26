import React, { useState, useEffect } from 'react'
import { fromLonLat } from 'ol/proj'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import Map from './Map'
import './contain.css'
import config from '../../config/config'
import { Layers, TileLayer, VectorLayer, GoogleSheetsLayer } from './Layers'
import { Controls, FullScreenControl } from './Controls'
import orca from './orcapin.png'

const doc = new GoogleSpreadsheet(config.spreadsheetId)
doc.useApiKey(config.apiKey)

const MapContainer: React.FC = () => {
  const [coordinates, setCoordinates] = useState([[0, 0]])
  const [googleSheetcoordinates, setgoogleSheetcoordinates] = useState([[0, 0]])
  const [zoom, setZoom] = useState(0)
  const [center, setCenter] = useState([0, 0])
  const [showLayer, setShowLayer] = useState(true)

  useEffect(function effectFunction() {
    async function loadSpreadsheet() {
      try {
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        console.log(sheet.title)
        console.log(sheet.rowCount)

        setCoordinates([
          [-122.76045, 48.13569], // Port Townsend
          [-122.6039, 48.03371], // Bush Point
          [-123.17357, 48.55833], // Orcasound Lab
          // [-122.4544, 47.3365],
          // [-122.4768, 47.7365],
          // [-122.4108, 47.7365],
        ])
        setZoom(9)
        setCenter([-122.4713, 47.7237])

        // TODO: this currently returns a single row from a sheet with 2+ entries, so only one map point is returned from sheets.
        const rows = await sheet.getRows()
        console.log('rows', rows)

        console.log(rows[0].timestamp)
        for (let i = 0; rows[i] != null && i < sheet.rowCount; i++) {
          setgoogleSheetcoordinates((coordinatesheet) => [
            ...coordinatesheet,
            [rows[i].longitude, rows[i].latitude],
          ])
        }
      } catch (err) {
        console.log(err)
      }
    }
    loadSpreadsheet()
  }, [])

  return (
    <>
      <div id="cetacean_checkbox" style={{ margin: '0 40vw' }}>
        <img src={orca} width="25px" height="25px" alt="possible orca pin" />
        <input
          type="checkbox"
          checked={showLayer}
          onChange={(event) => setShowLayer(event.target.checked)}
        />{' '}
        Pod Sightings
      </div>

      <h3
        style={{
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Test map of test coordinates
      </h3>

      <div className="setsides">
        <Map center={fromLonLat(center)} zoom={zoom}>
          <Layers>
            <TileLayer zIndex={0} />
            {showLayer && <VectorLayer coordinates={coordinates} zIndex={0} />}
          </Layers>

          <Controls>
            <FullScreenControl />
          </Controls>
        </Map>
      </div>

      <h3
        style={{
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Google Sheets Coordinates
      </h3>

      <div className="setsides">
        <Map center={fromLonLat(center)} zoom={zoom}>
          <Layers>
            <TileLayer zIndex={0} />
            {showLayer && (
              <GoogleSheetsLayer
                coordinates={googleSheetcoordinates}
                zIndex={0}
              />
            )}
          </Layers>

          <Controls>
            <FullScreenControl />
          </Controls>
        </Map>
      </div>
    </>
  )
}

export default MapContainer
