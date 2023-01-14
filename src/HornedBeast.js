import React from "react";
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import "./css/App.css"

class Beasts extends React.Component {
  // this constructor sets our baseline a click to favorites as false and a number of favorites to
  constructor(props) {
    super(props)
    this.state = {
      clickedFavorite: false,
      numberOfFavorites: 0
    }
  }
  // this function handles addinga number of favorites when the user clicks
  handleFavorite = () => {
    this.setState({
      clickedFavorite: this.state.clickedFavorite ? false : true,
      numberOfFavorites: this.state.numberOfFavorites + 1
    })
  }
  // this resets the favorite count
  resetFavorite = () => {
    this.setState({
      clickedFavorite: false,
      numberOfFavorites: 0
    })
  }

  fillAndShowModal = () => {
    this.props.handleShowModal(
      this.props.title,
      this.props.image_url
    );
  }

  render() {
    return (
      <div className="beast">
        <Card bg="secondary" text="light" border="primary" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title as="h2">{this.props.title}</Card.Title>
            <Card.Text>Description: {this.props.description}</Card.Text>
            <Card.Img
              src={this.props.image_url}
              alt={this.props.description}
              height={300}
              // This onClick ties to the function listed above
              onClick={this.fillAndShowModal}
            />
            <Button variant="success"
              onClick={this.handleFavorite}>
              {this.state.clickedFavorite ?
                <Card.Text>Favorited: ❤️</Card.Text>
                : <Card.Text>Favorited: 💗</Card.Text>
              }</Button>
            <Button variant="danger" onClick={this.resetFavorite}>Reset</Button>
            <Card.Text>Favorites: {this.state.numberOfFavorites}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Beasts



// Graveyard
// handleFavorite = () => {
//   this.setState(prevState =>({
//     isFavorite: !prevState.isFavorite, numberOfFavorites: (prevState.isFavorite ? prevState.numberOfFavorites - 1 : prevState.numberOfFavorites + 1)
//   })
// }