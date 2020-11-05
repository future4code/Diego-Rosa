import React from "react";
import axios from "axios";
import LabefyHome from "./components/LabefyHome"
import AddToPlaylist from "./components/AddToPlaylist";
import LikeThisDetails from "./components/LikeThisDetails";
import styled from 'styled-components'

//Components styling
const ContainerApp = styled.div `
  background-color: #ffcc80;
  color:#666666;
  display:flex;
  flex-direction:column;
  height: 100vh;
  width: 100vw;
  padding: 100px;
  `;

const HeaderBar = styled.div `
  background-color: #ff9900;
  border: 1px solid  #e68a00;
  width:50vh;
  border-radius:10px;
  padding: 10px;
  box-shadow: 5px 10px  #ffb84d;

`;

const FirtTitle = styled.h1 `
  background-color:#fff;
  border-radius:50px;
  padding: 20px;
  width:100px;

`;

const HomeButton = styled.button `
  background-color: #336699;
  color: #fff;
  border-radius:100px;
  border:none;
  padding: 5px;
  margin: 5px;
`;

const SearchButton = styled.button `
  background-color: #336699;
  color: #fff;
  border-radius:100px;
  border:none;
  padding: 5px;
`;

const CreatePLaylistButton = styled.button `
  background-color:  #33ff99;
  color:#666666;
  border-radius: 50px;
  border: none;
  padding: 6px;
  margin:10px;
`; 

const UnderedList = styled.ul `
  box-shadow: 2px 5px  #ffa31a;
  padding-bottom:5px;
`;

const axiosConfig = {
  headers: {
    Authorization: "pedro-lucinda-dumont"
  }
};

const patternUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export default class App extends React.Component {
  state = {
    playLists: [],
    addToPlay: false,
    likeDetails: false,
    home:false,
    play: '',
  };

  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists = async () => {
    try {
      const response = await axios.get(patternUrl, axiosConfig);
      this.setState({ playLists: response.data.result.list });
    } catch (err) {
      console.log(err.message);
    }
  };

  playDetail = (playList) => {
    const id = playList.id
    this.state.playLists.map(play => {
      if(play.id === id){
        this.setState({ likeDetails: !this.state.likeDetails, addToPlay: false , play: playList});
      }}
    )
  }

  addToPlaylist = () => {
    this.setState({ addToPlay: true });
    this.setState({ likeDetails: false });

  };

  renderListPlaylist = () => {
    return this.state.playLists.map((playList) => {
      return (
        <UnderedList key={playList.id} onClick={() => this.likeDetails(playList)}> {playList.name}
        </UnderedList>
      );
    });
  };

  render() {

    const renderComponents = () => {
      if (this.state.addToPlay) {
        return (
        <AddToPlaylist /> 
        )
      }else if (this.state.likeDetails) {
        return (
          <LikeThisDetails 
            play={this.state.play}
          />

        )
      }else if(this.state.LabefyHome){
        <LabefyHome />
      }
    };

    return (
      <ContainerApp>
        <HeaderBar>
          <FirtTitle>Labefy</FirtTitle>
          <HomeButton onClick={this.onClickHome}>Home</HomeButton>
          <SearchButton>Search</SearchButton>
          <div onClick={this.addPlaylist}>
            <CreatePLaylistButton>Create playlist</CreatePLaylistButton>
          </div>
          <ul>
            {this.renderListPlaylist()}
          </ul>
        </HeaderBar>
        <div className="component">{renderComponents()}</div>
      </ContainerApp>
    );
  }
}
