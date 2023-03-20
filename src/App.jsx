import {Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar"
import Login from "./pages/login/Login"
import Signup from './pages/signup/Signup';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <h1>Home</h1> */}
    </main>
  )
}

export default App