import React, { Component } from 'react';

class Fetch extends React.Component {
    constructor(){
        super()
        this.state = {music: []}
    }   
    

    
    componentDidMount() {
        fetch("https://itunes.apple.com/search?term=music")
          .then(res => res.json())
          .then(
            (data) => {
              console.log(data)
            },
            
            (error) => {
              this.setState({
                error
              });
            }
          )
      }
    render(){
        return null
    }
}
 
export default Fetch