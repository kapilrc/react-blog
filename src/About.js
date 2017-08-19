import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <hr />
        
        About us.
        <Footer />
      </div>
    );
  }
}

export default About;