import React, { Component } from "react"
import { Grid, Paper } from "@material-ui/core"
import { VictoryPie, VictoryLine } from "victory"
export default class Market extends Component {

  render() {
    return (
      <Grid item xs={12} style={{ padding: 10, margin: 20 }}>
        <Paper style={{ padding: 10 }}>
          <h2>Market</h2>
          <Grid container xs={12}>
            <Grid item xs={3}>
              <VictoryPie
                data={[
                  { x: "Cats", y: 35 },
                  { x: "Dogs", y: 40 },
                  { x: "Birds", y: 55 }
                ]}
                labelRadius={90}
                style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
              />
            </Grid>
            <Grid item xs={3}>
              <VictoryLine
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc"}
                }}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 }
                ]}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}
