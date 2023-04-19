import { useState, useEffect } from "react"
import { addEmployee, getEmployeeById } from "../../managers/employees"
import { getLocations } from "../../managers/locations"
import { useParams, useNavigate } from 'react-router-dom'

export const EmployeeForm = () => {
    const [locations, setLocations] = useState([])
    const { animalId } = useParams()
    const [employee, setEmployee] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getLocations().then(data => setLocations(data))
    }, [])

    const handleControlledInputChange = (event) => {
        const newEmployee = Object.assign({}, employee)
        newEmployee[event.target.name] = event.target.value
        setEmployee(newEmployee)
    }

    const constructNewEmployee = () => {
        const locationId = parseInt(employee.location_id)

        if (locationId === 0) {
            window.alert("Please Select a Location")
        } else {
            addEmployee({
                name: employee.name,
                address: employee.address, 
                location_id: locationId
            })
            .then(() => navigate("/employees"))
        }
    }


    return (
        <form className="employeeForm">
            <h2 className="title"> Add Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control" 
                    placeholder="Employee Name"
                    defaultValue={employee.name}
                    onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address"> Employee Address: </label>
                    <input type="text" name="address"required autoFocus className="form-control"
                    placeholder="Employee Address"
                    defaultValue={employee.address}
                    onChange={handleControlledInputChange}
                    /> 
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location:</label>
                    <select name="location_id" className="form-control"
                    value={employee.location_id}
                    onChange={handleControlledInputChange}>
                        <option value="0">Select a Location</option>
                        {
                            locations.map(location => (
                                <option key={location.id} value={location.id}>{location.name}</option>
                            ))
                        }

                    </select>

                </div>
            </fieldset>
            <button type="submit" onClick={evt => {
                evt.preventDefault()
                constructNewEmployee()
            }}> Create Employee File</button>
        </form>
    )
}