import React, { Component } from "react"
import { Grid, Paper, Button, Divider } from "@material-ui/core"

export default class extends Component {
  render() {
    return (
      <Grid item xs={12} style={{ margin: 20 }}>
        <Paper style={{ width: "100%", height: "100" }}>
          <Grid xs={12} container style={{ padding: 10 }}>
            <Grid item xs={2}>
              <h2 style={{ color: "white" }}>Token Contract</h2>
            </Grid>
            <Grid item xs={3}>
              <Button>
                SetOwner
              </Button>
              <Button>
                Mint
              </Button>
              <Button>
                Transfer
              </Button>
            </Grid>
          </Grid>
          <Divider />
        </Paper>
      </Grid>
    )
  }
}
