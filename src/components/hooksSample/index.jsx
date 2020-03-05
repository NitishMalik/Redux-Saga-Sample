import React, { useState } from "react";
import Card from "../card";

// useState(Initial_State)
const HookSample = () => {
  const [name, setName] = useState("Nitish Malik");
  return (
    <Card>
      <h1>{name}</h1>
      <button onClick={() => setName("Anjali Chawla")}> Set Name </button>
    </Card>
  );
};

export default HookSample;
