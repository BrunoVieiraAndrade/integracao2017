import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class ListaOrdenada extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: this.props.items,
    };
  }


  renderListItems = () => {
    const { items } = this.state;
    if(items){
      return (
        <div>
          {items.map( (item) => {
            return (
              <li className="appear-animation animated fadeInUp appear-animation-visible" data-appear-animation="fadeInUp" data-appear-animation-delay="0" key={item} ><i className="fa fa-caret-right" />{item}</li>
            );
          })}
        </div>
      );
    }
  };

  render() {
    return (
      <ol className="list list-ordened">
        {this.renderListItems()}
      </ol>
    );
  }
}

export default ListaOrdenada;