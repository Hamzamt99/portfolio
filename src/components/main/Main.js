import React from 'react'
import Button from 'react-bootstrap/Button';
import './style.scss'
import Hamza from '../../assets//Hamza.jpeg'
import { HashLink } from 'react-router-hash-link';
function Main() {
  return (
    <div className='container'>
       <div className='contain-div'>
      <h1>Hi, im <span className='hamza'>Hamza</span> a Software Engineer Based in Jordan</h1>
      <Button className='btns'>Got Porject ? </Button>
      <Button  className='btns1'>Lets Talk</Button>
      <HashLink to='#home' className='hash'><i class="fa-solid fa-arrow-up"></i></HashLink>
      </div>
      <img src={Hamza}/>

    </div>
  )
  
}

export default Main

