import React, { Component } from 'react';
import axios from 'axios'

class Products extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)

    this.state = {
      fulltext: [],
      itens: {
        itemsReturned: []
      },
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/users').then((result)=>{
      console.log(result.data)
      if(result.data)
        this.setState({ itens: result.data });
    }).catch((err)=>{
      console.log(err)
    })
  }

    onClick(){
      console.log('ok')
    }
    onChange(event){
        axios.get("http://localhost:3000/filter?f="+event.target.value)
        .then((result)=>{
      // console.log(result.data)
      this.setState({ itens: result.data });
    }).catch((err)=>{
      console.log(err)
    })
  }

  render() {
    const itens  = this.state.itens
    // console.log(itens)
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
           {/* <FullText /> */}
        <ul>{result}</ul>
        {/* <ul>{fulltext}</ul> */}
      </div>
    );
  };
};

export default Products