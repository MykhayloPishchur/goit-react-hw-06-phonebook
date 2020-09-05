import React, { Component } from "react";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import style from "./app.module.css";
import pop from "./Transiction/pop.module.css";
import { connect } from "react-redux";

import { CSSTransition } from "react-transition-group";

class App extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <div className={style.container}>
        <div className={style.headWrapper}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames={style}
          >
            <h1 className={style.title}>Phonebook</h1>
          </CSSTransition>

          {/* <CSSTransition
            in={isExist}
            timeout={250}
            classNames={style}
            unmountOnExit
          >
            <div onClick={this.handleCloseError} className={style.error}>
              {duplicateContact} already exist!
            </div>
          </CSSTransition> */}
        </div>

        <ContactForm></ContactForm>

        <CSSTransition
          in={contacts.length > 1}
          timeout={500}
          classNames={pop}
          unmountOnExit
        >
          <Filter></Filter>
        </CSSTransition>
        <ContactList></ContactList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contact,
});

export default connect(mapStateToProps)(App);
