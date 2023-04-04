import { Link } from "react-router-dom"
import "./Employees.css"

export const Employee = ({ employee }) => (
  <section className="employee" key={employee.id}>
    <Link to={`/employees/${employee.id}`}>
      <h3>{employee.name}</h3>
    </Link>
  </section>
)
