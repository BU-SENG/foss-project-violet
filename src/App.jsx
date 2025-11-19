import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import SignIn from './auth/SignIn.jsx'
import SignUp from './auth/SignUp.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<SignIn/>} />
      <Route path="/carelog" element={<SignUp/>} />
       {/*<Route path="/tenantreg" element={<TenantReg/>} />
       <Route path="/landdash" element={<Ldash/>} />
       <Route path="/houses" element={<Houses/>} />
       <Route path="/agents" element={<Agents/>} />
       <Route path="/tenants" element={<Tenants/>} />
      <Route path="/single-house/:id" element={<SingleHouseDetails />} />
      <Route path="/caredash" element={<Cdash/>} /> */}
     </Routes>
     </div>
    </Router>
  )
}

export default App
