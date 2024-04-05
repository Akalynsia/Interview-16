import React, { useState } from "react";

function App() {
  const PLAYERS = [
    "Ali",
    "Namık",
    "Eda",
    "Ebru",
    "Suzan",
    "Samet",
    "Engin",
    "Halit",
  ];

  return <FormTeams players={PLAYERS} />;
}

const FormTeams = ({ players }) => {
  // KODUNUZ BURAYA GELECEK
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handlePlayerClick = (player) => {
    if (selectedTeam === 1) {
      setTeam1(team1.concat(player));
    } else if (selectedTeam === 2) {
      setTeam2(team2.concat(player));
    }
  };

  const handleTeamSelection = (teamNumber) => {
    setSelectedTeam(teamNumber);
  };

  const handleShuffle = () => {
    const shuffledPlayers = [...players];
    for (let i = shuffledPlayers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPlayers[i], shuffledPlayers[j]] = [
        shuffledPlayers[j],
        shuffledPlayers[i],
      ];
    }
    const half = Math.ceil(shuffledPlayers.length / 2);
    setTeam1(shuffledPlayers.slice(0, half));
    setTeam2(shuffledPlayers.slice(half));
    setSelectedTeam(null);
  };

  const handleReset = () => {
    setTeam1([]);
    setTeam2([]);
    setSelectedTeam(null);
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {players.map((player, index) => (
          <div
            key={index}
            onClick={() => handlePlayerClick(player)}
            className="bg-gray-200 p-2 rounded cursor-pointer"
          >
            {player}
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => handleTeamSelection(1)}
          className={`bg-blue-500 text-white px-4 py-2 rounded focus:outline-none ${
            selectedTeam === 1 ? "bg-blue-700" : ""
          }`}
        >
          Takım 1
        </button>
        <button
          onClick={() => handleTeamSelection(2)}
          className={`bg-red-500 text-white px-4 py-2 rounded focus:outline-none ${
            selectedTeam === 2 ? "bg-red-700" : ""
          }`}
        >
          Takım 2
        </button>
        <button
          onClick={handleShuffle}
          className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none"
        >
          Karıştır
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded focus:outline-none"
        >
          Sıfırla
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Takım 1</h2>
          {team1.map((player, index) => (
            <div key={index} className="bg-blue-200 p-2 rounded mb-2">
              {player}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Takım 2</h2>
          {team2.map((player, index) => (
            <div key={index} className="bg-red-200 p-2 rounded mb-2">
              {player}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
