import { useState, useEffect } from "react"
import { getAnimals } from "../../managers/animals"
import { getEmployees } from "../../managers/employees"
import { getLocations } from "../../managers/locations"

import { Location } from "./Location"
import "./Locations.css"

export const LocationList = () => {
  const [locations, setLocations] = useState([])
  const [employees, setEmployees] = useState([])
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    getEmployees().then(employeesData => setEmployees(employeesData))
    getAnimals().then(animalsData => setAnimals(animalsData))
  }, [])

  useEffect(() => {
    if (employees && animals) {
      getLocations().then(locationsData => {
        const combined = locationsData.map(location => {
          location.employees = employees.filter(e => e.location_id === location.id)
          location.animals = animals.filter(a => a.location_id === location.id)
          return location
        })
        setLocations(combined)
      })
    }
  }, [employees, animals])

  return (
    <div style={{ margin: "0rem 3rem" }}>
      <h1>Locations</h1>

      <div className="locations">
        {
          locations.map(location => {
            return <Location location={location} />
          })
        }
      </div>
    </div>
  )
}
