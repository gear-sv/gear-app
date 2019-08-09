import React, { Component } from "react"
import { Grid, Paper, Button, Divider, Card, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, TextField } from "@material-ui/core"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import code from "./contract.json"

export default class extends Component {
  async handleGET() {
    console.log("fetching supply")
    const supply = await fetch(`http://localhost:3002/contract/getSupply`)
    console.log("supply", supply)
  }

  render() {
    return (
      <Grid item xs={12} md={10} xl={8} style={{ margin: 10 }}>
        <Paper style={{ width: "100%", padding: 10 }}>
          <h2 style={{ color: "white" }}>Contract</h2>
          <h3><a style={{textDocoration: "none"}}href="https://whatsonchain.com/tx/63eec681025b07b9aa9d3720a125ce33dfd46e0b940a518100811c1f4eea86f0">63eec681025b07b9aa9d3720a125ce33dfd46e0b940a518100811c1f4eea86f0</a></h3>
          <Divider />
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
              <Typography>FungibleToken.cpp</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SyntaxHighlighter language="cpp" style={ atomDark }>
                {code.code}
              </SyntaxHighlighter>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>
    )
  }
}


/*

<span style={{ whiteSpace: "pre-wrap" }}>
  {code.code}
</span>

*/
