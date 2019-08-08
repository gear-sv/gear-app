const express = require("express")
const axios = require("axios")

const gearium = {
  start: (port, transactionPort, statePort) => {
    console.log("### starting gearium")

    // create express server
    const app = express()

    // static interface for web app
    app.use(express.static("static"))


    /*
      WEB SERVER
    */
    app.get("/", (req, res) => {
      res.send(`${__dirname}/index.html`)
    })

    /*
      TRANSACTION
    */
    app.get("/transaction/:id", async (req, res) => {
      // 1. format query string
      const query = {
        "get": req.params.id
      }
      const queryB64 = Buffer.from(JSON.stringify(query)).toString("base64")

      // 2. fetch transaction from planarium service
      const response = await axios({
        url: `http://localhost:${transactionPort}/q/${queryB64}`
      })

      console.log(response.data.val)

      // res.send(response.data.val)
    })

    /*
      STATE
    */
    app.get("/state/:block", async (req, res) => {
      // 1. format query string
      const query = {
        "get": req.params.block
      }
      const queryB64 = Buffer.from(JSON.stringify(query)).toString("base64")

      // 2. fetch state from planarium service
      const response = await axios({
        url: `http://localhost:${statePort}/q/${queryB64}`
      })

      console.log(response.data.val)

      // res.send(response.data.val)
    })

    app.listen(port, () => {
      console.log(`### gearium listening on ${port}`)
    })
  }
}

module.exports = gearium
