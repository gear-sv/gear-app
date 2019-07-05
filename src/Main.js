import React, { Component } from "react"
import { AppBar, Grid, MenuList, MenuItem, Avatar, TextField, Paper, Button } from "@material-ui/core"
import { ThemeProvider, MuiThemeProvider, getMuiTheme } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import theme from "./theme.js"
import NavBar from "./NavBar"
import Contract from "./Contract"
import Transactions from "./Transactions"
import Blocks from "./Blocks"

export default class Main extends Component {
  render = () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={3}>
        <NavBar />
        <Contract />
        <Grid item xs={12} style={{ padding: 10, margin: 20 }}>
          <Paper style={{ padding: 10 }}>
            <h2>Market</h2>
          </Paper>
        </Grid>
        <Transactions />
        <Blocks />
      </Grid>
    </ThemeProvider>
  )
}
