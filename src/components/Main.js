import React from "react";
import bigPicture from "../../src/img/bigPicture.png"
import callCircleDefault from "../../src/svg/defaultCall.svg"
import callCircleFocus from "../../src/svg/focusCall.svg"
class Main extends React.Component {
    render(){
        return(
            <div className="mainContainer">
                <div className="white_block"></div>
                <div className="mainInfo">
                    <div className="block1">
                    <h1>
                        РАБОТЫ НУЛЕВОГО ЦИКЛА <br/>
                        СТРОИТЕЛЬСТВА
                    </h1>
                    <p>
                        Комплекс шпунтовых и свайных работ по всей России <br/>
                        “Под ключ”
                    </p>
                    </div>
                    <div className="block2">
                        <h3>Сэкономим до 40%</h3>
                        <p className="block2Label1">на материале и работах без потери качества и надежности</p>
                        <p className="block2Label2">За счёт использования новейших видов шпунта, собственного парка техники и бесплатного аудита проекта.</p>
                    </div>
                </div>
                <div className="callAndBigPicture">
                    <a className="callCircleLink" href="/">
                    <div className="callCircle">
                        <img className="callCircleDefault" src={callCircleDefault} alt=""/>
                        <img className="callCircleFocus" src={callCircleFocus} alt=""/>
                    </div>
                    </a>
                    <div className="bigPicture">
                        <img src={bigPicture} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
