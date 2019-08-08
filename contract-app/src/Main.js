import React, { Component } from "react"
import { AppBar, Grid, MenuList, MenuItem, Avatar, TextField, Paper, Button } from "@material-ui/core"
import { ThemeProvider, MuiThemeProvider, getMuiTheme } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import theme from "./theme.js"
import Wallet from "./Wallet"
import Contract from "./Contract"
import Transactions from "./Transactions"
import Blocks from "./Blocks"
import State from "./State"
import Write from "./Write"

export default class Main extends Component {
  render = () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container
        spacing={3}
        alignItems="center"
        justify="center">
        <Wallet />
        <Contract />
        <Write />
        <State />
        <Transactions />
      </Grid>
    </ThemeProvider>
  )
}
