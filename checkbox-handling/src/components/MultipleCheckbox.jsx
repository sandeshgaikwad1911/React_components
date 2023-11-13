/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function MultipleCheckbox() {

  const Games = ["cricket", "football", "swimming"]
  const [games, setGames] = useState([])
  useEffect(()=>{
    setGames(Games)
  },[])

  const [selectedGame, setSelectedGame]=useState([])
  // console.log('info', info)


  const handleChange = (e)=>{

    const {value, checked} = e.target

    if(checked){
      setSelectedGame((prev)=>([...prev, value]))
    }
    else{
      const filterdGames = selectedGame.filter((e)=>e!=value)        // if checkbox is not check we filter value
      // console.log('filterdINfo',filterdInfo)
      setSelectedGame(filterdGames)
    }
  }
   

  return (
    
      <div className="checkbox-handling">
        {
          games.map((game, i)=>(
            <div className="checkbox" key={i}>
                <input type="checkbox" id="check" value={game} onChange={handleChange}/>
                <label htmlFor="check">{game}</label>
            </div>
          ))
        }

      {
        selectedGame && (
          <ul>
            {
              selectedGame.map((game,i)=>(
                <li key={i}>{game}</li>
              ))
            }
          </ul>
        )
      }
      </div>
      
    
  );

}

export default MultipleCheckbox;
