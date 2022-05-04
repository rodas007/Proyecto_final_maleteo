import React from 'react'
import "./UserMessageComponent.scss"
import { NavComponent } from "../NavComponent/NavComponent";
import { Link } from 'react-router-dom';

const UserMessageComponent = () => {
  return (
    <>
    <div className='c-msjus-cont'>
        <div className='c-msjus-cont-top'>
            <h2 className='c-msjus-cont-top-text'>Mensajes</h2>
            </div>
         <div className='c-us-cont'>
            <div className='c-us-img'>
            <img className='c-us-img-im' src="https://cdn.zeplin.io/5d4d342a87666d9bb5130c1e/assets/7B923D8B-1148-46B8-9E92-6F41EEB10325.png" alt="" />
            </div> 
            <div className='c-us-msjs'>
                <div className='c-us-msjs-top'>
                <p className='c-us-msjs-top-t'>Marta</p> <Link className='c-us-msjs-top-a' to="/confirmaciondereserva"> <a className='c-us-msjs-top-a' href="Confirmada">Confirmada</a></Link></div>
                <div className='c-us-msjs-mid'>
                <p className='c-us-msjs-mid-t'>30 deJulio a las 16:00.</p>
                </div>
                <div className='c-us-msjs-bot'>
                <p>Hola, muchas gracias por escoger mi hall para cuidar de tu maleta. estaré encantada de cuid..</p>
                </div>
                
            </div>    
             
        </div>   
        
    </div>
    
    <NavComponent/>
    </>
  )
}

export default UserMessageComponent