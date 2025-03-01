import React, { useEffect, useState } from "react";

const Table1 = () => {
  const [users, setState] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
      .then((json) => setState(json));
  }, []);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
               return(
               <tr key={i}>
                  <td> {1+i} </td>
                  <td> {user.name} </td>
                  <td> {user.username} </td>
                  <td> {user.email} </td>
                  <td> {user.website} </td>
                  <td> {user.phone} </td>
                </tr>
               )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table1;
