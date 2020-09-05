import React, { Component } from "react";
import styles from "./contactform.module.css";
import { addContact } from "../../Redux/Actions/contact";
import { connect } from "react-redux";

class contactform extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInput = (e) =>
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <div className={styles.border}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <h3>Name</h3>
            <input
              className={styles.input}
              name="name"
              type="text"
              onChange={this.handleInput}
              value={name}
            ></input>
            <h3>Number</h3>
            <input
              name="number"
              className={styles.input}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="000-00-00"
              type="tel"
              onChange={this.handleInput}
              value={number}
            ></input>
            {/* <small>Format : 000-00-00</small> */}
            <br />
            <button
              className={styles.button}
              type="submit"
              disabled={
                this.state.name === "" || this.state.number === ""
                  ? true
                  : false
              }
            >
              Add contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(addContact(data)),
});

export default connect(null, mapDispatchToProps)(contactform);
