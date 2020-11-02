import React from "react";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "diego-rosa-dumont",
  },
};

const patternUrl ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/";

export default class LikeThisDetails extends React.Component {
  state = {
    playSong: [],
		play: this.props.play,
		songName: '',
		songArtist: '',
		songUrl: '',
  };

  componentDidMount() {
    this.getTracks();
  }

  getAllSongs = async () => {
    const id = this.props.play.id;
    
    try {
      
      const response = await axios.get(`${patternUrl}${id}
      / songs`, axiosConfig);

      this.setState({ playSong: response.data.result.song });
    } catch (err) {
      console.log(err.message);
    }
	};


  addTrackList = async () => {
    
    const body ={
			name: this.state.songName,
			artist: this.state.songArtist,
			url: this.state.songUrl,
    
    }

    const id = this.props.play.id;
    
    try {
      await axios.post(`${patternUrl}${id}
      / songs`, body,axiosConfig);

            this.setState({
            
                songName: "",
                songArtist: "",
                songUrl: "" });

			this.getSongs();

    } catch (err) {
      console.log(err.message);
    }
  };

	onChangeSongName = (event) => {
		this.setState({songName: event.target.value})
  }
  
	onChangeSongArtist = (event) => {
		this.setState({songArtist: event.target.value})
  }
  
	onChangeSongUrl = (event) => {
		this.setState({songUrl: event.target.value})
	}

  render() {


    const renderSongs = () => {

      return this.state.playSongs.map((song) => {
        return (
      
      <div key={song.id}>
      
            <h3>{song.name}</h3>
            <p> {song.artist} </p>
			
      <audio controls>
                <source src={song.url}
                type="audio/mp3"/>
			</audio>

            {<button onClick={() =>
                this.Remove(song.id)}>
                Remove
            </button>}
          </div>
        );
      });
    };

    return (
    
        <div className="playDetailComponent">
            <h1>
              {this.state.play.name}
            </h1>
          
          <div>
          
            <input
              value={this.state.songName}
              onChange={this.onChangeSongName}
              type="text"
              placeholder="Name here"
            />

            <input
              value={this.state.songArtist}
              onChange={this.onChangeSongArtist}
              type="text"
              placeholder="Artist here"
            />

            <input
              value={this.state.songkUrl}
              onChange={this.onChangeSongkUrl}
              type="url"
              placeholder="Song link here"
            />
            
          <button onClick={this.addSong}>+</button>
      
      </div>

        {renderSongs()}

      </div>
    );
  }
}