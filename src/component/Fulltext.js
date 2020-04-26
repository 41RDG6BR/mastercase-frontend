import React from 'react'
import axios from 'axios'

class FullText extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      fulltext: [],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/fulltext').then((result)=>{
      console.log(result.data)
      if(result.data)
        this.setState({ fulltext: result.data });
    }).catch((err)=>{
      console.log(err)
    })
  }

  render(){
      const fulltext = this.state.fulltext        
      let fulltextSlice = fulltext.slice(0,3)

      const result = fulltextSlice.map(element => {
      return (
        <div className="col-4">
          <div className="card">               
            <img className="card-img-top" src={element.items[0].images[0].imageUrl} alt={element.productName} />
              <div className="card-body">
                <h4 className="card-title"><a title="Ver produto">{element.productName}</a></h4>
                  <div className="row">
                      <div className="col">
                        <p className="btn btn-danger btn-block">R${element.items[0].sellers[0].commertialOffer.Installments[0].Value}</p>
                          <a className="btn btn-success btn-block">Link para o produto</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      )
    });
      return(
        <div className="row">
          <ul>{result}</ul>
        </div>
      )
    } 
}

export default FullText