const express = require("express")
const axios = require("axios")

const gearium = {
  start: (port, transactionPort, statePort) => {
    console.log("### starting gearium")

    // create express server
    const app = express()

    // transaction endpoint
    app.get("/transaction/:id", async (req, res) => {
      console.log("hit transaction endpoint")
    })

    // state endpoint
    app.get("/state/:block", async (req, res) => {
      console.log("hit state endpoint")
      console.log(req.params.block)
      res.send({ state: "yooo" })
    })

    app.listen(port, () => {
      console.log(`### gearium listening on ${port}`)
    })
  }
}

module.exports = gearium
