import React, { Component } from 'react'
import PinsIndex from '../pins/pins_index_container'
import Stacks from '../pins/stacks_container'

export class MainPage extends Component {
  render() {
    return (
      <div>
        <PinsIndex />
        {/* <Stacks className="bricks-container-app" /> */}
        <h1>A Pinterest Clone</h1>
        <footer>
          Copyright &copy; 2019 Pintrigue
        </footer>
      </div>
    )
  }
}

export default MainPage
