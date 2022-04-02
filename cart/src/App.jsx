import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from 'home/Header'
import Footer from 'home/Footer'

import CartContent from "./CartContent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
   
    <Header />
    <div>
      <CartContent />
    </div>

    <Footer />
    {/* <div>Name: cart</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
