import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getAnimalById, releaseAnimal } from "../../managers/animals"

import "./Animals.css"

export const AnimalDetails = () => {
  const [animal, setAnimal] = useState({ location: {}, customer: {} })
  const { animalId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getAnimalById(animalId)
      .then(setAnimal)
  }, [animalId])

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <div className="animal__status">Status: {animal.status}</div>

      <button onClick={() => releaseAnimal(animal.id).then(() => navigate("/animals"))} >Release Animal</button>

      <button onClick={() => {
        navigate(`/animals/edit/${animal.id}`)
      }}>Edit</button>
    </section>
  )
}
