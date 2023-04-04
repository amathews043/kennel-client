import { useState, useEffect } from "react"
import { addAnimal, updateAnimal, getAnimalById } from "../../managers/animals"
import { getLocations } from "../../managers/locations"
import { useParams, useNavigate } from 'react-router-dom'

export const AnimalForm = () => {
  const [locations, setLocations] = useState([])
  const { animalId } = useParams()
  const [animal, setAnimal] = useState({})
  const navigate = useNavigate()

  const handleControlledInputChange = (event) => {
    const newAnimal = Object.assign({}, animal)
    newAnimal[event.target.name] = event.target.value
    setAnimal(newAnimal)
  }

  useEffect(() => {
    getLocations().then(locationsData => setLocations(locationsData))
  }, [])

  useEffect(() => {
    if (animalId) {
      getAnimalById(animalId).then((res) => {
        setAnimal(res)
      })
    }
  }, [animalId])

  const constructNewAnimal = () => {
    const locationId = parseInt(animal.location_id)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      if (animalId) {
        // PUT
        updateAnimal({
          id: animal.id,
          name: animal.name,
          breed: animal.breed,
          locationId: locationId,
          status: animal.status,
          customerId: parseInt(localStorage.getItem("kennels_customer"))
        })
          .then(() => navigate("/animals"))
      } else {
        // POST
        addAnimal({
          name: animal.name,
          breed: animal.breed,
          locationId: locationId,
          status: animal.status,
          customerId: parseInt(localStorage.getItem("kennels_customer"))
        })
          .then(() => navigate("/animals"))
      }
    }
  }

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">{animalId ? "Update Animal" : "Admit Animal"}</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal name: </label>
          <input type="text" name="name" required autoFocus className="form-control"
            placeholder="Animal name"
            defaultValue={animal.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="breed">Animal breed: </label>
          <input type="text" name="breed" required className="form-control"
            placeholder="Animal breed"
            defaultValue={animal.breed}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationId">Location: </label>
          <select name="locationId" className="form-control"
            value={animal.location_id}
            onChange={handleControlledInputChange}>

            <option value="0">Select a location</option>
            {
              locations.map(e => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))
            }
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="treatment">Status: </label>
          <textarea type="text" name="status" className="form-control"
            value={animal.status}
            onChange={handleControlledInputChange}>
          </textarea>
        </div>
      </fieldset>
      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewAnimal()
        }}
        className="btn btn-primary">
        {animalId ? "Save Updates" : "Make Reservation"}
      </button>
    </form>
  )
}
