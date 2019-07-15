import React, { Component } from "react"
import { Grid, Paper, Divider, Table, TableBody, TableCell, TableRow, TableHead } from "@material-ui/core"

export default class Transaction extends Component {
  constructor() {
    super()
    this.state = {}
    this.exampleTransactions = [
      "945cc694836c3890f248c3755ea950e0a114439e389cfb6439c53f675512755c",
      "1b831bf405e7215e3b756c43ba7c97bea3c5ddcc2bafec10e3636c897ddd215c",
      "9d458bf0474fcd5de9d07ea1c6f1dfa0a2c331b08a0167c2d1350e62f2bfe25b",
      "4efa64dcf498e4158a1e42fc4db10ba6663164d86e29a71fb85c312fbe795d5b"
    ]
  }

  async componentDidMount() {
    const transactions = []

    for (let i = 0; i < this.exampleTransactions.length; i++) {
      const rawTx = await fetch(`http://localhost:3002/transaction/${this.exampleTransactions[i]}`)
      const jsonTx = await rawTx.json()
      transactions.push(jsonTx)
    }

    this.setState((state) => {
      return { transactions: transactions }
    }) 
  }

  transactionList() {
    if (!this.state.transactions) return null
    return this.state.transactions.map((transaction, i) => {
      return (
        <TableRow key={i}>
          <TableCell>{transaction.val.tx.h}</TableCell>
          <TableCell>{transaction.val.blk.t}</TableCell>
          <TableCell>{transaction.val.blk.i}</TableCell>
        </TableRow>
      )
    })
  }
  
  render() {
    return (
      <Grid container xs={6} style={{ padding: 10 }}>
        <Paper style={{ width: "100%", padding: 10 }}>
          <h2>Transactions</h2>
          <Divider />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Transaction Hash</TableCell>
                <TableCell align="right">Tape Index</TableCell>
                <TableCell align="right">Block</TableCell>
                <TableCell align="right">Method</TableCell>
                <TableCell align="right">Params</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.transactionList()}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    )
  }
}
