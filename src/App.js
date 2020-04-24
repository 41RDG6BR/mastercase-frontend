import React, { Component } from 'react';
// import api from './api';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    // this.onChange = this.onChange.bind(this)

    this.state = {
      itens: [],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/users').then((result)=>{
      // console.log(result.data)
      this.setState({ itens: result.data });
    }).catch((err)=>{
      console.log(err)
    })
  }

  // async componentDidMount() {
  //   const response = await api.get('');
  //   // console.log(response.data)
  //   this.setState({ filmes: response.data });
  // }

  //   onChange(event){
  //   const self = this
  //   const response = api.get('https://api.tvmaze.com/search/shows?q='+event.target.value)
  //   .then(response=>{
  //     self.setState({ filmes: response.data });
  //   })
  // }

  render() {

    const itens  = this.state.itens;
    let result = JSON.stringify(itens)
 
    return (
      <div>
        <h1>Listar os Filmes</h1>
    <p>{result}</p>
      </div>
    );
  };
};

export default App;
