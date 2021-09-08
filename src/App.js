import React, { useState } from 'react'
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'
import Home from './Home'
import MovieTrailer from './MovieTrailer'

const App = () => {
  const [list,setList]=useState([{
    title: 'THE TOMORROW WAR',
    description:`The world is stunned when a group of 
                time travellers arrive from the year 2051
                to deliver an urgent message: thirty years
                in the future, mankind is losing a global 
                war against a deadly alien species.`,
    posterUrl:'https://fr.web.img6.acsta.net/pictures/21/05/26/16/35/2108432.jpg',
    rate:3,
    trailer:"https://www.youtube.com/embed/QPistcpGB8o",
    id:1
  },
  {
    title: ' Miracle in Cell No. 7 ',
    description:`A story of love between a mentally-ill 
    father who was wrongly accused of
    murder and his six year old daughter.`,
    posterUrl:'https://www.dvdsreleases.com/wp-content/uploads/release-dates/tt10431500-poster.jpg',
    rate:4,
    trailer:"https://www.youtube.com/embed/G2wPoBy2JQI",
    id:2
  },
  {
    title: 'Fast & Furious Presents: Hobbs & Shaw ',
    description:`US agent Luke Hobbs and British mercenary
                Deckard Shaw are forced to put their rivalry
                side and work together to stop a genetically
                enhanced supervillain.`,
    posterUrl:'https://m.media-amazon.com/images/I/71Ut3TVRWnL._SL1500_.jpg',
    rate:4,
  trailer:"https://www.youtube.com/embed/HZ7PAyCDwEg",
  id:3
  },
  {
    title: 'The Ritual',
    description:`Reuniting after the tragic death of their
                friend, four college pals set out to hike 
                through the Scandinavian wilderness. 
                A wrong turn leads them into the mysterious 
                forests of Norse legend, where an ancient 
                evil exists and stalks them at every turn.`,
    posterUrl:'https://cdna.artstation.com/p/assets/images/images/009/363/296/large/david-romero-the-ritual.jpg?1518553264',
    rate:4,
    trailer:"https://www.youtube.com/embed/Vfugwq2uoa0",
    id:4 
  },
])
  return (
    <BrowserRouter>
    <Redirect to ='/home'/>
    <Switch>
      <Route  path='/home' render={(props)=><Home {...props} list={list} setList={setList}/>}></Route>
      <Route exact path='/trailer/:id' render={(props) =><MovieTrailer {...props} data={list} />} ></Route>
    </Switch>
      
    </BrowserRouter>
  )
}

export default App
