import React, { Component } from "react"
import { Grid, Paper, Divider } from "@material-ui/core"

export default class Transaction extends Component {
  async componentDidMount() {
    const transaction = await fetch("http://localhost:3002/")
    console.log("transaction", transaction)
  }
  
  render() {
    return (
      <Grid container xs={6} style={{ height: 600, margin: 20, padding: 10 }}>
        <Paper style={{ width: "100%", padding: 10 }}>
          <h2>Transactions</h2>
          <Divider />
        </Paper>
      </Grid>
    )
  }
}
