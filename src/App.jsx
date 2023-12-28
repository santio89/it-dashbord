import { useRef } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Modal from './components/Modal'
import './styles/css/styles.css'

function App() {
  const rootTheme = useRef()

  const Layout = () => (
    <>
      <Nav rootTheme={rootTheme} />
      <div className="mainContainer">
        <Outlet />
      </div>
    </>
  );

  return (
    <>
      <div ref={rootTheme} className={`root-theme`}>
        <BrowserRouter>
          <Modal />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home section={"main"} />} />
              <Route path="/users" element={<Home section={"users"} />} />
              <Route path="/devices" element={<Home section={"devices"} />} />
              <Route path="/tdl" element={<Home section={"tdl"} />} />
              <Route path="/contact" element={<Home section={"contact"} />} />
              <Route path="/admin" element={<Home section={"admin"} />} />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
