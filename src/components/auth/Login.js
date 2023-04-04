import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { loginCustomer } from "../../managers/customers";
import "./Login.css"

export const Login = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    loginCustomer(email)
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0]
          localStorage.setItem("kennels_customer", JSON.stringify(
            user.id
          ))

          navigate("/")
        }
        else {
          window.alert("Invalid login")
        }
      })
  }

  return (
    <main className="container--login">
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Kennels</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input type="email"
              value={email}
              onChange={evt => setEmail(evt.target.value)}
              className="form-control"
              placeholder="Email address"
              required autoFocus />
          </fieldset>
          <fieldset>
            <button type="submit">
              Sign in
            </button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  )
}

