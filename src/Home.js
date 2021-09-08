import './App.css';
import { useState } from 'react';
import Movielist from './MovieList';
import Header from './Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieTrailer from './MovieTrailer';

function Home({list,setList}) {
  const [filter, setFilter] = useState("")
  const [rate, setRate] = useState(1)
  

const handleFilter= (val)=>{
  setFilter(val)
}
const handleRate =(value)=>{
  setRate(value)
}
const handleAddMovie=(movie)=>{
    setList([...list , movie])
}

  return (
    <div className="App">
 
          <Header className="nav" handleAddMovie={handleAddMovie} handleFilter={handleFilter} handleRate={handleRate}></Header>
          <Movielist list={list.filter(elm=>elm.title.trim().toUpperCase().includes(filter.toUpperCase().trim()) && elm.rate>=rate)}></Movielist>
      
    </div>
  );
}

export default Home;
