import React, { Component } from 'react';
import Film from './Film';
import '../FilmList.css';
class FilmList extends Component{

  render(){

    const filmNodes = this.props.data.map(film => {
      return (
        <Film url={film.url} name={film.name} key={film.id}>
        {film.text}
        </Film>
      );
    });

    return(
      <div className="film-list">
      {filmNodes}
      </div>
    );

  }

}
export default FilmList;
