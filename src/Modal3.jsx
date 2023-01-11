import check from './images/check.svg'

const Modal3 = ({open3,handleOnClose3}) =>{
    if(!open3) return null

    return(
        <div className="overlay3">
            <div className="modalContainer3">
                <div className="div-pic1">
                    <img src={check} alt="" />
                </div>
                <div className="div-title1">
                    <h3>Thanks for your support!</h3>
                </div>
                <div className="div-content1">
                    <p>Your pledge brings us one step closer to sharing Mastercraft 
                        Bamboo Monitor Riser worldwide. You will get and email once 
                        our campaign is completed.
                    </p>
                </div>
                <div className="div-button1">
                    <button type='button' id="btn-close3" onClick={handleOnClose3}>Got it!</button>
                </div>
                
            </div>
        </div>
    )
}
export default Modal3