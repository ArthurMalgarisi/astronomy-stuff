import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
const[title, setTitle] = useState("");
const[date, setDate] = useState(null);
const[explanation, setExplanantion] = useState("");
const[img, setImg] = useState("")
const url = "https://api.nasa.gov/planetary/apod?api_key=YSKlW1unEO1qaFQ4eXctjAVD9jjxpgYuIwhPTvmf";

const getresult = async () =>  {
  const result = await axios.get(url);
  console.log(result);
  setDate(result.data.date);
  setTitle(result.data.title);
  setExplanantion(result.data.explanation);
  setImg(result.data.url);
}

getresult();

  return <div className='container'>
    <div className='date'>
    <h1>{date}</h1>
    </div>
    <div className='title'>
    <h1>{title}</h1>
    </div>
    <div className='expl'>
    <h3>{explanation}</h3>
    </div>
    <div className='image'>
    <img src={img} width="1000px" height="1000px"></img>
    </div>
    <a href={img}>photo/video Link</a>
  </div>;
};

export default Home;