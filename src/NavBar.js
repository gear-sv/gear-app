import React, { Component } from "react"
import { AppBar, Grid } from "@material-ui/core"

export default class NavBar extends Component {
  render() {
    return (
      <Grid item xs={12} style={{ height: 60 }}>
        <AppBar>
          <div style={{ height: 60 }}>
          </div>
        </AppBar>
      </Grid>
    )
  }
}
