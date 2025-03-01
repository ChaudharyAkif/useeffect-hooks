import { Spin } from "antd";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [users, setuser] = useState([]);
  const [isLoading, setisloading] = useState(false);
  useEffect(() => {
    setisloading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setuser(json))
      .finally(setisloading(false));
  }, []);

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Webisite</th>
            <th scope="col">Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
      
        </tbody>
      </table>
      {isLoading && (
            <div className="text-center">
              <Spin />
            </div>
          )}
    </>
  );
};

export default Table;
