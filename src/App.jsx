import React from "react";
import Container from "./components/Container";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="center bg-slate-100">
      <Container>
        <SideBar />
      </Container>
    </div>
  );
};

export default App;
