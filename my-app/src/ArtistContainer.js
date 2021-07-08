import React, {Component} from 'react'
import List from './List'
import Form from './Form'


export default class ArtistContainer extends Component {
    constructor(){
        super()
        this.state = {music: []}
    }   
    

    
    componentDidMount() {
        fetch("https://itunes.apple.com/search?term=music")
          .then(res => res.json())
          .then((data) => {
            // console.log(data.results[10].trackViewUrl)})
            this.setState({music:data.results})
            } ,
            
            (error) => {
              this.setState({
                error
              });
            }
          )
      }
      
    render(){
        return (
        <div>
        <List music={this.state.music}/>
        <Form/>
        </div>  
        )
    }
}