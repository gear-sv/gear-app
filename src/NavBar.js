import React, { Component } from "react"
import { AppBar, Grid, Button } from "@material-ui/core"
import bsv from "bsv"

export default class NavBar extends Component {
  createKey() {
    // generate key
    const privateKey = bsv.PrivateKey.fromRandom()
    const publicKey = bsv.PublicKey.fromPrivateKey(privateKey)
    const publicAddress = bsv.Address.fromPublicKey(publicKey)
    
    const key = {
      privateKey: privateKey.toString(),
      publicKey: publicKey.toString(),
      publicAddress: publicAddress.toString()
    }

    // save to local storage
    window.localStorage.setItem("key", JSON.stringify(key))
  }

  async downloadKey() {
    console.log("downloading key")

    // get key from local storage
    const key = window.localStorage.getItem("key")

    // automatic link click download
    const blob = new Blob([key], {type: "application/json"})
    const href = await URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = href
    link.download = "key.json"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  render() {
    return (
      <Grid item xs={12} style={{ height: 60 }}>
        <AppBar>
          <div style={{ height: 60 }}>
          <Button onClick={this.createKey}>
            CREATE KEY
          </Button>
          <Button onClick={this.downloadKey}>
            DOWNLOAD KEY
          </Button>
          </div>
        </AppBar>
      </Grid>
    )
  }
}
