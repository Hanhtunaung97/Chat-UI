import React from "react";
import { ChatSection, Container, Header, SideBar } from "./components";

const App = () => {
  return (
    <section className="center bg-slate-100  overflow-hidden">
      <Container>
        <Header />
        <SideBar />
        <ChatSection />
      </Container>
    </section>
  );
};

export default App;
