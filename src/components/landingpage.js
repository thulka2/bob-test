import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends Component {

  render() {

    return (
      <div style = {{width: '100%', margin: 'auto'}}>
      <Grid className = "landing-grid">
        <Cell col={12}>
        <img
          src = "https://s3-prod.chicagobusiness.com/GettyImages-525625855.jpg"
          alt = "skyline"
          className = "city-img"
          />
        <div className="banner-text">
          <h1> Black Owned Businesses </h1>

          <p> A community compiled directory of black businesses in Chicago</p>
        </div>

        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Landing;
