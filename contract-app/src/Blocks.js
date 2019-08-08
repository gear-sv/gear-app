import React, { Component } from "react"
import { Grid, Paper, Divider } from "@material-ui/core"

export default class Blocks extends Component {
  render() {
    return (
      <Grid container xs={4} style={{ height: 600, margin: 20, padding: 10 }}>
        <Paper style={{ width: "100%", padding: 10 }}>
          <h2>Blocks</h2>
          <Divider />
        </Paper>
      </Grid>
    )
  }
}
