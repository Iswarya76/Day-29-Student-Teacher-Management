import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create_Student() {
  const navigate=useNavigate();
    const formik=useFormik({
        initialValues: {
            studentName: "",
            admissionNo: "",
            class: "",
            dob: "",
            fatherName: "",
            gender: "",
            phone: "",
            rank:"",
            place:"",
          },
          validate: (values) => {
            let error = {};
      
            if (!values.studentName) {
              error.studentName = "*Required";
            } else if (
              values.studentName.length < 3 ||
              values.studentName.length > 15
            ) {
              error.studentName = "Name must be 3 to 15 characters";
            }
      
            if (!values.admissionNo) {
              error.admissionNo = "*Required";
            } else if (
              values.admissionNo.toString().length < 4 ||
              values.admissionNo.toString().length > 5
            ) {
              error.admissionNo = "Number must be 4 or 5 digits";
            }
      
            if (!values.class) {
              error.class = "*Required";
            }
      
            if (!values.dob) {
              error.dob = "*Required";
            }
      
            if (!values.fatherName) {
              error.fatherName = "*Required";
            } else if (
              values.fatherName.length < 3 ||
              values.fatherName.length > 15
            ) {
              error.fatherName = "Characters must between 3 to 15";
            }
      
            if (!values.gender) {
              error.gender = "*Required";
            }
      
            if (!values.phone) {
              error.phone = "*Required";
            } else if (values.phone.toString().length !== 10) {
              error.phone = "Invalid phone number";
            }
            if (!values.rank) {
              error.rank = "*Required";
            }
            if (!values.place) {
              error.place = "*Required";
            }
            return error;
          },
          onSubmit: async(values)=>{
            try{
                let studentdata=await axios.post("https://648bb8e117f1536d65eb270d.mockapi.io/Student",values)
                console.log(studentdata);
        alert("Student Data Added Successfully !!");
        navigate('/students_data')
      } catch (error) {
        alert("Error, Please check it!!");
      }
    }
          
    })
  return (
    <div className="container-fluid px-4">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="mt-4 mb-4">Student Creation Form</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="formGroupExampleStudent" className="form-label">
                Student Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="name"
                name="studentName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.studentName}
                className={`form-control ${
                  formik.errors.studentName ? "error-box" : ""
                } ${
                  formik.touched.studentName && !formik.errors.studentName
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExampleStudent"
                placeholder="Student Name"
              />
              {formik.errors.studentName ? (
                <span style={{ color: "red" }}>
                  {formik.errors.studentName}
                </span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="formGroupExampleFather" className="form-label">
                Father Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="name"
                name="fatherName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fatherName}
                className={`form-control ${
                  formik.errors.fatherName ? "error-box" : ""
                } ${
                  formik.touched.fatherName && !formik.errors.fatherName
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExampleFather"
                placeholder="Father Name"
              />
              {formik.errors.fatherName ? (
                <span style={{ color: "red" }}>{formik.errors.fatherName}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="formGroupExampleAdmission" className="form-label">
                Admission Number<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"
                name="admissionNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.admissionNo}
                className={`form-control ${
                  formik.errors.admissionNo ? "error-box" : ""
                } ${
                  formik.touched.admissionNo && !formik.errors.admissionNo
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExampleAdmission"
              />
              {formik.errors.admissionNo ? (
                <span style={{ color: "red" }}>
                  {formik.errors.admissionNo}
                </span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="formGroupExampleDOB" className="form-label">
                Date of Birth<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="date"
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                className={`form-control ${
                  formik.errors.dob ? "error-box" : ""
                }${
                  formik.touched.dob && !formik.errors.dob ? "success-box" : ""
                }`}
              />
               {formik.touched.dob && formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
            </div>
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Gender<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
              id="inputState"
              className="form-select"
            >
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            {formik.errors.gender ? (
              <span style={{ color: "red" }}>{formik.errors.gender}</span>
            ) : null}
          </div>
          <div className="col-md-4">
            <label for="inputClass" className="form-label">
              Class<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              id="inputClass"
              name="class"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.class}
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
            {formik.errors.class ? (
              <span style={{ color: "red" }}>{formik.errors.class}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="formGroupExamplePhone" className="form-label">
                Phone No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className={`form-control ${
                  formik.errors.phone ? "error-box" : ""
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExamplePhone"
              />
              {formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label for="formGroupExamplePhone" className="form-label">
                Rank<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"
                name="rank"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rank}
                className={`form-control ${
                  formik.errors.rank ? "error-box" : ""
                } ${
                  formik.touched.rank && !formik.errors.rank
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExamplePhone"
              />
              {formik.errors.rank ? (
                <span style={{ color: "red" }}>{formik.errors.rank}</span>
              ) : null}
            </div>
          </div>
          <div className="col-md-4">
            <label for="inputClass" className="form-label">
              Place<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              id="inputClass"
              name="place"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.place}
              className="form-select"
            >
              <option selected>Choose...</option>
              <option>Chennai</option>
              <option>Dindigul</option>
              <option>Madurai</option>
              <option>Natham</option>
            </select>
            {formik.errors.place ? (
              <span style={{ color: "red" }}>{formik.errors.place}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
          <div className="form-group">
              <input type={"submit"} className="btn btn-primary"></input>
            <Link
              to={"/students_data"}
              type="button"
              className="btn btn-secondary ms-2"
            >
              Back
            </Link>
              </div>
              </div>
              </div>
              </form>
    </div>
  )
}

export default Create_Student