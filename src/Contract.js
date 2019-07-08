import React, { Component } from "react"
import { Grid, Paper, Button, Divider, List, ListItem, ListItemText } from "@material-ui/core"

export default class extends Component {
  render() {
    return (
      <Grid item xs={12} style={{ margin: 20 }}>
        <Paper style={{ width: "100%" }}>
          <Grid xs={12} container style={{ padding: 10 }}>
            <Grid item xs={2}>
              <h2 style={{ color: "white" }}>Token Contract</h2>
            </Grid>
            <Grid item xs={3}>
              <List>
                <ListItem button>
                  <ListItemText primary="SetOwner" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Mint" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Transfer" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List>
                <ListItem button>
                  <ListItemText primary="GetOwner" />
                </ListItem>
               <ListItem button>
                  <ListItemText primary="GetSupply" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="GetBalance" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Divider />
        </Paper>
      </Grid>
    )
  }
}
