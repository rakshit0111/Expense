
import MyCat from "./AddCat/AddCat"
import AddCat from "./AddCat/AddCat"
import MyModal from "./AddPlan/AddPlan"
import AddPlanDialog from "./AddPlan/AddPlan"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

import Contact from "./Contactus/Contact"
import Login from "./Login/Login"
import SignupForm from "./SignUp/SignupForm"

import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route index path="/" element={<div className="p-6"><Header /><MyModal /></div>}></Route>
        <Route index path="/login" element={<Login />}></Route>
        <Route index path="/signup" element={<SignupForm />}></Route>
        <Route index path="/contact" element={<Contact />}></Route>
        <Route index path="/add-trans" element={<AddCat />}></Route>

        <Route index path="/add-plan" element={<MyCat />}></Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
