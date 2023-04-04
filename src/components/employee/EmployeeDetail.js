import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getEmployeeById } from "../../managers/employees"

import "./Employees.css"


export const EmployeeDetail = () => {
  const { employeeId } = useParams()

  const [employee, setEmployee] = useState({})

  useEffect(() => {
    getEmployeeById(employeeId).then(employeeData => setEmployee(employeeData))
  }, [employeeId])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div>Currently working at {employee.location?.name}</div>
      <div>
        {
          (employee?.animals?.length === 0)
          ? "Not assigned to any animals"
          : `Currently taking care of ${employee?.animals?.map(a => a.name)}`
        }
      </div>
    </section>
  )
}
