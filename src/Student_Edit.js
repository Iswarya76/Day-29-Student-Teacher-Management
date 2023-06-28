import React from 'react'
import { Link } from 'react-router-dom'

function Student_Edit() {
    return (
        <div className="container-fluid px-4">
          <h1 className="mt-4 mb-4">Student Data Edit Form</h1>
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label for="formGroupExampleStudent" className="form-label">
                    Student Name<span style={{ color: "red" }}>*</span>:
                  </label>
                  <input
                    type="text"               
                    className="form-control"
                    id="formGroupExampleStudent"
                    placeholder="Student Name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label for="formGroupExampleFather" className="form-label">
                    Father Name<span style={{ color: "red" }}>*</span>:
                  </label>
                  <input
                    type="text"                
                    className="form-control"
                    id="formGroupExampleFather"
                    placeholder="Father Name"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label for="formGroupExampleAdmission" className="form-label">
                    Admission No<span style={{ color: "red" }}>*</span>:
                  </label>
                  <input
                    type="number"               
                    className="form-control"
                    id="formGroupExampleAdmission"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label for="formGroupExampleDOB" className="form-label">
                    DOB<span style={{ color: "red" }}>*</span>:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="formGroupExampleDOB"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label for="inputState" className="form-label">
                  Gender<span style={{ color: "red" }}>*</span>:
                </label>
                <select
                  id="inputState"
                  className="form-select"
                >
                  <option selected>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="col-md-4">
                <label for="inputClass" className="form-label">
                  className<span style={{ color: "red" }}>*</span>:
                </label>
                <select
                  id="inputClass"
                  className="form-select"
                >
                  <option selected>Choose...</option>
                  <option>10A</option>
                  <option>10B</option>
                  <option>10C</option>
                  <option>12A</option>
                  <option>12B</option>
                  <option>12C</option>
                </select>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label for="formGroupExamplePhone" className="form-label">
                    Phone No<span style={{ color: "red" }}>*</span>:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="formGroupExamplePhone"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <Link
                  to={"/students_data"}
                  type="button"
                  className="btn btn-secondary ms-2"
                >
                  Back
                </Link>
              </div>
            </div>
          </form>
        </div> 
    )
}

export default Student_Edit