/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";

// IMPORT COMPONENT
import ContactList from './ContactList';

// IMPORT DATA KONTAK
import { getData } from '../utils/data';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    }
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }
  
  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
 }
    
   export default ContactApp;