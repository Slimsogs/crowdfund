import logoMaster from './images/logoMaster.svg'
import bookmark from './images/bookmark.svg'
const Body = ({open, handleModal2Click,open1,backers,amtBacked,bambooleft,Maholeft,blackleft}) =>{
    // const main = document.getElementById('')
    if (open){
        document.body.classList.add('active-modal')
    }
    else{
        if(open1){
            document.body.classList.add('active-modal')

        }else{
            document.body.classList.remove('active-modal')
        }
    }
    return (
        <div className={`mainCon ${open ? 'mainCon-active' : '' }`} id="oga">
            <div className="con">
                <div className="first">
                    <img src= {logoMaster} alt=""  id='master'/>
                    <h4>Mastercraft Bamboo Monitor Riser</h4>
                    <p>A beautiful & hancrafted monitor stand to reduce neck and eye strain.</p>
                    <div className='monRise'>
                        <button type='button' id='btn1' onClick={handleModal2Click}>Back this project</button>
                        <div id='ovrLap'>
                            <div className="img">
                                <img src= {bookmark} id='bkm' alt="" />
                            </div>
                            <div className="btn22">
                                <button type='button' id='btn2'>Bookmark</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="spans">
                        <span className='fir'>
                            <h2>${amtBacked}</h2>
                            <p>of $100,000 backed</p>
                        </span>
                        <span className='fir'>
                            <h2>{backers}</h2>
                            <p>total backers</p>
                        </span>
                        <span>
                            <h2>56</h2>
                            <p>days left</p>
                        </span>
                    </div>
                    <div className = "loadCon">
                        <div className="loading">
                            <div className="line-box">
                                <div className="line">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third">
                    <h4>About this project</h4>
                    <p id='pas'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates 
                        your screen to a more comfortable viewing height. Placing your monitor at eye levl has 
                        the potential to improve your posture and make you more comfortable while at work,
                        helping you stay focused on the work at hand.
                    </p>
                    <p id='pas'>Featuring artisan craftmanship, the simplicity of design creates extra desk space below
                        your computer to allow notepads, pens and USB sticks to be stored under the stand.
                    </p>
                    <div className="bamboo">
                        <span>
                           <h3>Bamboo Stand</h3>
                           <p id='abt' className='para'>Pledge $25 or more</p>
                        </span>
                        <p id='par'>You get an ergonomic stand made of natural bamboo.You've helped us lunch 
                            our promotional campaign, and you'll be added to a special Backer member list.
                        </p>
                        <div className='bot'>
                            <p><b>{bambooleft}</b> left</p>
                            <button type='button'>Select Reward</button>
                        </div>
                    </div>
                    <div className="bamboo">
                        <span>
                           <h3>Black Edition Stand</h3>
                           <p id='abt' className='para'>Pledge $75 or more</p>
                        </span>
                        <p id='par'>You get a Black Special Edition computer stand and a personal thank you. You'll
                            be added to our Backer member list.Shipping is included.
                        </p>
                        <div className='bot'>
                            <p><b>{blackleft}</b> left</p>
                            <button type='button'>Select Reward</button>
                        </div>
                    </div>
                    <div className="bamboo">
                        <span>
                           <h3>Mahogany Special Edition</h3>
                           <p id='abt' className='para'>Pledge $200 or more</p>
                        </span>
                        <p id='par'>You get two Special Edition Mahogany stands, a Backer T-shirt and a personal 
                            thank you. You'll be added to our Backer member list. Shipping is included.
                        </p>
                        <div className='bot'>
                            <p><b>{Maholeft}</b> left</p>
                            <button type='button' id='btn4'>Select Reward</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Body