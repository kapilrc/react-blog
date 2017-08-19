import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

class PostDetail extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />

        <hr />
        {/* {this.props.children} */}
        Post details
        <Footer />
      </div>
    );
  }
}

export default PostDetail;