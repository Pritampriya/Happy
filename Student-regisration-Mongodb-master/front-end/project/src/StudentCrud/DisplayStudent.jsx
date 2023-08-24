import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DisplayStudent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/student")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <div className='container bg-light mt-3'>
        <h3 className='text-center'>Display Student By Name</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Section</th>
              <th scope="col">Gender</th>
              <th scope="col">Subject 1</th>
              <th scope="col">Subject 2</th>
              <th scope="col">Subject 3</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x.regdId}>
                <th scope="row">{x.regdId}</th>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.dob}</td>
                <td>{x.section}</td>
                <td>{x.gender}</td>
                <td>{x.subject1}</td>
                <td>{x.subject2}</td>
                <td>{x.subject3}</td>
                <td>
                  <button onClick={() => handleEdit(x._id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayStudent;
