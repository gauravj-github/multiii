import React from 'react'
import { useHistory } from 'react-router-dom';
const Logout = () => {
    const history = useHistory();  

    localStorage.removeItem('customerlogin')
    localStorage.removeItem('user_id')
   
     
    history.push('/user/login')
 
}

export default Logout