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
        let result;
        // console.log(fulltext)

         if(fulltext){
            result = fulltext.map(element => {
        return (
          <li key={element.productId}>
          </li>
        )
      });
    }
        return(<div>
                <h1>{result}</h1>
            </div>
        )
    }
}

export default FullText