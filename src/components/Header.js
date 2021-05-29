import React from 'react'

function Header() {

    let time = new Date();
    let hours = time.getHours()
    console.log(hours);
    let styles = ""

    if(hours<10){

    styles ='day'

    }else{
        styles = 'night'
    }

    return (
        <>
        <header  className={`'container' ${styles}`}>
            <div className="logo">Logo</div>
            <ul className="nav">
                <li><a href=''>Home</a></li>
                <li><a href=''>Contact</a></li>
                <li><a href=''>About</a></li>
               
            </ul>
        </header>
        </>
    )
}

export default Header
