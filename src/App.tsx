import React from 'react';
import logo from './logo.svg';
import { AutoComplete } from './components/Autocomplete';
import './App.css';

function App() {
  return (
<div className="App">   
<AutoComplete data={[
  { "name": "Afghanistan"},
  { "name": "Åland Islands"},
  { "name": "Albania"},
  { "name": "Algeria"},
  { "name": "American Samoa"},
  { "name": "AndorrA"},
  { "name": "Bouvet Island" },
  { "name": "Brazil"},
  { "name": "British Indian Ocean Territory"  },
  { "name": "Brunei Darussalam" },
  { "name": "Bulgaria"},
  { "name": "Burkina Faso"},
  { "name": "Burundi"  },
  { "name": "Cambodia"  },
  { "name": "Cameroon" },
  { "name": "Canada"  },
  { "name": "Cape Verde"  },
  { "name": "Cayman Islands" },
  { "name": "Central African Republic" },]}/>
   </div>
  );
}

export default App;
