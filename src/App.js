import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import CompanyInfo from "./components/CompanyInfo"

class App extends React.Component {
    render() {
        return (
            <div className="MainPage">
            <Header></Header>
            <Main></Main>
            <CompanyInfo></CompanyInfo>
            </div>
        )
    }
}

export default App
