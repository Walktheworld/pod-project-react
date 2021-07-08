
import React from 'react';
import {Link} from 'react-router-dom'

class List extends React.Component {




render() {


    return (
        <ul>
            {this.props.music.map(artist => <Link to='/artist'><li>{artist.artistName}</li></Link>)}
        </ul>
    )

}
}




export default List