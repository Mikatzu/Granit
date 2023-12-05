import React from "react";
import letterO from "../../src/svg/about_company.svg"
import managerAndWorkers from "../../src/img/manager_and_workers.png"

class CompanyInfo extends React.Component {
    render(){
        return(
            <div className="aboutCompany">
                <div className="aboutCompanyLine">
                    <img className="" src={letterO} alt=""/>
                </div>
                <div className="aboutCompanyInfo">
                <h1>Основу компании</h1>
                <p>составляют инженеры с опытом более 10 лет в строительстве и шпунтовых работах.
                    Строгий контроль каждого этапа работ и поставок с использованием современных
                    технологий позволяет избегать проблем с доставкой материалов и качеством
                    производимых работ. Основу компании составляют инженеры с опытом более
                    10 лет в строительстве и шпунтовых работах. Строгий контроль каждого
                    этапа работ и поставок с использованием современных технологий позволяет
                    избегать проблем с доставкой материалов и качеством производимых работ.
                    Основу компании составляют инженеры с опытом более 10 лет в строительстве
                    и шпунтовых работах. Строгий контроль каждого этапа работ и поставок с
                    использованием современных технологий позволяет избегать проблем с
                    доставкой материалов и качеством производимых работ.</p>
                </div>
                <div className="managerAndWorkers">
                    <div className="rectangle1"></div>
                    <div className="rectangle2"></div>
                    <img src={managerAndWorkers} alt=""/>
                </div>
            </div>
        )
    }
}

export default CompanyInfo
