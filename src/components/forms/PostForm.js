import React, { Component } from 'react';

let initialState = {
  name: '',
  email: '',
  password: '',
  bio: '',
  country: '',
  gender: '',
  skills: []
};

class PostForm extends Component {
  constructor() {
    super();
    this.myForm = React.createRef();
  }

  state = {
    ...initialState
  };

  changeHandler = e => {
    if (e.target.type === 'checkbox') {
      if (e.target.checked) {
        this.setState({
          ...this.state,
          skills: this.state.skills.concat(e.target.value)
        });
      } else {
        this.setState({
          ...this.state,
          skills: this.state.skills.filter(skill => skill !== e.target.value)
        });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    this.myForm.current.reset();
    this.setState({
      ...initialState
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} ref={this.myForm}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your valid email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            className="form-control"
            id="bio"
            rows="3"
            placeholder="Enter short bio here"
            value={this.state.bio}
            onChange={this.changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Example select</label>
          <select
            className="form-control"
            name="country"
            id="country"
            onChange={this.changeHandler}
          >
            <option>Select Country</option>
            <option value="bd">Bangladesh</option>
            <option value="cn">China</option>
            <option value="gm">Germany</option>
          </select>
        </div>

        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={this.changeHandler}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={this.changeHandler}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={this.changeHandler}
            />
            <label className="form-check-label" htmlFor="other">
              Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="js"
              id="js"
              name="skills"
              onChange={this.changeHandler}
            />
            <label className="form-check-label" htmlFor="js">
              JS
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="React JS"
              id="react"
              name="skills"
              onChange={this.changeHandler}
            />
            <label className="form-check-label" htmlFor="react">
              React JS
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="node"
              id="node"
              name="skills"
              onChange={this.changeHandler}
            />
            <label className="form-check-label" htmlFor="node">
              Node
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default PostForm;
