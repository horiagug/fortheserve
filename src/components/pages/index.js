import React, { Component } from "react";

import Home from "../home";
import Leaderboard from "../leaderboard/Leaderboard";
import Playermanagement from "../addplayer/Playermanagement";
import RecentGames from "../recentgames/RecentGames";
import api from "../../api";
import { confirmAlert } from 'react-confirm-alert';
import FormContent from "./../addgame/formcontent"
import Modal from 'react-modal'
import { brotliCompress } from "zlib";

Modal.setAppElement('#root')

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players:[],
      games:[],
      gameAdded: false,
      showModal : false,
      modalIsOpen: false,
    };
    this.deleteGame = this.deleteGame.bind(this);
    this.onDeletePlayer = this.onDeletePlayer.bind(this);
    this.deletePlayerPopUp = this.deletePlayerPopUp.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

  componentDidMount(){
    api.getPlayers()
      .then( json => {
        let players = json.map((player) => {
          return(
            {
              id: player._id,
              name: player.name,
              elo: player.elo
            }
          )
        })
        this.setState({players: players})
      })

      api.getGames().then(
        json => {
            let games = json.map((game) => {
                return(
                    {
                    key: game._id,
                    _id :game._id,
                    winner_id: game.winner_id,
                    loser_id: game.loser_id,
                    winner_elo_change: game.winner_elo_change,
                    loser_elo_change: game.loser_elo_change,
                    deleteGame : this.deleteGame,
                    isAdmin : false,
                    }
                )
            })
            this.setState({games: games})
        }
    )
  }


  deleteGame(_id) {
    api.deleteGame(_id)
    .then(data => {
        var array = [...this.state.games]
        array = array.filter((obj) => {
            return obj.props._id !== _id
        })
        this.setState({
            games: array,
            deleted : true,
        })
        })
    }

  deletePlayerPopUp = (player_id) => {
    confirmAlert({
      title: 'Confirm to submit',
        message: 'Are you sure you want to delete this player?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.onDeletePlayer(player_id)
          },
          {
            label: 'No',
          }
        ]
    })
}

onDeletePlayer(player_id) {
  api.deletePlayer(player_id)
    .then(response => {
        var array = [...this.state.players]
        array = array.filter((obj) => {
            return obj.id !== player_id
        })
        this.setState({
            players: array,
        })
      })
}

showModalHandler = (event) =>{
  this.setState({showModal:true});
}

hideModalHandler = (event) =>{
  this.setState({showModal:false});
}

openModal() {
  this.setState({modalIsOpen: true});
}

afterOpenModal() {
  // references are now sync'd and can be accessed. 
}

closeModal() {
  this.setState({modalIsOpen: false});
}

    render() {
      return(
        <div>
            <Home  openModal={this.openModal}/>
            <br />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Add Player Modal"
          style={{
            overlay: {
          
            },
            content: {
              background: "#fff",
              top: "12%",
              left: "5%",
              right: "5%",
              bottom: "12%",
              padding: "20px"
            }
          }}
        >
       <FormContent players = {this.state.players} closeModal ={this.closeModal}></FormContent>
        </Modal>
            <Leaderboard players={this.state.players} delete = {this.deletePlayerPopUp} />
            <br></br>
            <hr></hr>
            <RecentGames games={this.state.games} players = {this.state.players} isAdmin={false} />
            <br></br>
            <hr></hr>
            <Playermanagement/>
        </div>
      )
    }
}

export default Container;