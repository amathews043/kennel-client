import { useEffect, useState } from "react"
import { getAnimals } from "../../managers/animals";
import { getCustomers } from "../../managers/customers";
import { Customer } from "./Customer";
import "./Customers.css"

export const CustomerList = () => {
  const [animals, setAnimals] = useState([])
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers().then(customersData => setCustomers(customersData))
    getAnimals().then(animalsData => setAnimals(animalsData))
  }, [])

  return (
    <div style={{ margin: "0rem 3rem" }}>
      <h1>Customers</h1>
      <article className="customers">
        {
          customers.map(customer => {
            customer.animals = animals.filter(a => customer.id === a.customer_id) || []
            return <Customer customer={customer} />
          })
        }
      </article>
    </div>
  )
}
