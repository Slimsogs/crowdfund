import './App.css';
import Nav from './Nav.jsx';
import Body from './Body.jsx';
import Modal from './Modal.jsx';
import React, {useState,} from 'react';
//  import'./Modal.css'
import Modal2 from './Modal2.jsx';
import Modal3 from './Modal3.jsx';


function App() {
  const [openModal1, setOpenModal1] = useState(false)
  
  const [openModal2, setOpenModal2] = useState(false)

  const [openModal3, setOpenModal3] = useState(false)

  const [amtBacked, setamtBacked] = useState(0)

  const [backers, setbackers] =useState(0)

  const [bambooleft, setBambooleft] = useState(400)

  const [blackleft, setBlackleft] = useState(400)

  const [Maholeft, setMaholeft] = useState(300)

  
  const [val, setVal] = useState("Enter your pledge");
  
  function handleTextClick(e){
       let value = e.target.value;
       setVal(value)
  }
  //  left functions
  function handlebambooDecre (amt){
    setBambooleft(currentCount => {
      return currentCount -= amt;
    })
      
    
  }
  function handleblackDecre (amt){
    setBlackleft(currentCount => {
      return currentCount -= amt;
    })
      
    
  }
  function handleMahoDecre (amt){
    setMaholeft(currentCount => {
      return currentCount -= amt;
    })
      
    
  }

  function handleBackerIncre (amt){
    setbackers(currentCount => {
      return currentCount += amt;
    })
      
    
  }
  
  function handleAmtIncre (amt){
    setamtBacked(currentAmt => {
      return currentAmt += amt
    })
  }
 
  function handleModal1Click(){
    setOpenModal1(true)
  }
  function handleOnClose1 (){
    setOpenModal1(false)
  }

  function handleModal2Click(){
    setOpenModal2(true)
  }

  function handleOnClose2 (){
    setOpenModal2(false)
  }
  function handleOnClose20 (){
    setOpenModal2(false)
    handleModal3Click()
    handleAmtIncre(25)
    handlebambooDecre(1)
  }

  function handleOnClose21 (){
    setOpenModal2(false)
    handleModal3Click()
    handleAmtIncre(75)
    handleblackDecre(1)
  }

  function handleOnClose22 (){
    setOpenModal2(false)
    handleModal3Click()
    handleAmtIncre(200)
    handleMahoDecre(1)
  }


  function handleModal3Click(){
    setOpenModal3(true)
  }
  function handleOnClose3(){
    setOpenModal3(false)
    handleBackerIncre(1)
   
  }

  return (
    <div>
      <Modal open ={openModal1}
          handleOnClose1 = {handleOnClose1}
      />
      <Modal2 open1 ={openModal2}
          handleOnClose2 = {handleOnClose2}
          handleBackerIncre ={handleBackerIncre}
          handleModal3Click ={handleModal3Click}
          handleOnClose21 = {handleOnClose21}
          handleOnClose22 ={handleOnClose22}
          val = {val}
          handleTextClick = {handleTextClick}
          handleOnClose20 = {handleOnClose20}
          bambooleft ={bambooleft}
          blackleft ={blackleft}
          Maholeft ={Maholeft}
      />
      <Modal3 handleOnClose3={handleOnClose3} 
           open3= {openModal3}

      />
      <Nav handleModal1Click = {handleModal1Click}
          open= {openModal1} />
      <Body open= {openModal1}
        handleModal2Click = {handleModal2Click}
        open1={openModal2}
        backers={backers}
        amtBacked={amtBacked}
        bambooleft ={bambooleft}
        blackleft ={blackleft}
        Maholeft ={Maholeft}
      />
    </div>
  );
}

export default App;
