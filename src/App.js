import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';


function App() {

  const [coinList,setCoinList] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(()=>{
    axios.get("https://api.coinstats.app/public/v1/coins")
    .then(res => setCoinList(res.data.coins))
    .catch(err => console.log(err))
  },[])

  //git testing ....again
  return (

   

    <div className="crypto-header">
      <h1>Crypto Search</h1>
      <input type="text" placeholder='🪙 Bitcoin...' onChange={(e)=>{
        setSearch(e.target.value)
      }} />

      <div className='crypto-container'>

      </div>

    </div>
  );
}

export default App;
