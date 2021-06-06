import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = event => {
    const xValue = event.clientX
    const yValue = event.clientY
    drawChromeBoiAtCoords(xValue, yValue)
  }

  handleClick = event => {
    toggleCycling()
  }

  handleKeyPress = event => {
    switch (event.key) {
      case 'a':
        resize('+')
        break
      case 'saaa':
        resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
