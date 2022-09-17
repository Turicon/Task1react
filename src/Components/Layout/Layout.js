import React from 'react'
import Header from './Header'
import Header2 from './Header2'
import Footer from './Footer'
import { useLocation} from 'react-router-dom'
function Layout(props) {
    let location = useLocation()
    console.log(location.pathname);
    return (
        <div>
           {location.pathname == '/' ?  <Header /> : <Header2/>}
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout