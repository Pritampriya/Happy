import React, { useState } from 'react';
import axios from 'axios';



const StudentRegistrationForm = () => {

  

  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [dob,setDob]=useState('')
  const [subject1,setSubject1]=useState('')
  const [subject2,setSubject2]=useState('')
  const [subject3,setSubject3]=useState('')
  const [section,setSection]=useState('')
  const [gender,setGender]=useState('')
  const [errors, setErrors] = useState({});

  const calculateTotal = () => {
    return parseInt(subject1) + parseInt(subject2) + parseInt(subject3);
  };

  const calculateAverage = () => {
    return calculateTotal() / 3;
  };

  const validateForm = () => {
    const newErrors = {};
  
    if (firstName.length < 3 || lastName.length < 3) {
      newErrors.name = 'First and last name must be at least 3 characters long';
    }
  
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const age =  Math.floor((currentDate - dobDate) / (365.25 * 24 * 60 * 60 * 1000)) * -1;
    if (age <= 15 || age > 20) {
      newErrors.dob = 'Age must be greater than 15 and less than or equal to 20';
    }
  
    if (section !== 'A' && section !== 'B' && section !== 'C') {
      newErrors.section = 'Valid sections are A, B, and C';
    }
  
    if (gender !== 'M' && gender !== 'F') {
      newErrors.gender = 'Valid genders are M and F';
    }
  
    if (
      subject1 < 0 ||
      subject1 > 100 ||
      subject2 < 0 ||
      subject2 > 100 ||
      subject3 < 0 ||
      subject3 > 100
    ) {
      newErrors.marks = 'Marks should be between 0 and 100';
    }
  
    if (subject1 < 35 || subject2 < 35 || subject3 < 35) {
      newErrors.result = 'Minimum marks for each subject is 35';
    }
  
    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };
  



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const studentData = {
        firstName,
        lastName,
        dob,
        subject1,
        subject2,
        subject3,
        section,
        gender,
      };

      try {
        const response = await axios.post("http://localhost:8080/api/student", studentData);
        console.log("Student data sent successfully:", response.data);
        setFirstName('')
        setLastName('')
        setDob('')
        setGender('')
        setSection('')
        setSubject1('')
        setSubject2('')
        setSubject3('')
      } catch (error) {
        console.error("Error sending student data:", error);
      }
    }
  };
      

  return (
    <div className='container'>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input class="form-control" type="text" name="firstName" onChange={(e)=>{setFirstName(e.target.value)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input class="form-control" type="text" name="lastName" onChange={(e)=>{setLastName(e.target.value)}} />
        </div>
        {errors.name && <p>{errors.name}</p>}

        <div className="mb-3">
          <label className="form-label">Date of Birth:</label>
          <input class="form-control" type="date" name="dob" onChange={(e)=>{setDob(e.target.value)}} />
        </div>
        {errors.dob && <p>{errors.dob}</p>}

        <div className="mb-3">
          <label className="form-label">Subject 1 Marks:</label>
          <input class="form-control" type="number" name="subject1" onChange={(e)=>{setSubject1(e.target.value)}} />
        </div>
        <div>
          <label className="form-label">Subject 2 Marks:</label>
          <input class="form-control" type="number" name="subject2" onChange={(e)=>{setSubject2(e.target.value)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Subject 3 Marks:</label>
          <input class="form-control" type="number" name="subject3" onChange={(e)=>{setSubject3(e.target.value)}} />
        </div>
        {errors.marks && <p>{errors.marks}</p>}

        <div className="mb-3">
          <label className="form-label">Section:</label>
          <input class="form-control" type="text" name="section" onChange={(e)=>{setSection(e.target.value)}} />
        </div>
        {errors.section && <p>{errors.section}</p>}

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <input class="form-control" type="text" name="gender" onChange={(e)=>{setGender(e.target.value)}} />
        </div>
        {errors.gender && <p>{errors.gender}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};




export default StudentRegistrationForm