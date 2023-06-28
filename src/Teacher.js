import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Teacher() {
  const [teacher, setTeacher] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    teacherData();
  }, []);

  let teacherData = async () => {
    try {
      setLoading(true);
      let detail = await axios.get(
        "https://648bb8e117f1536d65eb270d.mockapi.io/Teacher"
      );
      console.log(detail.data);
      setTeacher(detail.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  let deleteTeacherData = () => {
    let deleteData = window.confirm("Are you sure to delete?");
    if (deleteData) {
      alert("Deleted !!");
    }
  };
  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Teachers</h1>
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Teacher Details
            <Link
              to={"/teachers_create"}
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
                    <th scope="col">NAME</th>
                    <th scope="col">TEACHER ID</th>
                    <th scope="col">DEPARTMENT</th>
                    <th scope="col">JOINING DATE</th>
                    <th scope="col">GENDER</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">PHONE NO.</th>
                    <th scope="col">ACTIVE</th>
                  </tr>
                </thead>
                <tfoot>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">TEACHER ID</th>
                    <th scope="col">DEPARTMENT</th>
                    <th scope="col">JOINING DATE</th>
                    <th scope="col">GENDER</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">PHONE NO.</th>
                    <th scope="col">ACTIVE</th>
                  </tr>
                </tfoot>
                <tbody>
                  {teacher.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.teacherId}</td>
                        <td>{item.dept}</td>
                        <td>{item.joiningdate}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                          <Link
                            type="button"
                            to={`/teachers_profile/${item.id}`}
                            className="btn btn-outline-secondary me-1"
                          >
                            View
                          </Link>
                          <Link
                            type="button"
                            to={`/teachers_edit/${item.id}`}
                            className="btn btn-outline-primary me-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              deleteTeacherData();
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

export default Teacher;
