import React from 'react'
import Button from 'react-bootstrap/Button';
import './style.scss'
import Hamza from '../../assets//Hamza.jpeg'
function Main() {
  return (
    <div className='container'>
       <div className='contain-div'>
      <h1>Hi, im <span className='hamza'>Hamza</span> a Software Engineer Based in Jordan</h1>
      <Button className='btns'>Got Porject ? </Button>
      <Button >Lets Talk</Button>
      </div>
      <img src={Hamza}/>
    </div>
  )
  
}

export default Main

