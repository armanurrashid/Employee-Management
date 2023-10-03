import React from 'react';
import Member from './Member/Member';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [members, setMembers] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:8000/api/employee/")
      .then((res)=> res.json())
      .then((data)=> setMembers(data))
    },[])
    return (
      <div>
        <table className="my-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
              <Member members={members}/>
            </tbody>
        </table>
      </div>
    )
};

export default Home;