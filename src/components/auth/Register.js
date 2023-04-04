import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginCustomer, registerCustomer } from "../../managers/customers"
import "./Login.css"

export const Register = (props) => {
  const [customer, setCustomer] = useState({
    email: "",
    fullName: "",
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    registerCustomer(customer)
      .then(createdUser => {
        if (createdUser.hasOwnProperty("id")) {
          localStorage.setItem("kennels_user", JSON.stringify({
            id: createdUser.id
          }))

          navigate("/")
        }
      })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    loginCustomer(customer.email)
      .then(response => {
        if (response.length > 0) {
          // Duplicate email. No good.
          window.alert("Account with that email address already exists")
        }
        else {
          // Good email, create user.
          registerNewUser()
        }
      })
  }

  const updateCustomer = (evt) => {
    const copy = { ...customer }
    copy[evt.target.id] = evt.target.value
    setCustomer(copy)
  }

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form--login" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">Please Register for Honey Rae Repairs</h1>
        <fieldset>
          <label htmlFor="fullName"> Full Name </label>
          <input onChange={updateCustomer}
            type="text" id="fullName" className="form-control"
            placeholder="Enter your name" required autoFocus />
        </fieldset>
        <fieldset>
          <label htmlFor="email"> Email address </label>
          <input onChange={updateCustomer}
            type="email" id="email" className="form-control"
            placeholder="Email address" required />
        </fieldset>
        <fieldset>
          <button type="submit"> Register </button>
        </fieldset>
      </form>
    </main>
  )
}

