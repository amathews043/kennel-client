
export const getAnimals = () => {
  return fetch("http://localhost:8088/animals")
      .then(res => res.json())
}

export const getAnimalsBySearchTerm = (searchTerm) => {
  return fetch(`http://localhost:8088/animals?search=${searchTerm}`)
      .then(res => res.json())
}

export const getAnimalById = (id) => {
  return fetch(`http://localhost:8088/animals/${id}`)
      .then(res => res.json())
}

export const addAnimal = animal => {
  return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
  })
}

export const updateAnimal = animal => {
  return fetch(`http://localhost:8088/animals/${animal.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
  })
}

export const releaseAnimal = (animalId) => {
  return fetch(`http://localhost:8088/animals/${animalId}`, {
      method: "DELETE"
  })
}



