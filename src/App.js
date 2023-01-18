import React from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import SelectedBeasts from "./SelectedBeasts";
import "./css/App.css";
import { Form } from "react-bootstrap";
import data from "./data.json"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      image_url: "",
      description: "",
      hornData: data
    }
  }

  handleShowModal = (title, image_url, description) => {
    // console.log("showModal")
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  //Sample form sort
  updateHornData = (e) => {
    //event prevent default behavior on button
    e.preventDefault();
    //setting new value for event target
    const horns = e.target.value;
    
    parseInt(horns);
    console.log("ParseInt Horns " + horns);  
  
    //initializing new variable
    let updatedHorns;

    //if else statement to check values and filter.
    if (horns === "") {
      //need to parseint horns try different spots
      updatedHorns = horns;
    }
    if (horns === "1") {
      console.log("inside of statement 1");
      updatedHorns = data.filter(beast => beast.horns === parseInt(horns));
      console.log("inside1 horns " + horns)
      console.log(updatedHorns);
    }
    if (horns === "2") {
      console.log("inside of statement 2");
      updatedHorns = data.filter(beast => beast.horns === parseInt(horns));
      console.log("inside2 horns " + horns)
      console.log(updatedHorns);
    }
    if (horns === "3") {
      console.log("inside of statement 3");
      updatedHorns = data.filter(beast => beast.horns === parseInt(horns));
      console.log("inside3 horns " + horns)
      console.log(updatedHorns);
    }
    if (horns === "100") {
      console.log("inside of statement 4");
      updatedHorns = data.filter(beast => beast.horns === parseInt(horns));
      console.log("inside4 horns " + horns)
      console.log(updatedHorns);
    }
    // else {
    //   console.log("inside of final statement");
    //   updatedHorns = this.state.hornData.filter(beast => beast.horns == horns);
    // }
    //updates our state
    this.setState({
      hornData: updatedHorns
    })
  }

  render() {
    return (
      <>
        <body>
          <Form>
            <Form.Group>
              <Form.Select onChange={this.updateHornData}>
                <option value={""}>All Horns</option>
                <option value={"1"}>One Horn</option>
                <option value={"2"}>Two Horns</option>
                <option value={"3"}>Three Horns</option>
                <option value={"100"}>Four Or More Horns</option>
              </Form.Select>
            </Form.Group>
          </Form>

          <Header />
          <Main
            data={this.state.hornData}
            handleShowModal={this.handleShowModal} />
          <Footer />
          <SelectedBeasts
            description={this.state.description}
            title={this.state.title}
            image_url={this.state.image_url}
            showModal={this.state.showModal}
            handleCloseModal={this.handleCloseModal} />
        </body>
      </>
    );
  }
}

export default App;