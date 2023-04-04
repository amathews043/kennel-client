export const getEmployees = () => {
  return fetch("http://localhost:8088/employees")
    .then(res => res.json())
}

export const getEmployeeById = (id) => {
  return fetch(`http://localhost:8088/employees/${id}`)
    .then(res => res.json())
}

export const addEmployee = employee => {
  return fetch("http://localhost:8088/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
  })
}

