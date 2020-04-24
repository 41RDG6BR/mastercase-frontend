import React, { Component } from 'react';
// import api from './api';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)

    this.state = {
      itens: {
        itemsReturned: []
      },
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/users').then((result)=>{
      // console.log(result.data)
      if(result.data)
        this.setState({ itens: result.data });
    }).catch((err)=>{
      console.log(err)
    })
  }

    onChange(event){
        axios.get("http://localhost:3000/filter"+event.target.value)
        .then((result)=>{
      console.log(result.data)
      // this.setState({ itens: result.data });
    }).catch((err)=>{
      console.log(err)
    })
  }

  render() {

    const itens  = this.state.itens
    let result;
    if(itens && itens.itemsReturned){
      result = itens.itemsReturned.map(element => {
        return (
          <li key={element.href}>
            <img src={element.thumbUrl} />
            <p>{element.name}</p>
          </li>
        )
      });
    }
 
    return (
      <div>
        <h1>Listar os Filmes</h1>
           <input onChange={this.onChange} />
        <ul>{result}</ul>
      </div>
    );
  };
};

export default App;
