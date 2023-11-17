import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"

class App extends React.Component {
    render() {
        return (
            <div className="MainPage">
            <Header></Header>
            <Main></Main>
            </div>
        )
    }
}

export default App
