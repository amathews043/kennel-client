import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLocationById } from "../../managers/locations"
import "./Locations.css"

export const LocationDetail = () => {
  const [location, setLocation] = useState({})
  const { locationId } = useParams()

  useEffect(() => {
    getLocationById(locationId).then(locationData => setLocation(locationData))
  },[locationId])

  return (
    <section className="location">
      <h2 className="location__name">{location.name}</h2>
      <address className="location__address">{location.address}</address>
      <div>
        <h4>Employees</h4>
        {
          location.employees?.map(e => e.name).join(", ")
        }
      </div>
      <div>
        <h4>Current Residents</h4>
        {
          location.animals?.map(a => a.name).join(", ")
        }
      </div>
    </section>
  )
}
