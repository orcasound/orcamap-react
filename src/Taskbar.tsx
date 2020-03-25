import React from 'react'

class Taskbar extends React.Component {
  clearMarkers() {
    console.log('clearing markers')
  }
  addRaw() {
    console.log('Adding raw observations')
  }
  pull() {
    console.log('Pulling from google sheets')
  }
  refresh() {
    console.log('Refreshing markers')
  }
  openSheet() {
    console.log('Opening google sheeet')
  }
  render() {
    return (
      <div className="menubar">
        <button onClick={this.clearMarkers}>Clear new markers</button>
        <br />
        <button onClick={this.addRaw}>Add raw observations</button>
        <br />
        <button onClick={this.pull}>Pull from Google sheets</button>
        <br />
        <button onClick={this.refresh}>Refresh Markers</button>
        <br />
        <button onClick={this.openSheet}>Open Google sheets</button>
      </div>
    )
  }
}

export default Taskbar
