
import React from 'react';


class List extends React.Component {




render() {


    return (
        <ul>
            {this.props.music.map(artist => <li>{artist.artistName}</li>)}
        </ul>
    )

}
}




export default List