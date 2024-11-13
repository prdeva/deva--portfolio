
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Content from "./components/content";
// import Footer from "./components/footer";
// import Register from './components/register';
import './components/style.css';
// import Signup from "./components/signup";

class App extends React.Component {
  render() {
    return (
     
        <div className="tot" >
          <Header />
          <Content />
          
          
        </div>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));



