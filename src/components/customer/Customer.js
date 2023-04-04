import "./Customers.css"

export const Customer = ({ customer }) => (
  <section key={customer.id} className="customer">
    <h2>{customer.name}</h2>
    <div>{customer.address}</div>

    <h4>Animals</h4>
    { customer.animals?.map(a => <div key={`animal--${a.id}`}>{a.name} ({a.breed})</div>)}
  </section>
)
