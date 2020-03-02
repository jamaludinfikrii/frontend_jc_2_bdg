import React from 'react'
import '../supports/css/navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div className='my-navbar'>
                <div className='container h-100'>
                    <div className='d-flex justify-content-between align-items-center h-100'>
                        <Link to='/'>
                            <span className='my-navbar-link'>Home</span>
                        </Link>
                        <span>
                            <Link to='/login'>
                                <span className='mr-3 my-navbar-link'>Login</span>
                            </Link>

                            <Link to='/register'>
                                <span className='mr-3 my-navbar-link'>Register</span>
                            </Link>
                            <Link to='/latihan-state'>
                                <span className='my-navbar-link'>State</span>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;