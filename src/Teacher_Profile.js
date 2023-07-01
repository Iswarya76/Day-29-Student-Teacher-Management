import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Teacher_Profile() {
const params=useParams();
const [teacher, setTeacher] = useState([]);
const [isloading, setLoading] = useState(false);

useEffect(() => {
  teacherData();
}, []);

let teacherData = async () => {
  try {
    setLoading(true);
    let detail = await axios.get(
      `https://648bb8e117f1536d65eb270d.mockapi.io/Teacher/${params.id}`
    );
    console.log(detail.data);
    setTeacher(detail.data);
    setLoading(false);
  } catch (error) {
    alert("Error");
  }
};
  return (
<ul class="list-group">
  <li class="list-group-item list-group-item-primary justify-content-between align-items-center">Teacher Profile Id: {teacher.id}</li>
  <li class="list-group-item list-group-item-light">Teacher Name: {teacher.name}</li>
  <li class="list-group-item list-group-item-light">Teacher Id: {teacher.teacherId}</li>
  <li class="list-group-item list-group-item-light">Department: {teacher.dept}</li>
  <li class="list-group-item list-group-item-light">Joining Date: {teacher.joiningdate}</li>
  <li class="list-group-item list-group-item-light">Gender: {teacher.gender}</li>
  <li class="list-group-item list-group-item-light">Date of Birth: {teacher.dob}</li>
  <li class="list-group-item list-group-item-light">Phone: {teacher.phone}</li>
  <li class="list-group-item list-group-item-light">Total Experience in Years: {teacher.experience}</li> 
</ul>
  )
}
export default Teacher_Profile