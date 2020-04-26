import React, { Component } from 'react';
import axios from 'axios'

class Products extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)

    this.state = {
      itens: {
        itemsReturned: []
      },
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3003/products').then((result)=>{
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
        axios.get("http://localhost:3003/filter?f="+event.target.value)
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
        <div key={element.href} className="col-12 col-md-6 col-lg-3">
          <div className="card">
            <img className="card-img-top" src={element.thumbUrl} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title"><a href={element.href} title="View Product">{element.name}</a></h4>
                  <div className="row">
                    <div className="col">
                      <a href={element.href} className="btn btn-success btn-block">Add to cart</a>
                    </div>
                  </div>
              </div>
          </div>
        </div>              
        )
      });
    }
    
    return (
      <div>
        <div className="container">
      <br/>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                    <i className="fas fa-search h4 text-body"></i>
                </div>                                
                <div className="col">
                    <input onChange={this.onChange} className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
                </div>                                
                <div className="col-auto">
                    <button className="btn btn-lg btn-success" type="submit">Search</button>
                </div>                              
            </div>
          </form>
        </div>             
      </div>
      <br/>
      </div>
        <div className="row">{result}</div>
      </div>
    );
  };
};            
   
export default Products