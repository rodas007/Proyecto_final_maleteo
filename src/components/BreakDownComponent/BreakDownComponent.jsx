import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowBackComponent } from '../ArrowBackComponent/ArrowBackComponent'
import "./BreakDownComponent.scss"

const BreakDownComponent = () => {
  return (
      <div className='c-break'>
     
     <div className='c-break-cont'>
         <Link to="/detalleusuario"> <ArrowBackComponent/></Link>
         <h2 className='c-break-title'>Factura</h2>
     </div>
    <div className='c-break-box'>
        <p className='c-break-box-text'>
            
Precio neto (sin IVA): 9.92 EUR
</p>
<p className='c-break-box-text'>
IVA (21%): 2.08 EUR
  </p>
 <p className='c-break-box-text'>
Precio total (con IVA): 12 EUR
       </p>
       <div className='c-cont-f'>
       <p className='c-text-f'>Recodamos que puede utilizar, distintos metodos de pago, transferencia bancaria, deposito, cheque efectivo y paypal.</p>
    </div>
    </div>
</div>

  )

}

export default BreakDownComponent