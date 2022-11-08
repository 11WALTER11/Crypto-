
import './App.css';
import React, {useEffect,useState } from 'react';
import Axios from 'axios';
import Coin from './components/Coin';

function App() {

  const [listOfCoins,setListOfCoins] = useState([])
  const [searchWord,setSearchWord] = useState("")

   useEffect(()=>{

    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response=>    {
        setListOfCoins(response.data.coins);
      }
      ));
    
   },[]);
  
   const filteredCoins = () => listOfCoins.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchWord);
   });

  return (
    <div className="App">
     <div className="cryptoHeader">
     
     <input type="text" placeholder="Enter coin name..." onChange={(event)=>{setSearchWord(event.target.value)}}></input>

     </div>
     <div className="cryptoDisplay">
      
      {/* {listOfCoins.map((coin)=>{ */}
      
      {filteredCoins().map((coin)=>{
      return <Coin name={coin.name}
       icon={coin.icon} 
       price={coin.price}
        symbol={coin.symbol}
        />
     }
     )
     }
     </div>
    </div>
  );
}

export default App;
