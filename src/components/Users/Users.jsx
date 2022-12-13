import axios from "axios";
import React, { useEffect, useState } from "react";
import UsersCard from "../../UserCard";


const Users = () => {
  const API = "  http://localhost:8000/comments";
  const [state, setState] = useState("");

  const [users, setUsers] = useState([]);

  const [clicked, setClicked] = useState([]);

  async function getUsers() {
    let res = await axios.get(API);
    console.log(res);
    setUsers(res.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log("f3wly");
    
  }, [clicked]);

  useEffect(() => {
    return () => {
      console.log("bye bye");
    };
  }, []);

  console.log(users);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10" }}>
      {users.map((item) => {
        return (
          <UsersCard item={item} setClicked={setClicked} clicked={clicked} />
        );
      })}
    </div>
  );
};

export default Users;