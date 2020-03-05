import React, { useState, useEffect } from "react";
import Card from "../card";

const UseEffect = () => {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("Bret");

  useEffect(() => {
    if (search.length > 0) {
      const fetchFunc = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${search}`
        );
        const respJson = await response.json();
        setUser(respJson[0]);
      };
      fetchFunc();
    }
  }, [search]);
  return (
    <Card>
      <input
        type="search"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <h1>No user found</h1>
      )}
    </Card>
  );
};

export default UseEffect;
