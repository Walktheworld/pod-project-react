import React from 'react';
import {Switch, Route} from 'react-router-dom'
import ArtistContainer from './ArtistContainer'
import ArtistPage from './ArtistPage'

class App extends React.Component {



    render(){
        return (
          <div>
            <Switch>
              <Route exact path='/home' component={ArtistContainer}/>
              <Route exact path='/artist' component={ArtistPage}/>
                
                {/* <ArtistContainer/> */}
                
              
              
            </Switch> 
          </div>
        )
    }
}
 
export default App
