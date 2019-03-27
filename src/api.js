export default {

    getPlayers(){
        let players = fetch('http://fortheserve.herokuapp.com/api/players', {method: 'GET'}).then((response) => response.json())
        return players;
    }

}