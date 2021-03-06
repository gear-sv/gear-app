import React, { Component } from "react"
import { Grid, Paper, Divider, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, TextField, Snackbar, IconButton, CloseIcon } from "@material-ui/core"
import datapay from "datapay"
import contract from "./contract.json"

export default class Write extends Component {
  constructor() {
    super()
    this.state = {
      txBar: false
    }
    this.mint = {}
    this.setOwner = {}
    this.transfer = {}
    this.open = false
  }

  handleChange(method, e) {
    this[method][e.target.id] = e.target.value
  }

  handleWrite(method, e) {
    console.log(method)

    // 1. fetch private key from localstorage
    const key = JSON.parse(window.localStorage.getItem("key"))

    // 2. format transaction call
    const tx = {
      data: [ "gearsv", contract.id, method, ...Object.values(this[method]) ],
      pay: {
        key: key.privateKey,
        fee: 0
      }
    }
    console.log("tx", tx)

    // 3. submit transaction via datapay
    // datapay.send(tx, (error, hash) => {
    //
    // })
    this.setState({ txBar: true })
  }

  handleClose() {
    console.log("close this fkr")
  }

  render() {
    return (
      <Grid container xs={12} md={10} xl={8} style={{ padding: 10 }}>
        <Paper style={{ width: "100%", padding: 10 }}>
          <h2>Write</h2>
          <Divider />
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              >
              <Typography>mint</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TextField
                id="mintAmount"
                label="amount"
                value={this.mintAmount}
                onChange={this.handleChange.bind(this, "mint")}
                margin="normal"
              />
              <Button onClick={this.handleWrite.bind(this, "mint")}>
                MINT
              </Button>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              >
            <Typography>setOwner</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TextField
                id="newOwner"
                label="newOwner"
                value={this.state.newOwner}
                onChange={this.handleChange.bind(this, "setOwner")}
                margin="normal"
              />
              <Button onClick={this.handleWrite.bind(this, "setOwner")}>
                SETOWNER
              </Button>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              >
              <Typography>transfer</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TextField
                id="recipient"
                label="recipient"
                value={this.state.recipient}
                onChange={this.handleChange.bind(this, "transfer")}
                margin="normal"
              />
              <TextField
                id="transferAmount"
                label="amount"
                value={this.state.transferAmount}
                onChange={this.handleChange.bind(this, "transfer")}
                margin="normal"
              />
              <Button onClick={this.handleWrite.bind(this, "transfer")}>
                TRANSFER
              </Button>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.txBar}
          autoHideDuration={1000}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}

          message={<span id="message-id">Transaction Sent:</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Grid>
    )
  }
}
