import React from 'react'

const Nav = () => {
    return (
        <div>
            <div className="container-fluid mb-5">
                <nav className="nav">
                    <p className="m-0 Signin"><img src='./images/signicon.png' alt='icon' /><span className='SigninText'>Sign in</span></p>
                    <div className="d-flex gap-3 align-items-center">
                        {/* icon  */}
                        <div className='MainContainerTimeAndicon'>
                            <span className='zoonicon'> <img src='./images/zoom.png' alt='icon' /></span>
                            <span><p className="m-0 navtext">12:23 PM</p>
                                <p className="m-0 navtextdate">3/25</p></span>
                            <div className='navicon'><span >3</span></div>

                        </div>
                        {/* icon  */}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav
