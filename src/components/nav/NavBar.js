import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="navbar__link" to="/">Locations</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/employees">Employees</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/customers">Customers</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/animals">Animals</Link>
      </li>
      {
        localStorage.getItem("kennels_customer")
          ? <li className="navbar__item navbar__logout">
            <Link className="navbar__link" to="/login" onClick={() => {
              localStorage.removeItem("kennels_customer")
              navigate("/login", { replace: true })
            }}>Logout</Link>
          </li>
          : ""
      }
    </ul>
  )
}
