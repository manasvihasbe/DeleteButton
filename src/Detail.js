import React from "react";
import "./detail.css";

export default class Detail extends React.Component {
  constructor() {
    super();
    this.state = { users: null };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1").then((resp) => {
      resp.json().then((result) => {
        this.setState({ users: result.data });
      });
    });
  }

  delete(item) {
    const users = this.state.users.filter((i) => i.id !== item.id);
    this.setState({ users });
  }

  render() {
    console.log(this.state.users);

    return (
      <div style={{ marginLeft: "30%" }}>
        {this.state.users
          ? this.state.users.map((item, i) => (
              <div style={{ textAlign: "center", padding: "1%" }}>
                <div className="card">
                  <b>First Name:</b> {item.first_name} <br />
                  <b>Last Name:</b> {item.last_name}
                  <br />
                  <br />
                  <button
                    onClick={this.delete.bind(this, item)}
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}
