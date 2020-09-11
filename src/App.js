import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import Title from './components/Title'
import Image from './components/Image'

function App() {
  const [ data, setData ] = useState()

  useEffect (() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=N7fh9I7bXaJ9a4yC0vHaTPGXrsUnPrMXCfcBZ3hb&date=2019-08-08')
    .then( response => {
      //console.log('get' , response.data)
      setData(response.data)
    })
    .catch(error => {
     console.log(error)
    })
  },[])
  // console.log(data)
  if (!data) return <p>loading...</p>

  return (
    <div className="App">
      <Title title = {data.title} />
      <Image image = {data.url} />
      <p> 
       <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
