export default {

    // Players API:
    
    // Returns a list of players in JSON
    getPlayers(){
        let players = fetch('/api/players',
            {method: 'GET'}).then((response) => response.json())
        return players;
    },

    // Returns the player or 404
    // Returned player data:
    // {
    // 	"_id": string,
    // 	"name": string,
    // 	"elo": int
    // }
    getPlayer(id){
        let player = fetch('/api/players/' +id,
            {method: 'GET'}).then((response) => response.json())
        return player;
    },

    // Add player:
    // [POST] /players
    // Data: {"name": string}
    // Returns: Added player
    addPlayer(name){
        var data = {
            "name" : name,
        }
        let response = fetch('/api/players',
            {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response => response.json()))
        return response
    },

    // Delete player:
    // [DELETE] /players/{id}
    // Returns: 204 if success, 404 otherwise

    deletePlayer(id){
        let response = fetch('/api/players/' + id,
            {method: "DELETE"}).then((response => response.text()))
        return response
    },
    // Games API:

    // Returns a list of games in JSON
    getGames(){
        let games = fetch('/api/games',
            {method: 'GET'}).then((response) => response.json())
        return games;
    },

    //Get game:
    // [GET] /games/{id}
    // Returns: Game or 404
    // Returned game data:
    // {
    // 	"_id": string,
    // 	"date": string, UTC-ISO
    // 	"winner_id": string,
    // 	"loser_id": string,
    // 	"winner_elo_change": int,
    // 	"loser_elo_change": int
    // }

    getGame(id){
        let game = fetch('/api/games/' + id,
            {method:'GET'}).then((response) => response.json())
        return game
    },

    addGame(winner_id, loser_id, date){
        var data = {
            winner_id: winner_id,
            loser_id: loser_id,
        }
        if (date) {
            data.date = date;
        }
       let response = fetch('/api/games',
            {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
        return response
    },

    deleteGame(id){
        let response = fetch('/api/games/' + id,
            {method: "DELETE"}).then((response => response.text()))
        return response
    }
}