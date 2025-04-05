import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const SellerLogout = () => {
    const history = useHistory();  

    localStorage.removeItem('vender_id')
    localStorage.removeItem('vender_login')
    localStorage.removeItem('vender_username')
     
    history.push('/seller/login')
  return (
    <div>SellerLogout</div>
  )
}

export default SellerLogout