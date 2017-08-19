import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import BlogContainer from "./BlogContainer";

class App extends Component {
  render() {
    var posts = [ 
      {
        id: 1,
        title: "Man must explore, and this is exploration at its greatest",
        subtitle: "Problems look mighty small from 150 miles up",
        linkText: "Start Bootstrap",
        link: "",
        date: "September 24, 2017"
      },
      {
        id: 2,
        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subtitle: "We predict too much for the next year and yet far too little for the next ten.",
        linkText: "Start Bootstrap",
        link: "",
        date: "August 24, 2017"
      },
      {
        id: 3,
        title: "Science has not yet mastered prophecy",
        subtitle: "",
        linkText: "Start Bootstrap",
        link: "",
        date: ""
      },
      {
        id: 4,
        title: "Failure is not an option",
        subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        linkText: "Start Bootstrap",
        link: "",
        date: "July 8, 2017"
      }
    ];
    return (
      <div>
        <Navbar />
        <Header />
        
        {/* <!-- Main Content -->  */}
        <BlogContainer items={posts}/>

        <hr />

        <Footer />
      </div>
    );
  }
}

export default App;
