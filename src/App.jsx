import './App.css'
import JobList from './components/JobList'
import data from "./assets/data.json";

// import SearchBar from './components/SearchBar';
import  headerImg  from "./assets/images/bg-header-desktop.svg";
import { useState } from 'react';


function App() {
  const [query, setQuery] = useState("");
  const search = (data) => {
    return data.filter((item) => 
      item.level.toLowerCase().includes(query) ||
      item.role.toLowerCase().includes(query) ||
      item.languages.some((language) => language.toLowerCase().includes(query)) ||
      item.tools.some((tool) => tool.toLowerCase().includes(query)) 
    )
  }
  return (
    <main>
      <div className="header">
        <img src={headerImg} alt="header-icon" />
      </div>
      <div className="search-bar">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button>Clear</button>
    </div>
      <JobList data={search(data)} />
    </main>
  )
}

export default App
