import React, { Component } from "react"
import { AppBar, Grid, MenuList, MenuItem, Avatar, TextField, Paper, Button } from "@material-ui/core"
import { ThemeProvider, MuiThemeProvider, getMuiTheme } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./theme.js"

export default class Main extends Component {
  render = () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ height: 60 }}>
          <AppBar>
            <div style={{ height: 60 }}>
            </div>
          </AppBar>
        </Grid>
        <Grid item xs={12} style={{ margin: 20 }}>
          <Paper style={{ width: "100%", height: "100" }}>
            <Grid xs={12} container style={{ padding: 10 }}>
              <Grid item xs={2}>
                <h2 style={{ color: "white" }}>Token Contract</h2>
              </Grid>
              <Grid item xs={3}>
                <Button>
                  SetOwner
                </Button>
                <Button>
                  Mint
                </Button>
                <Button>
                  Transfer
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ padding: 10, margin: 20 }}>
          <Paper style={{ padding: 10 }}>
            <h2>Market</h2>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
