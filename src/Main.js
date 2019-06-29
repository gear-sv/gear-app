import React, { Component } from "react"
import { Grid, MenuList, MenuItem, Avatar, TextField } from "@material-ui/core"

export default class Main extends Component {
  render = () => (
      <Grid container spacing={3} style={{height: "100%" }}>
        <Grid item xs={2} style={{ backgroundColor: "rgba(0, 0, 0, 0.87)", height: "100%" }}>   
          <img alt="gearSV" src={require("./gearsv.png")} />
        </Grid>
        <Grid item xs={10} style={{ backgroundColor: "#121212" }}>
          <Grid item xs={5} style={{ backgroundColor: "#333", height: "50%" }}>
            <TextField 
              id="address"
              label="String"
              margin="normal"
              style={{ color: "white" }}
            />
          </Grid>
        </Grid>
      </Grid>
  )
}
