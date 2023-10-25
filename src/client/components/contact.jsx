import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the server
    axios
      .post('/submit', this.state)
      .then((response) => {
        if (response.status === 200) {
          alert('Form submitted successfully');
          // Optionally, reset the form fields
          this.setState({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
          });
        }
      })
      .catch((error) => {
        alert('An error occurred while submitting the form');
        console.error(error);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
