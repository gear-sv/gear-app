import React, { Component } from "react"
import { Grid, Paper, Divider, Table, TableBody, TableCell, TableRow, TableHead, Button, TextField } from "@material-ui/core"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import axios from "axios"

export default class Transaction extends Component {
  constructor() {
    super()
    this.state = {
      response: null
    }
  }

  handleChange(e) {
    console.log(e.target.value)
    this.txid = e.target.value
  }

  async query(e) {
    const response = await axios({
      method: "get",
      url: `http://localhost:3030/transaction/${this.txid}`,
      responseType: "json"
    })

    this.setState({ response: response.data })
  }

  result() {
    if (this.state.response) {
      console.log("state is set")
      return (
        <div>
          <SyntaxHighlighter language="json" style={ atomDark }>
            {JSON.stringify(this.state.response, null, 2)}
          </SyntaxHighlighter>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <Grid container xs={12} md={10} xl={8} style={{ padding: 10 }}>
        <Paper style={{ width: "100%", padding: 10 }}>
          <h2>Transactions</h2>
          <Divider />
          <TextField
            id="txid"
            label="Query Transaction By Transaction ID"
            onChange={this.handleChange.bind(this)}
            value={this.account}
            margin="normal"
            style={{width: '90%' }}
          />
          <Button onClick={this.query.bind(this)} style={{ width: "10%", height: 80 }}>QUERY</Button>
          {this.result()}
        </Paper>
      </Grid>
    )
  }
}
