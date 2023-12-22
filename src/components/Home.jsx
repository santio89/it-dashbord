import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom";
import Users from "./Users";
import Devices from "./Devices";
import Main from "./Main"
import Contact from "./Contact";
import Admin from "./Admin";

export default function Home({ section }) {
  const [sideExpanded, setSideExpanded] = useState(false)
  /*   const [searchParams, setSearchParams] = useSearchParams({ q: false, a: false }) */


  return (
    <div className="home">
      <aside className={`side-panel ${sideExpanded && "expanded"}`}>
        <div className="side-panel__opts">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/devices">Devices</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Admin</Link>
        </div>

        <button className="side-toggle" onClick={() => setSideExpanded(sideExpanded => !sideExpanded)}>Toggle</button>
      </aside>
      <main className="main-content">
        {section === "main" && <Main />}
        {section === "users" && <Users />}
        {section === "devices" && <Devices />}
        {section === "contact" && <Contact />}
        {section === "admin" && <Admin />}
      </main>

    </div>
  )
}
