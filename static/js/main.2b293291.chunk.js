(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(61)},42:function(e,t,n){},43:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),i=n.n(l),o=(n(42),n(2)),c=n(3),s=n(5),u=n(4),p=n(6),m=(n(43),n(20)),d=n(14),h=n(18),f=n(1),y=n(7),b=n(8);function v(){var e=Object(y.a)(["\nflex: 1 100%;\ntext-align: center;\n"]);return v=function(){return e},e}function O(){var e=Object(y.a)(["\nmargin: auto;\nline-height: 1.5;\ncolor: #fff;\nfont-size: 1.2rem;\ntext-align: center;\nflex: 1 100%;\nfont-weight: 500;\n"]);return O=function(){return e},e}function j(){var e=Object(y.a)(["\n    color: white;\n    background: url(https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80);\n    background-size: cover;\n    background-position: center; \n    height: 30rem;\n    display: flex;  \n    flex-flow: row wrap;\n   align-content: center;\n"]);return j=function(){return e},e}var g=b.a.div(j()),E=b.a.p(O()),_=b.a.div(v());function k(){var e=Object(y.a)(["\n    margin: 20px, auto;\n    text-transform: uppercase;\n    line-height: 1;\n    font-size:2 rem;\n    font-weight: 600;\n    text-align: center;\n    flex: 1 100%"]);return k=function(){return e},e}function w(){var e=Object(y.a)(["\n    margin: auto;\n    text-transform: uppercase;\n    line-height: 1;\n    font-size: 3.75rem;\n    font-weight: 900;\n    color: ","\n    text-align: center;\n    flex: 1 100%;\n"]);return w=function(){return e},e}var S=b.a.h1(w(),function(e){return e.dark?"#000":"#fff"}),P=b.a.h2(k());function x(){var e=Object(y.a)(["\n  background: ",";\n  \n  color: white;\n  font-size: 1em;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-align: center;\n\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: ",";\n  border-radius : 100px;\n  transition: background 0.5s;\n\n  :hover {\n      background: ","\n      color: ",";\n  }\n"]);return x=function(){return e},e}var G=b.a.button(x(),function(e){return e.primary?"#6fc13e":"#0002"},function(e){return e.primary?"2px solid transparent":"2px solid white"},function(e){return e.primary?"#1c880d":"white"},function(e){return e.primary?"white":"black"}),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(S,null,"For The Serve"),r.a.createElement(E,null," Ping pong game score keeping app."),r.a.createElement(_,null,r.a.createElement(G,{primary:!0,onClick:this.props.openModal}," Add A Game ")))}}]),t}(a.Component);n(29);function A(){var e=Object(y.a)(["\n   text-align: center;\n   border-bottom: 2px dashed rgba(192, 192, 192, .3);\n"]);return A=function(){return e},e}function M(){var e=Object(y.a)(["\n   height: 2.5rem;\n"]);return M=function(){return e},e}function N(){var e=Object(y.a)(["\n   margin: auto;\n   width: 75%\n"]);return N=function(){return e},e}function D(){var e=Object(y.a)(["\n   background: #f0f0f0;\n   margin: auto;\n   width:13%\n   text-align: center;\n\n"]);return D=function(){return e},e}var T,B=b.a.th(D()),L=b.a.table(N()),R=b.a.tr(M()),U=b.a.td(A()),z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.players.sort(function(e,t){return t.elo-e.elo}),r.a.createElement("div",{className:"Leaderboard"},r.a.createElement(P,null,"Leaderboard"),r.a.createElement(L,null,r.a.createElement("tbody",null,r.a.createElement(R,null,r.a.createElement(B,null,"Player"),r.a.createElement(B,null,"ELO"),this.props.isAdmin&&r.a.createElement(B,null,"Delete")),this.props.players.map(function(t){return r.a.createElement(R,{key:t.id},r.a.createElement(U,null,t.name),r.a.createElement(U,null,t.elo),e.props.isAdmin&&r.a.createElement(U,null," ",r.a.createElement(G,{onClick:function(){e.props.delete(t.id)}},r.a.createElement("i",{className:"far fa-trash-alt"}))," "))}))))}}]),t}(a.Component);T="https://fortheserve.herokuapp.com";var I=function(){return fetch(T+"/api/players",{method:"GET"}).then(function(e){return e.json()})},J=function(e){var t={name:e};return fetch(T+"/api/players",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()})},W=function(e){return fetch(T+"/api/players/"+e,{method:"DELETE"}).then(function(e){return e.text()})},H=function(){return fetch(T+"/api/games",{method:"GET"}).then(function(e){return e.json()})},Y=function(e,t,n){var a={winner_id:e,loser_id:t};return n&&(a.date=n),fetch(T+"/api/games",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).catch(function(e){console.error(e)})},q=function(e){return fetch(T+"/api/games/"+e,{method:"DELETE"}).then(function(e){return e.text()})};function F(){var e=Object(y.a)(["\ntext-align: center;\nmargin: 2px, auto;\nwidth:30%;\nheight:1.5rem;\n"]);return F=function(){return e},e}function Q(){var e=Object(y.a)(["\n    margin:auto;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: center;\n"]);return Q=function(){return e},e}var $=b.a.form(Q()),K=b.a.input(F()),V=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleNameChange=function(e){n.setState({playerName:e.target.value})},n.state={playerName:"",added:!1},n.onSubmit=n.onSubmit.bind(Object(f.a)(Object(f.a)(n))),n.handleNameChange=n.handleNameChange.bind(Object(f.a)(Object(f.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),J(this.state.playerName).then(function(e){e.hasOwnProperty("_id")&&(t.setState({added:!0,playerName:""}),window.location.reload())})}},{key:"canBeSubmitted",value:function(){return this.state.playerName.length>0}},{key:"render",value:function(){var e=this.canBeSubmitted();return r.a.createElement("div",null,r.a.createElement(P,null," Add Player "),r.a.createElement($,{onSubmit:this.onSubmit},r.a.createElement(K,{placeholder:"Player name",type:"text",value:this.state.playerName,onChange:this.handleNameChange}),r.a.createElement(G,{primary:!0,disabled:!e,type:"submit"}," Submit ")))}}]),t}(a.Component),X=n(16),Z=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).delete=function(){Object(X.confirmAlert)({title:"Confirm to submit",message:"Are you sure you want to delete this game?",buttons:[{label:"Yes",onClick:function(){return n.onDelete()}},{label:"No"}]})},n.state={deleted:!1,winner:null,loser:null},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onDelete",value:function(){this.props.deleteGame(this.props._id),this.setState({deleted:!0})}},{key:"componentDidMount",value:function(){for(var e,t,n=0;n<this.props.players.length;n++)this.props.players[n].id===this.props.winner_id&&(e=r.a.createElement("div",{className:"Player"},r.a.createElement("span",null,this.props.players[n].name))),this.props.players[n].id===this.props.loser_id&&(t=r.a.createElement("div",{className:"Player"},r.a.createElement("span",null,this.props.players[n].name))),this.setState({winner:e,loser:t})}},{key:"render",value:function(){return r.a.createElement(R,{className:"Game"},r.a.createElement(U,null," ",this.state.winner),r.a.createElement(U,{style:{color:"green"}}," +",this.props.winner_elo_change," "),r.a.createElement(U,null,this.state.loser," "),r.a.createElement(U,{style:{color:"red"}}," ",this.props.loser_elo_change),this.props.isAdmin&&r.a.createElement(U,null," ",r.a.createElement(G,{onClick:this.delete.bind(this)},r.a.createElement("i",{className:"far fa-trash-alt"})," ")))}}]),t}(a.Component),ee=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"RecentGames"},r.a.createElement(P,null,"Recent Games"),r.a.createElement(L,null,r.a.createElement("tbody",null,r.a.createElement(R,null,r.a.createElement(B,null,"Winner"),r.a.createElement(B,null,"Elo Change"),r.a.createElement(B,null,"Looser"),r.a.createElement(B,{id:"loser_elo"},"Elo Change"),this.props.isAdmin&&r.a.createElement(B,null,"Delete")),this.props.games.map(function(t){return r.a.createElement(Z,{key:t._id,_id:t._id,winner_id:t.winner_id,loser_id:t.loser_id,winner_elo_change:t.winner_elo_change,loser_elo_change:t.loser_elo_change,deleteGame:t.deleteGame,isAdmin:e.props.isAdmin,players:e.props.players})}))))}}]),t}(a.Component),te=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return 1!==this.props.currentStep?null:r.a.createElement("div",null,r.a.createElement(P,null,"Select Players"),this.props.players.map(function(t){return r.a.createElement(G,{key:t.id,onClick:function(){e.props.onClick(t.id,t.name)}},t.name)}),r.a.createElement(P,null,"Selected Players"),this.props.selectedPlayers.map(function(t){return r.a.createElement(G,{key:t.id,onClick:function(){e.props.onClick(t.id,t.name)}},t.name)}))}}]),t}(a.Component);function ne(){var e=Object(y.a)(["\nflex: 1 50%;\ntext-align: center;\n"]);return ne=function(){return e},e}function ae(){var e=Object(y.a)(["\n    display: flex;  \n    flex-flow: row wrap;\n   align-content: center;\n"]);return ae=function(){return e},e}var re=b.a.div(ae()),le=b.a.div(ne()),ie=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return 2!==this.props.currentStep?null:r.a.createElement("div",null,r.a.createElement(P,null,"Score"),r.a.createElement("div",null,r.a.createElement(re,null,r.a.createElement(le,null,r.a.createElement(P,null,this.props.selectedPlayers[0].name," "),r.a.createElement(P,null,this.props.player1_score," "),r.a.createElement(G,{primary:!0,onClick:function(){e.props.addGame(e.props.selectedPlayers[0].id,e.props.selectedPlayers[1].id)}},"Add")),r.a.createElement(le,null,r.a.createElement(P,null,this.props.selectedPlayers[1].name," "),r.a.createElement(P,null,this.props.player2_score," "),r.a.createElement(G,{primary:!0,onClick:function(){e.props.addGame(e.props.selectedPlayers[1].id,e.props.selectedPlayers[0].id)}},"Add"))),this.removeGameButton))}}]),t}(a.Component),oe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={currentStep:1,players:[],player1_score:0,player2_score:0,games:[]},n.handleSelection=n.handleSelection.bind(Object(f.a)(Object(f.a)(n))),n.addOrRemovePlayer=n.addOrRemovePlayer.bind(Object(f.a)(Object(f.a)(n))),n.addGame=n.addGame.bind(Object(f.a)(Object(f.a)(n))),n.removeGame=n.removeGame.bind(Object(f.a)(Object(f.a)(n))),n.addGameToList=n.addGameToList.bind(Object(f.a)(Object(f.a)(n))),n._next=n._next.bind(Object(f.a)(Object(f.a)(n))),n._prev=n._prev.bind(Object(f.a)(Object(f.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"_next",value:function(){var e=this.state.currentStep;e=e>=1?2:e+1,this.setState({currentStep:e})}},{key:"_prev",value:function(){var e=this.state.currentStep;e=e<=1?1:e-1,this.setState({currentStep:e})}},{key:"addOrRemovePlayer",value:function(e,t,n){for(var a=-1,r=0;r<e.length;r++)e[r].id===t.id&&(a=r);return-1!==a?e.splice(a,1):n||e.push(t),e}},{key:"addGameToList",value:function(e,t,n){var a={id:t,winner:n};return e.push(a),e}},{key:"handleSelection",value:function(e,t){var n=this.state.players.slice(),a={name:t,id:e};0===n.length?n.push(a):n=2===n.length?this.addOrRemovePlayer(n,a,!0):this.addOrRemovePlayer(n,a,!1),this.setState({players:n})}},{key:"addGame",value:function(e,t){var n=this;Y(e,t).then(function(t){if(t.hasOwnProperty("_id")){var a=n.state.games.slice();if(e===n.state.players[0].id){var r=n.state.player1_score+1;a=n.addGameToList(a,t._id,"player_1"),n.setState({player1_score:r,games:a})}else{var l=n.state.player2_score+1;a=n.addGameToList(a,t._id,"player_2"),n.setState({player2_score:l,games:a})}}})}},{key:"removeGame",value:function(){var e=this;if(0===this.state.games.length)alert("Something went wrong");else{var t=this.state.games.slice(),n=t.pop();q(n.id).then(function(a){if("player_1"===n.winner){var r=e.state.player1_score-1;e.setState({games:t,player1_score:r})}else{var l=e.state.player2_score-1;e.setState({games:t,player2_score:l})}})}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{dark:!0},"Add games"),r.a.createElement(te,{currentStep:this.state.currentStep,onClick:this.handleSelection,players:this.props.players,selectedPlayers:this.state.players}),r.a.createElement(ie,{currentStep:this.state.currentStep,selectedPlayers:this.state.players,player1_score:this.state.player1_score,player2_score:this.state.player2_score,addGame:this.addGame,removeGame:this.removeGame}),this.previousButton,this.nextButton,this.removeGameButton)}},{key:"previousButton",get:function(){return 1!==this.state.currentStep?r.a.createElement(G,{onClick:this._prev}," Previous "):null}},{key:"nextButton",get:function(){return this.state.currentStep<2&&2===this.state.players.length?r.a.createElement(G,{primary:!0,onClick:this._next}," Next  "):null}},{key:"removeGameButton",get:function(){return 2!==this.state.currentStep||0===this.state.player1_score&&0===this.state.player2_score?null:r.a.createElement(G,{onClick:this.removeGame}," Remove Game  ")}}]),t}(a.Component),ce=n(24),se=n.n(ce);se.a.setAppElement("#root");var ue=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).deletePlayerPopUp=function(e){Object(X.confirmAlert)({title:"Confirm to submit",message:"Are you sure you want to delete this player?",buttons:[{label:"Yes",onClick:function(){return n.onDeletePlayer(e)}},{label:"No"}]})},n.showModalHandler=function(e){n.setState({showModal:!0})},n.hideModalHandler=function(e){n.setState({showModal:!1})},n.state={players:[],games:[],gameAdded:!1,showModal:!1,modalIsOpen:!1},n.deleteGame=n.deleteGame.bind(Object(f.a)(Object(f.a)(n))),n.onDeletePlayer=n.onDeletePlayer.bind(Object(f.a)(Object(f.a)(n))),n.deletePlayerPopUp=n.deletePlayerPopUp.bind(Object(f.a)(Object(f.a)(n))),n.openModal=n.openModal.bind(Object(f.a)(Object(f.a)(n))),n.afterOpenModal=n.afterOpenModal.bind(Object(f.a)(Object(f.a)(n))),n.closeModal=n.closeModal.bind(Object(f.a)(Object(f.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;I().then(function(t){var n=t.map(function(e){return{id:e._id,name:e.name,elo:e.elo}});e.setState({players:n})}),H().then(function(t){var n=t.map(function(t){return{key:t._id,_id:t._id,winner_id:t.winner_id,loser_id:t.loser_id,winner_elo_change:t.winner_elo_change,loser_elo_change:t.loser_elo_change,deleteGame:e.deleteGame,isAdmin:!1}});e.setState({games:n})})}},{key:"deleteGame",value:function(e){var t=this;q(e).then(function(n){var a=Object(h.a)(t.state.games);a=a.filter(function(t){return t.props._id!==e}),t.setState({games:a,deleted:!0})})}},{key:"onDeletePlayer",value:function(e){var t=this;W(e).then(function(n){var a=Object(h.a)(t.state.players);a=a.filter(function(t){return t.id!==e}),t.setState({players:a})})}},{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,{openModal:this.openModal}),r.a.createElement("br",null),r.a.createElement(se.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,contentLabel:"Example Modal"},r.a.createElement(oe,{players:this.state.players})),r.a.createElement(z,{players:this.state.players,delete:this.deletePlayerPopUp}),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(ee,{games:this.state.games,players:this.state.players,isAdmin:!1}),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(V,null))}}]),t}(a.Component),pe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).deletePlayerPopUp=function(e){Object(X.confirmAlert)({title:"Confirm to submit",message:"Are you sure you want to delete this player?",buttons:[{label:"Yes",onClick:function(){return n.onDeletePlayer(e)}},{label:"No"}]})},n.state={players:[],games:[],gameAdded:!1},n.deleteGame=n.deleteGame.bind(Object(f.a)(Object(f.a)(n))),n.onDeletePlayer=n.onDeletePlayer.bind(Object(f.a)(Object(f.a)(n))),n.deletePlayerPopUp=n.deletePlayerPopUp.bind(Object(f.a)(Object(f.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;I().then(function(t){var n=t.map(function(e){return{id:e._id,name:e.name,elo:e.elo}});e.setState({players:n})}),H().then(function(t){var n=t.map(function(t){return{key:t._id,_id:t._id,winner_id:t.winner_id,loser_id:t.loser_id,winner_elo_change:t.winner_elo_change,loser_elo_change:t.loser_elo_change,deleteGame:e.deleteGame,isAdmin:!1}});e.setState({games:n})})}},{key:"deleteGame",value:function(e){var t=this;q(e).then(function(n){var a=Object(h.a)(t.state.games);a=a.filter(function(t){return t.props._id!==e}),t.setState({games:a,deleted:!0})})}},{key:"onDeletePlayer",value:function(e){var t=this;W(e).then(function(n){var a=Object(h.a)(t.state.players);a=a.filter(function(t){return t.id!==e}),t.setState({players:a})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(z,{players:this.state.players,delete:this.deletePlayerPopUp,isAdmin:!0}),r.a.createElement(ee,{games:this.state.games,isAdmin:!0,players:this.state.players}))}}]),t}(a.Component),me=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{basename:"/"},r.a.createElement(d.a,{path:"/",exact:!0,component:ue}),r.a.createElement(d.a,{path:"/admin",component:pe}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(m.a,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.2b293291.chunk.js.map