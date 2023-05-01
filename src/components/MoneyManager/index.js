import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    transactionHistory: [],
  }

  addTransaction = event => {
    event.preventDefault()

    const {title, amount, type} = this.state
    if (title !== '' && amount !== '') {
      const typeText =
        type === transactionTypeOptions[0].optionId
          ? transactionTypeOptions[0].displayText
          : transactionTypeOptions[1].displayText
      const newTransaction = {
        id: uuidv4(),
        title,
        amount,
        type: typeText,
      }

      this.setState(prevState => ({
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
        transactionHistory: [...prevState.transactionHistory, newTransaction],
      }))
    }
  }

  deleteHistory = id => {
    const {transactionHistory} = this.state
    const filteredTransactionHistory = transactionHistory.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({
      transactionHistory: filteredTransactionHistory,
    })
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {title, amount, type, transactionHistory} = this.state
    return (
      <div className="bg-container">
        <div className="money-manager-card">
          <div className="header-card">
            <h1 className="header-name">Hi, Richard</h1>
            <p className="header-greeting">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <br />
          <MoneyDetails transactionHistory={transactionHistory} />
          <br />
          <div className="footer-card-container">
            <form className="transaction-card" onSubmit={this.addTransaction}>
              <h1 className="transaction-card-heading">Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                value={title}
                onChange={this.onChangeTitle}
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <br />
              <label htmlFor="type">TYPE</label>
              <select id="type" value={type} onChange={this.onChangeType}>
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <br />
            <div className="transaction-history-card">
              <h1 className="transaction-history-card-heading">History</h1>
              <ul className="table">
                <li className="table-head">
                  <p className="table-text">Title</p>
                  <p className="table-text">Amount</p>
                  <p className="table-text">Type</p>
                  <p className="table-text"> </p>
                </li>
                {transactionHistory.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteHistory={this.deleteHistory}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
