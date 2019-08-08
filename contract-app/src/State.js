import React, { Component } from "react"
import { Grid, Paper, Button, TextField, Divider } from "@material-ui/core"
import axios from "axios"

export default class State extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleChange(e) {
    this[e.target.id] = e.target.value
  }

  async query() {
    const response = await axios({
      method: "get",
      url: `http://localhost:3030/state/${this.block}`,
      responseType: "json"
    })
  }

  render() {
    return (
      <Grid item xs={12} md={10} xl={8}>
        <Paper style={{ padding: 10 }}>
          <h2>State</h2>
          <Divider />
          <TextField
            id="block"
            label="Query State By Block Height"
            value={this.account}
            onChange={this.handleChange.bind(this)}
            margin="normal"
            style={{width: '90%' }}
          />
          <Button onClick={this.query.bind(this)} style={{ width: "10%", height: 80 }}>QUERY</Button>
        </Paper>
      </Grid>
    )
  }
}
