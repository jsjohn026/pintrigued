import React from 'react'
import ReactBricks from "react-bricks-infinite";
 
class Bricks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bricks: this.getBricks(),
      reRender: false,
      containerId: "bricks-container-app",
      hasMoreBricks: true
    }
  }

  componentDidMount() {
    this.props.fetchPins()
  }

  getBricks = () => { 
    let results = null;
      results = this.props.pins.map(({ key, value }, i) => {
        return (
          <div key={ key }
            className="card">
            <h1>{ i }</h1>
            <p>{ value }</p>
          </div>     
        );
      });
    return results;
  }

  render() {
    return(
      <div className="app">
        <ReactBricks
        containerId = { this.containerId }
        loadMoreBricks = { this.loadMore }
        hasMoreBricks  = { this.state.hasMoreBricks }
        reRender = { this.state.reRender }
        bricks= { this.state.bricks }
        defaultLoaderStyle = { this.defaultLoaderStyle }
        />
      </div>
    );
  }
}

export default Bricks