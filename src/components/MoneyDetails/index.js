// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {transactionHistory} = props
  let balance = 0
  let income = 0
  let expenses = 0

  if (transactionHistory.length !== 0) {
    transactionHistory.forEach(eachTransaction => {
      if (eachTransaction.type === 'Income') {
        balance += parseInt(eachTransaction.amount)
        income += parseInt(eachTransaction.amount)
      } else {
        balance -= parseInt(eachTransaction.amount)
        expenses += parseInt(eachTransaction.amount)
      }
    })
  }

  return (
    <div className="money-details-container">
      <div className="balance-card">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image"
          />
        </div>
        <div className="details-container">
          <p className="card-text">Your Balance</p>
          <p className="card-amount" data-testid="balanceAmount">
            {balance}
          </p>
        </div>
      </div>
      <div className="income-card">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image"
          />
        </div>
        <div className="details-container">
          <p className="card-text">Your Income</p>
          <p className="card-amount" data-testid="incomeAmount">
            {income}
          </p>
        </div>
      </div>
      <div className="expenses-card">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image"
          />
        </div>
        <div className="details-container">
          <p className="card-text">Your Expenses</p>
          <p className="card-amount" data-testid="expensesAmount">
            {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
