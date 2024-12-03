import React from "react";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px", backgroundColor:"black", color:"white", fontSize:"50px" }}>Admin DashBoard</h1>
      <UserTable />
    </div>
  );
};

export default App;
