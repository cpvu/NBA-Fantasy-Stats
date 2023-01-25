const path = require('path');
const playerJSON = require('../utils/player_stats.json')

const root = path.join(__dirname, "..", "build")

exports.getHomePage = (_req, res) => {
  res.sendFile(root, "index.html")
};

exports.getPlayerStats = (req, res) => {
  const filters = req.body; 

  const newPlayerObject = playerJSON.filter(x => {
      for(let i = 0; i < filters.playerPositions.length; i++) {
         if (x['Pos'].includes(filters.playerPositions[i])){
            return x 
         }
      }
  })

  newPlayerObject.map(x => {
   //
  })



  

  res.send(newPlayerObject);
}

