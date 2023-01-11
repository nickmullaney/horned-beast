import React from "react";
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
class Beasts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      clickedFavorite: false,
      numberOfFavorites = 0
    }
  }
  handleFavorite = () => {
    this.setState(prevState =>({
      isFavorite: !prevState.isFavorite, numberOfFavorites: (prevState.isFavorite ? prevState.numberOfFavorites - 1 : prevState.numberOfFavorites +1)
    })
  }
  render() {
    return (
      <div className="beast">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title as="h2">{this.props.title}</Card.Title>
            <Card.Text>Favorite Fruit: {this.props.fruit}</Card.Text>
          <Card.Img
            src={this.props.image_url}
            alt={this.props.description}
            height={300}
            onClick={this.handleFavorite}
          />
            <Button variant="primary">  {this.state.clickedFavorite ? <Card.Text>Favorited ❤️</Card.Text> : <Card.Text>Favorited: 🖤</Card.Text>}</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Beasts