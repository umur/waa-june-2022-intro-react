import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ username: "", password: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Login</h2>
        <form className="ui form" onSubmit={this.login}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button className="ui button blue">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
