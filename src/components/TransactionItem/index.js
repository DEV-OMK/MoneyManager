// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteHistory} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <p className="table-text">{title}</p>
      <p className="table-text">{`Rs ${amount}`}</p>
      <p className="table-text">{type}</p>
      <button type="button" onClick={onClickDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
