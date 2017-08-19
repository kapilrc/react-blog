import React, { Component } from 'react';
import { Link } from 'react-router';

class BlogContainer extends Component {
  render() {
    console.log(this.props.items);
    var post = this.props.items.map((item, i) => {
      return <Post id={item.id} title={item.title} subTitle={item.subTitle} key={i} 
        linkText={item.linkText} link={item.link} date={item.date} active={item.active} />
    });
    return (
      <div className="container">
        {post}
        <hr />
        {/* <!-- Pager --> */}
        <div className="clearfix">
          <a className="btn btn-secondary float-right" href="">Older Posts &rarr;</a>
        </div>
      </div>
    );
  }
}

class Post extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      active: false
    }
    this.clicker = this.clicker.bind(this);
  }

  clicker() {
    console.log("clicked");
  }

  render() {
    return (
      <div className="row" onClick={this.clicker}>
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-preview">
            <Link to="/">
              <h2 className="post-title">
                {this.props.title}
              </h2>
              <h3 className="post-subtitle">
                {this.props.subTitle}
              </h3>
            </Link>
            <p className="post-meta">Posted by &nbsp;
              <a href={this.props.link}>{this.props.linkText}</a>
              &nbsp;on {this.props.date}</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default BlogContainer;