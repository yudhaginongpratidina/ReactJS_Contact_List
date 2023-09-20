/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";

// IMPORT COMPONENT
import ContactList from './ContactList';

// IMPORT DATA KONTAK
import { getData } from '../utils/data';

function ContactApp() {
    const contacts = getData();
    
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList contacts={contacts} />
      </div>
    );
   }
    
   export default ContactApp;