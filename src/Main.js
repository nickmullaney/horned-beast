import React from "react";
import HornedBeast from "./HornedBeast";



// All code thanks to the team at project table 3. Anthony, Danner, Hannah, Jeremy, Matt, Nick
class Main extends React.Component {
  render() {
    // console.log("ShowModalFunction" + this.props.handleShowModal);
    return (
      <main>
        {/* This iterates over the JSON data file */}
        {/* This feeds down from App.js */}
        {this.props.data.map((beast) => (
          <React.Fragment key={beast._id}>
            {/* This is the long way to do this */}
            {/* <HornedBeast
              image_url={beast.image_url}
              title={beast.title}
              description={beast.description}
              alt={beast.keyword}
              idx={idx}
              handleShowModal={this.props.handleShowModal}
            /> */}
            {/* This is the fast way to do this */}
            {/* This needs to match the JSON Data */}
            <HornedBeast {...beast}
              handleShowModal={this.props.handleShowModal}
              handleCloseModal={this.props.handleCloseModal} />
          </React.Fragment>
        ))}
      </main>
    )
  }
}
export default Main