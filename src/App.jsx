import { Route, Routes } from "react-router"
import Homepage from "./Component/Homepage/Homepage"
import AboutPage from "./Component/AboutPage/AboutPage"
import Navbar from "./Component/Navbar/Navbar"
import CollegeDetailsPage from "./Component/CollegeDetailsPage/collegeDetailsPage"

import './App.css'
import LoginPage from "./Component/LoginPage/LoginPage"
import StudentPage from "./Component/CollegeDetailsPage/StudentPage/StudentPage"
import DepartmentPage from "./Component/CollegeDetailsPage/DepartmentPage/DepartmentPage"
import DetailsPage from "./Component/CollegeDetailsPage/DetailsPage/DetailsPage"
import UserList from "./Component/UserList/UserList"
import UserDetails from "./Component/UserDetails/UserDetails"

function App() {
  

  return (
    <>

   
       {/* <Navbar></Navbar> */}

   
    <Routes>

      <Route element={<Navbar></Navbar>}>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/"  element={<Homepage></Homepage>}   />
            <Route path="/users/list?" element={<UserList></UserList>}></Route>
            
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/users/:id/:name?" element={<UserDetails></UserDetails>} ></Route>

      </Route>
      
      
          
      
      <Route path="/college" element={ <CollegeDetailsPage></CollegeDetailsPage> }>
              <Route index element={<StudentPage></StudentPage>}   />

              <Route path="dept" element={<DepartmentPage></DepartmentPage>}></Route>

              <Route path="clg-details" element={<DetailsPage></DetailsPage>}></Route>

      </Route>

      <Route path="/*" element={<h1>404</h1>}></Route>


    </Routes>
   
    </>
  )
}

export default App
