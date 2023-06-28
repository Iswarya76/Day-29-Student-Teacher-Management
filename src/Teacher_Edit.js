import React from 'react'
import { Link } from 'react-router-dom'

function Teacher_edit() {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4 mb-4">Teacher - Data Edit Form</h1>
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Teacher Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Teacher Name"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Teacher ID<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Joining Date<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
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
              Department<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              id="inputClass"
              className="form-select"
            >
              <option selected>Choose...</option>
              <option>Tamil</option>
              <option>English</option>
              <option>Maths</option>
              <option>Science</option>
              <option>Socialscience</option>
            </select>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <button type="submit" className="btn btn-primary mt-1">
              Submit
            </button>
            <Link
              to={"/teachers_data"}
              type="button"
              className="btn btn-secondary ms-2 mt-1"
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Teacher_edit