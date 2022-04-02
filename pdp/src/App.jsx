import React  from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "./index.scss";
import Footer from 'home/Footer';
import Header from "home/Header";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
      <div className="my-10">PDP Page Content</div>

    {/* <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div> */}
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
