import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />

        <hr />
        
        Contact us.
        <Footer />
      </div>
    );
  }
}

export default Contact;