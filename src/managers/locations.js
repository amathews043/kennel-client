
export const getLocations = () => {
  return fetch("http://localhost:8088/locations")
    .then(res => res.json())
}

export const addLocation = (location) => {
  return fetch("http://localhost:8088/locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(location)
  })
}

export const getLocationById = (id) => {
  return fetch(`http://localhost:8088/locations/${id}`)
    .then(res => res.json())
}
