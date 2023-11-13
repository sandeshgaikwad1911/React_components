/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const SelectAllCheckbox = () => {
  const AllGames = [
    { name: "Cricket"},
    { name: "Football"},
    { name: "Swimming"},
  ];
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    setGames(AllGames);
  }, []);

  //   -----------------------------------------------------------------------------------------------------------

  const handleChange = (e)=>{

    const { name, checked } = e.target

    if(name==='allSelect'){
      const selectAllGames = games.map((game)=>({...game, isChecked: checked}))
      // here we update all object, adding isChecked property on each objec
      console.log('selectAllGames',selectAllGames)
      setGames(selectAllGames)
    }else{
      const checkedPerticularGames = games.map((game)=>(game.name === name ? {...game, isChecked: checked} : game))
      // here we update perticular object, adding isChecked property on that perticular object
      console.log('checkedPerticularGames', checkedPerticularGames)
      setGames(checkedPerticularGames)
  
    }

    /* 
        if => we click on allSelect.. then we add  {isChecked} property on all object and its value is according to checked..(means true or false) 
        else => if we select perticulat game then we update only that object
        
    */

    /* when we click on perticular game we have to update only that object and other object will be return as it is(else part),
     here we add one property on that perticulat object
    {...game, isChecked: checke}     means .. remain other property of obje and add isChecked property whose value is checked(true or false) */
    
  }

  return (
    <div className="checkbox-handling">
      <div>
        <input type="checkbox" id="selectAll" name="allSelect" onChange={handleChange} checked={games.filter((game)=>game?.isChecked != true).length == 0} />
        <label htmlFor="selectAll">Select all</label>
      </div>
      {/* 
          checked={games.filter((game)=>game?.isChecked != true).length < 1}
          if any of game has  isCheckd !== true and returned array has length < 1 or == 0, then deselect selectAll checkbox

          ** here we are returning length nad checking if it is < 1 means == 0
          {games.filter((game)=>game?.isChecked != true).length < 1}  
      */}

      <ul className="checkOne">
        {games.map((game, i) => (
            <li key={i}>
            <input type="checkbox" id={game.name} name={game.name} value={game.name} onChange={handleChange} checked={game?.isChecked || false}/>
            <label htmlFor={game.name}>{game.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectAllCheckbox;


/* 
    checked={game?.isChecked || false}
    games.map((game)=>)     if game has isChecked property then get value of those property else false
*/


