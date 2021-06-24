import React from 'react';
import List from './List'
import Form from './Form'

class App extends React.Component {
    constructor(){
        super()
        this.state = {music: []}
    }   
    

    
    componentDidMount() {
        fetch("https://itunes.apple.com/search?term=music")
          .then(res => res.json())
          .then(
            (data) => {
            this.setState({music:data.results})
            },
            
            (error) => {
              this.setState({
                error
              });
            }
          )
      }
    render(){
        return <List music={this.state.music}/>
    }
}
 
export default App