import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      markers: [],
    }
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  handleClick = (e) => {
    const rel = e.target.getBoundingClientRect()

    const newMarker = {
      x: this.state.x - rel.left - 15,
      y: this.state.y - rel.top - 15,
    }

    this.setState(prevState => ({
      markers: [...prevState.markers, newMarker],
    }))
  }

  render() {
    return (
      <div className="app">
        <div className="img-box" onMouseMove={this.handleMouseMove} onClick={this.handleClick}>
          {this.state.markers.map((value, index) => {
            return (
              <div
                key={index}
                style={{
                  left: value.x,
                  top: value.y,
                }}
                className="marker"
              >
                {index + 1}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
