import React from 'react'
import axios from 'axios'

class Form extends React.Component{
 constructor(props){
    super(props)
    this.state = {
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

 onChange(event){
        axios.get("http://localhost:3000/filter?f="+event.target.value)
        .then((result)=>{
      console.log(result.data)
      this.setState({ itens: result.data });
    }).catch((err)=>{
      console.log(err)
    })
  }

    render(){
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
        return(<div>
            <div className="input-group md-form form-sm form-2 pl-0">
                <input onChange={this.onChange} className="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <span className="input-group-text lime lighten-2" id="basic-text1"><i class="fas fa-search text-grey"
                                aria-hidden="true"></i></span>
                    </div>
            </div>

            </div>
        )

    }
}

export default Form