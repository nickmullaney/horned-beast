import React from "react";

class Header extends React.Component{
  render(){
    return(
      <header>
        <h2>{this.props.title}</h2>
        <img src = {this.props.imageUrl} alt = {this.props.keyword}/>
        <p>{this.props.description}</p>
        </header>
    );
  }
}

export default Header