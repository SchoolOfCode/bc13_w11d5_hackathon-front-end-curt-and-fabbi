import './App.css';
import Input from './Input/Input';
import ListDisplay from './List/ListDisplay';
import useFetch from './hooks/useFetch'
import { createContext, useState } from 'react'
// Imposting sample data
import sampleList from './sampleList';
// exports context to be imported into other files
export const listContext = createContext()

function App() {

  // This will be used to fetch from the backend
  const [data] = useFetch('https://shopping-list-hack.onrender.com/api/shopping')
  
  return (
    // Provides context to child components
    <listContext.Provider value={data}>
    <div className="App">
      <h1>Shopping List!</h1>
      <Input/>
      <ListDisplay/>
    </div>
    </listContext.Provider>
  );
}

export default App;
