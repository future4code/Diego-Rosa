import React from "react";
import axios from "axios";
import styled from 'styled-components'

//Component styling
const PlaylistName = styled.div `
    display:flex;
`;

const RemoveButton = styled.button `
    background-color:red;
    color:#fff;
    border:none;
    border-radius:10px;
    height:30px;
    margin:10px;
`;

const CreatePLaylist = styled.button `
    background-color:#33ff99;
    color:#fff;
    border:none;
    height:21px;
`;


const axiosConfig = {
  headers: {
    Authorization: "diego-rosa-dumont",
  },
};

const patternUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/";

export default class AddPlaylist extends React.Component {
  state = {
    playlists: [],
    inputName: "",
  };

  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists = async () => {
    try {
      const response = await axios.get(patternUrl, axiosConfig);
      this.setState({ playLists: response.data.result.list });
    } catch (error) {
      console.log(error.message);
    }
  };

  createPlaylist = async () => {
    const body = {
      name: this.state.inputName,
    };

    try {
      await axios.post(patternUrl, body, axiosConfig);
      this.setState({ inputName: "" });
      this.getPlaylists();
    } catch (err) {
      console.log(err.message);
    }
  };

  Remove = async (id) => {
    const newId = this.state.playlists.filter((play) =>
      play.id === id ? play.id : null
    );

    try {
      const response = await axios.delete(
        `${patternUrl}
        ${newId[0].id}`,
        axiosConfig
      );

      const playArray = [...this.state.playlists];
      const newPlayArray = playArray.splice(response, 1);
      this.getPlaylists();

      this.setState({ playlists: newPlayArray });
    } catch (error) {
      console.log(error.message);
    }
  };

  renderList = () => {
    return this.state.playlists.map((playlist) => {
      return (
        <PlaylistName key={playlist.id}>
          <p>{playlist.name}</p>
          <RemoveButton
           onClick={() => this.Remove(playlist.id)}>
               Remove
            </RemoveButton>
        </PlaylistName>
      );
    });
  };

  onChangeInput = (event) => {
    this.setState({ inputName: event.target.value });
  };

  render() {
    return (
      <div>
        <h1> Create your new playlist</h1>
        <div>
          <input
            type="text"
            placeholder="Your playlist name here!"
            value={this.state.inputName}
            onChange={this.onChangeInput}
          />
          <CreatePLaylist
           onClick={this.createPlaylist}>Add
           </CreatePLaylist>
        </div>

        <div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}