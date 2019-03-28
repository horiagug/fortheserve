export default {

    getPlayers(){
        let players = fetch('/api/players',
                             {method: 'GET'}).then((response) => response.json())
        return players;
    }

}