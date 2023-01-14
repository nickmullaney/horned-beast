import React from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import SelectedBeasts from "./SelectedBeasts";
import "./css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      image_url: ""
    }
  }

  handleShowModal = (title, image_url) => {
    console.log("showModal")
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <body>
          <Header />
          <Main
          handleShowModal ={this.handleShowModal}/>
          <Footer />
          <SelectedBeasts
          description ={this.state.description}
          title ={this.state.title}
          image_url = {this.state.image_url} 
          showModal = {this.state.showModal}
          handleCloseModal ={this.handleCloseModal}/>
        </body>
      </>
    );
  }
}

export default App;