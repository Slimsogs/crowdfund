import React from "react"
import closeModal from './images/closeModal.svg';
import "./Modal.css";
import { useState,useEffect } from "react";

const Modal2 = ({open1,handleOnClose2,handleOnClose21,handleOnClose22,val,handleTextClick,handleOnClose20,bambooleft,Maholeft,blackleft}) => {
    const [checked, setchecked] = useState('option-1');
    const ischecked = (value) => value === checked;

    const handleShowChange=(e)=>{
        const getShow = e.target.value;
        setchecked(getShow);
    }

    // function handleTextChange (e){
    //     setVal(e.target.value)
    // }
    useEffect (() =>{

    },[val]);

    if(!open1) return null;
    return(
        <div className="overlay2">
            <div className="modalContainer2">
                <div className="tops">
                        <div className="topCon">
                            <h3>Back this project</h3>
                            <img src= {closeModal} alt=""  onClick={handleOnClose2} id='close2' />
                        </div>
                        <p id='main-text'> Want to support us in bringing Mastercraft 
                            Bamboo Monitor Riser out in the world?
                        </p>
                </div>
                        <div className="bamboos">
                            <div className="div-top">
                                <input type="radio" id="mod1" className="inp" name="input" value='option-1' 
                                checked={ischecked('option-1')} onChange = {handleShowChange}/>
                                <label for="mod1">
                                    <h4 id="no-reward">Pledge with no reward</h4>
                                </label>
                            </div>
                            <div className="div-text">
                                <p id='text'>Choose to support us without a reward if you simply believe in our project. As a 
                                    backer, you will be signed up to receive product updates via email. 
                                </p>
                            </div>
                            
                        </div>
                        <div className="bamboos">
                            <div className="div-top">
                                <input type="radio" id="mod2" className="inp" name="input" value='option-2'
                                checked={ischecked('option-2')}  onChange = {handleShowChange}
                                   />
                                <label for="mod2">
                                    <h4>Bamboo Stand</h4>
                                </label>
                                <span>
                                    <p className="pledge1 pled">Pledge $25 or more</p>
                                </span>
                                    <p id="left"><b>{bambooleft}</b> left</p>
                            </div>
                            <div className="div-text">   
                                <p id='text'>You get an ergonomic stand made of natural bamboo.You've helped us lunch 
                                    our promotional campaign, and you'll be added to a special Backer member list.
                                </p>
                            </div> 
                            <div className="div-bot">
                                <p><b>{bambooleft}</b> left</p>
                            </div>
                            <div className={`enter-pledge ${checked === 'option-2' ? 'enter-pledge1' : '' }`}>
                                <input type="text"  id='pledge-text'  name="pledge" value={val}  />
                                    <span id="pled-btns">
                                    <button type="button" className="pledge-btn1" value="25" onClick={handleTextClick} >$ 25</button>
                                    <button type="submit" className="pledge-btn2" onClick={handleOnClose20}>Continue</button>
                                    </span>
                            </div>
                        </div>
                        <div className="bamboos">
                            <div className="div-top">
                                <input type="radio" id="mod3" className="inp" name="input" value='option-3'
                                 checked={ischecked('option-3')}  onChange = {handleShowChange} />
                                    <label for="mod3">
                                        <h4>Black Edition Stand</h4>
                                    </label>
                                <span>
                                    <p className="pledge2 pled" >Pledge $75 or more</p>
                                </span>
                                    <p id="left"><b>{blackleft}</b> left</p>
                            </div>
                            <div className="div-text">  
                                <p id='text'>You get a Black Special Edition computer stand and a personal thank you. You'll
                                    be added to our Backer member list.Shipping is included.
                                </p>
                            </div>
                            <div className='div-bot'>
                                <p><b>{blackleft}</b> left</p>
                            </div>
                            <div className={`enter-pledge ${checked === 'option-3' ? 'enter-pledge2' : '' }`}>
                                <input type="text"  id='pledge-text' name="pledge" value={val} />
                                
                                <span id="pled-btns">
                                <button type="button" className="pledge-btn1" value='75'  onClick={handleTextClick}>$ 75</button>
                                <button type="submit"className="pledge-btn2" onClick={handleOnClose21}>Continue</button>
                                </span>
                            </div>
                        </div>
                        <div className="bamboos bamboos4">
                            <div className="div-top">
                                <input type="radio" id="mod4" className="inp" name="input" value='option-4' 
                                checked={ischecked('option-4')}  onChange = {handleShowChange} />
                                    <label for="mod4">
                                        <h4 id="maho">Mahogany Special Edition</h4>
                                    </label>
                                <span>
                                    <p id='pledge' className="pled">Pledge $200 or more</p>
                                </span>
                                    <p id="left"><b>{Maholeft}</b> left</p>
                            </div>
                            <div className="div-text">
                                <p id='text'>You get two Special Edition Mahogany stands, a Backer T-shirt and a personal 
                                    thank you. You'll be added to our Backer member list. Shipping is included.
                                </p>
                            </div>
                            <div className='div-bot'>
                                <p><b>{Maholeft}</b> left</p>
                               
                            </div>
                            <div className={`enter-pledge ${checked === 'option-4' ? 'enter-pledge3' : '' }`}>
                                <input type="text" id='pledge-text'name="pledge" value={val}  />
                                
                                <span id="pled-btns">
                                <button type="button" className="pledge-btn1" value="200"  onClick={handleTextClick}>$ 200</button>
                                <button type="submit" className="pledge-btn2"onClick={handleOnClose22}>Continue</button>
                                </span>
                            </div>
                        </div>
            
            </div>
        </div>
    )
}
export default Modal2