import React, { Component } from 'react';


class Bus extends Component {
  render() {
    return(
      <svg className={this.props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
        <title>bus</title>
        <path d="M6 19c0-1.109-0.891-2-2-2s-2 0.891-2 2 0.891 2 2 2 2-0.891 2-2zM22 19c0-1.109-0.891-2-2-2s-2 0.891-2 2 0.891 2 2 2 2-0.891 2-2zM21.281 12.812l-1.125-6c-0.094-0.469-0.5-0.812-0.984-0.812h-14.344c-0.484 0-0.891 0.344-0.984 0.812l-1.125 6c-0.109 0.625 0.359 1.188 0.984 1.188h16.594c0.625 0 1.094-0.562 0.984-1.188zM17.75 3.25c0-0.422-0.328-0.75-0.75-0.75h-10c-0.406 0-0.75 0.328-0.75 0.75s0.344 0.75 0.75 0.75h10c0.422 0 0.75-0.328 0.75-0.75zM24 14.578v9.422h-2v2c0 1.109-0.891 2-2 2s-2-0.891-2-2v-2h-12v2c0 1.109-0.891 2-2 2s-2-0.891-2-2v-2h-2v-9.422c0-1.281 0.109-2.234 0.391-3.484l1.609-7.094c0.297-2.5 4.672-4 10-4s9.703 1.5 10 4l1.641 7.094c0.281 1.25 0.359 2.203 0.359 3.484z"></path>
      </svg>
    )
  }
}

export default Bus;