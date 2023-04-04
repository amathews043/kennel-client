import { Link } from "react-router-dom"
import "./Locations.css"

export const Location = ({ location }) => (
  <article key={`location--${location.id}`} className="card location" style={{ width: `18rem` }}>
    <section className="card-body">

      <Link className="card-link"
        to={`/locations/${location.id}`}>
        <h2 className="card-title">{location.name}</h2>
      </Link>

    </section>
    <section>
      {`${location.employees.length} ${location.employees.length === 1 ? "employee" : "employees"}`}
    </section>
    <section>
      {`${location.animals.length} ${location.animals.length === 1 ? "animal" : "animals"}`}
    </section>
  </article>
)
