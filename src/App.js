import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Student from "./Student";
import Create_Student from "./Create_Student";
import Student_Edit from "./Student_Edit";
import Teacher from "./Teacher";
import Create_Teacher from "./Create_Teacher";
import Teacher_Profile from "./Teacher_Profile";
import Teacher_edit from "./Teacher_Edit";
import Student_Profile from "./Student_Profile";
import Welcome_Portal from "./Welcome_Portal";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import Portal_Layout from "./Portal_Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/portal" element={<Portal_Layout />}></Route>
        <Route path="welcome" element={<Welcome_Portal />} />
        <Route path="students_data" element={<Student />} />
        <Route path="students_create" element={<Create_Student />} />
        <Route path="students_profile/:id" element={<Student_Profile />} />
        <Route path="students_edit/:id" element={<Student_Edit />} />
        <Route path="teachers_data" element={<Teacher />} />
        <Route path="teachers_create" element={<Create_Teacher />} />
        <Route path="teachers_profile/:id" element={<Teacher_Profile />} />
        <Route path="teachers_edit/:id" element={<Teacher_edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
