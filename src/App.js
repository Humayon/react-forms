import React, { Component } from 'react';
import PostForm from './components/forms/PostForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 my-3">
            <PostForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
