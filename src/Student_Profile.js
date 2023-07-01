import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Student_Profile() {
const params=useParams();
const [student, setStudent] = useState([]);
const [isloading, setLoading] = useState(false);
  useEffect(() => {
    studentData();
  }, []);
  let studentData = async () => {
    try {
      setLoading(true);
      let student = await axios.get(
        `https://648bb8e117f1536d65eb270d.mockapi.io/Student/${params.id}`
      );
      console.log(student.data);
      setStudent(student.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }    
  };

  return (

<ul class="list-group">
  <li class="list-group-item list-group-item-primary justify-content-between align-items-center">Student Profile Id: {student.id}</li>
  <li class="list-group-item list-group-item-light">Admission Number: {student.admissionNo}</li>
  <li class="list-group-item list-group-item-light">Student Name: {student.studentName}</li>
  <li class="list-group-item list-group-item-light">Class: {student.class}</li>
  <li class="list-group-item list-group-item-light">Rank:{student. rank}</li>
  <li class="list-group-item list-group-item-light">Father's Name: {student.fatherName}</li>
  <li class="list-group-item list-group-item-light">Date of Birth: {student.dob}</li>
  <li class="list-group-item list-group-item-light">Gender: {student.gender}</li>
  <li class="list-group-item list-group-item-light">Place: {student.place}</li>
  <li class="list-group-item list-group-item-light">Phone: {student.phone}</li>
 
</ul>
  )
}

export default Student_Profile