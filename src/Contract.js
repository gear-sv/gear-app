import React, { Component } from "react"
import { Grid, Paper, Button, Divider, List, ListItem, ListItemText, Card, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, TextField } from "@material-ui/core"

export default class extends Component {
  async handleGET() {
    console.log("fetching supply")
    const supply = await fetch(`http://localhost:3002/contract/getSupply`)
    console.log("supply", supply)
  }

  handleChange(key) {
  
  }

  render() {
    return (
      <Grid item xs={6} style={{ margin: 20 }}>
        <Paper style={{ width: "100%" }}>
          <Grid xs={6} container style={{padding: 10}}>
            <Grid item xs={4}>
              <h2 style={{ color: "white" }}>Token Contract</h2>
            </Grid>
            <Grid item xs={8}>
            <h3><a style={{textDocoration: "none"}}href="https://whatsonchain.com/tx/63eec681025b07b9aa9d3720a125ce33dfd46e0b940a518100811c1f4eea86f0">63eec681025b07b9aa9d3720a125ce33dfd46e0b940a518100811c1f4eea86f0</a></h3>
            </Grid>
          </Grid>
          <Divider />
          <Grid container xs={12}>
            <Grid item xs={6}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography>getSupply</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Button>
                    GETSUPPLY
                  </Button>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography>getOwner</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Button>
                    GETOWNER
                  </Button>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography>getBalance</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TextField
                    id="standard-name"
                    label="account"
                    value={this.account}
                    onChange={this.handleChange('name')}
                    margin="normal"
                  />
                  <Button>
                    GETBALANCE
                  </Button>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
            <Grid item xs={6}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography>mint</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Button>
                    MINT
                  </Button>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                <Typography>setOwner</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Button>
                    SETOWNER
                  </Button>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  >
                  <Typography>transfer</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TextField
                    id="standard-name"
                    label="account"
                    value={this.account}
                    onChange={this.handleChange('name')}
                    margin="normal"
                  />
                  <Button>
                    TRANSFER
                  </Button>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}
