import React from 'react'
import './App.css';

import Game from './Game/Game';

function App() {

  const [data, setData] = React.useState({
    players: [
      {
        name: "Harley",
        score: 0
      },
      {
        name: "Timmy",
        score: 0
      },
      {
        name: "Willfried",
        score: 0
      },
      {
        name: "Michel",
        score: 0
      },
    ],
    round: 1,
    roundData: []
  })

  React.useEffect(() => {
    console.log(data)
  }, [data])


  const dataHandler = (data) => {
    setData(data)
  }

  return (
    <div className="App">
      <Game data={data} setData={dataHandler}/>
    </div>
  );
}

export default App;
