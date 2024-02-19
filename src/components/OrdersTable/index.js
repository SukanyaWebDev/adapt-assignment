import './index.css'

const OrdersTable = () => (
  <div>
    <div className="buttons-container">
      <button type="button">
        <p>Import Orders</p>
      </button>
      <button type="button">Accept</button>
      <button type="button">Print</button>
    </div>
    <ul>
      <li>
        <input type="checkbox" />
      </li>
      <li>
        <select>
          Channel
          <option>1</option>
          <option>2</option>
        </select>
      </li>
    </ul>
    <button type="button">Refresh</button>
  </div>
)

export default OrdersTable
