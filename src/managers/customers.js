export const getCustomers = () => {
  return fetch("http://localhost:8088/customers")
      .then(res => res.json())
}

export const registerCustomer = (customer) => {
  return fetch("http://localhost:8088/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(customer)
  })
    .then(res => res.json())
}

export const loginCustomer = (email) => {
  return fetch(`http://localhost:8088/customers?email=${email}`)
    .then(res => res.json())
}
