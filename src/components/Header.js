import React from "react";
import logo from "../../src/svg/sk_granit_logo.svg"
import callingLogo from "../../src/svg/calling.svg"

class Header extends React.Component {
    render(){
        return(
            <header className="header">
                <a href=""><img src={logo} alt=""/></a>
                <a className="headerLinks" href="">УСЛУГИ</a>
                <a className="headerLinks" href="">КАТАЛОГ</a>
                <a className="headerLinks" href="">СПЕЦ.ТЕХНИКА</a>
                <a className="headerLinks" href="">НАШИ РАБОТЫ</a>
                <a className="headerLinks" href="">О КОМПАНИИ</a>
                <a className="headerLinks" href="">КОНТАКТЫ</a>
                <p className="headerHotlineNumber"><img className="hotlineCallingLogo" src={callingLogo} alt=""/>+7 (999) 000 - 00 - 00</p>
            </header>
        )
    }
}

export default Header
