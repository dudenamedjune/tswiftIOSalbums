import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

 export default class AlbumList extends Component {
   constructor(props) {
     super(props);
     this.state = {
       albums: []
     };
   }
   componentWillMount() {
    (async() => {
          const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
          const responseJson = await response.json();
          this.setState({ albums: responseJson });
    })();
   }
   renderAlbums() {
     return this.state.albums.map((album) =>
     <AlbumDetail key={album.title} album={album} />
     );
   }
    render() {
      return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      );
    }
}
