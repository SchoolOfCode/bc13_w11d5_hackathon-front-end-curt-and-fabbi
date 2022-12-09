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

  // List state - currently taking from a set list but will fetch from backend
  const [list, setList] = useState(sampleList)


  // This will be used to fetch from the backend
  const [data] = useFetch('https://shopping-list-hack.onrender.com/api/shopping')
  if (data !== "") {
  setList(data)}

  return (
    // Provides context to child components
    <listContext.Provider value={list}>
    <div className="App">
      <h1>Shopping List!</h1>
      <Input/>
      <ListDisplay/>
    </div>
    </listContext.Provider>
  );
}

export default App;
