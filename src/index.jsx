// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoot } from 'react-dom/client';

// IMPORT STYLING
import './styles/style.css';

// IMPORT COMPONENR
import ContactApp from './Components/ContactApp';
 
// CARI ELEMEN DENGAN ID ROOR
const root = createRoot(document.getElementById('root'));

// RENDER HALAMAN CONTACT APP PADA ELEMEN DENGAN ID ROOT
root.render(<ContactApp/>);