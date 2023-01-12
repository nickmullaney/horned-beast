import React from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import "./css/App.css"

class App extends React.Component{
  render(){
    return(
      <>
      <body>
      <Header/>
      <Main />
      <Footer/>
      </body>
      
      </>
    );
  }
}

export default App;