import React, { Component } from 'react';

class Film extends Component{

  render(){
    return(
      <div className="filmItem">

    <ul>
      <li><a href={this.props.url}>{this.props.name}</a></li>
      </ul>
      </div>
    );


  }
}
export default Film;
