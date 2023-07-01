import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Student() {
  const [student, setStudent] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    studentData();
  }, []);

  let studentData = async () => {
    try {
      setLoading(true);
      let student = await axios.get(
        "https://648bb8e117f1536d65eb270d.mockapi.io/Student"
      );
      console.log(student.data);
      setStudent(student.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }    
  };

  let deleteDetails = () => {
    const confirm = window.confirm("Do you want to delete this Profile?")
    if(confirm){
      alert("Deleted");
    }    
  };

  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Students</h1>
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Student Details
            <Link
              to={"/students_create"}
              type="button"
              className="btn btn-primary ms-5"
            >
              Create
            </Link>
          </div>
          <div className="card-body">
            {isloading ? (
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">ADMISSION NUMBER</th>
                    <th scope="col">STUDENT NAME</th>
                    <th scope="col">CLASS</th>
                    <th scope="col">FATHER'S NAME</th>
                    <th scope="col">DOB</th>
                    <th scope="col">GENDER</th>
                    <th scope="col">PHONE NO.</th>
                    <th scope="col">ACTIVE</th>
                  </tr>
                </thead>
                <tfoot>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">ADMISSION NUMBER</th>
                    <th scope="col">STUDENT NAME</th>
                    <th scope="col">CLASS</th>
                    <th scope="col">FATHER'S NAME</th>
                    <th scope="col">DOB</th>
                    <th scope="col">GENDER</th>
                    <th scope="col">PHONE NO.</th>
                    <th scope="col">ACTIVE</th>
                    </tr> 
                </tfoot>
                <tbody>
                  {student.map((item,i) => {
                    return (
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.admissionNo}</td>
                        <td>{item.studentName}</td>
                        <td>{item.class}</td>
                        <td>{item.fatherName}</td>
                        <td>{item.dob}</td>
                        <td>{item.gender}</td>
                        <td>{item.phone}</td>
                        <td>
                          <Link
                            to={`/students_profile/${item.id}`}
                            type="button"
                            className="btn btn-outline-secondary me-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/students_edit/${item.id}`}
                            type="button"
                            className="btn btn-outline-primary me-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              deleteDetails();
                            }}
                            type="button"
                            className="btn btn-outline-danger my-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Student;