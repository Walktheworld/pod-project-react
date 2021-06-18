import { Component } from 'react';


export default class Fetch extends Component {
    constructor(){
        super()
        this.state = {music: []}
    }   
    

    
    componentDidMount() {
        fetch("https://itunes.apple.com/search?term=music")
          .then(res => res.json())
          .then(
            (data) => {
              this.setState({
                isLoaded: true,
                items: data.items
              });
              console.log(data)
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
    render(){
        return null
    }
}
 