import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Coin from './components/Coin';


function App() {

  const [coinList,setCoinList] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(()=>{
    axios.get("https://api.coinstats.app/public/v1/coins")
    .then(res => setCoinList(res.data.coins))
    .catch(err => console.log(err))
  },[])

  //git testing ....again

  //Írunk egy függvényt amely megnézi hogy a coinList státusznan  eltárolt valuták közül van-e eggyezés azzal amit beírtam az input mezőbe

  const searchedCoin = coinList.filter(coin => {

    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  return (

   

    <div className="app">
      <div className='crypto-header'>
      <h1>Crypto Search</h1>
      <input type="text" placeholder='🪙 Bitcoin...' onChange={(e)=>{
        setSearch(e.target.value)
      }} />
      </div>
    

      <div className='crypto-container'>
      {
        searchedCoin.map((coin,idx)=>{
          return <Coin key={idx} name={coin.name
          } icon={coin.icon} price={coin.price.toFixed(3)} symbol={coin.symbol
          }/>
        })
      }
      </div>

    </div>
  );
}

export default App;
