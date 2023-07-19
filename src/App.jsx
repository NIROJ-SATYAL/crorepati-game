import { useState ,useEffect } from 'react';
import Trivria from './Components/trivria';
import dataone from'./data'
import datatwo from './data1'
import './app.css'
import Timer from './Components/Timer';
import User from './Components/User';
function App() {
  const moneylist=[
    { id: 1, amount: "$100" },
    { id: 2, amount: "$200" },
    { id: 3, amount: "$300" },
    { id: 4, amount: "$400" },
    { id: 5, amount: "$1000" },
    { id: 6, amount: "$2000" },
    { id: 7, amount: "$4000" },
    { id: 8, amount: "$8000" },
    { id: 9, amount: "$16000" }, 
    { id: 10, amount: "$32000" },
    { id: 11, amount: "$64000" },
    { id: 12, amount: "$125000" },
    { id: 13, amount: "$250000" },
    { id: 14, amount: "$500000" },
    { id: 15, amount: "$1000000" }].reverse()
  const [itemnum,setItemnum]=useState(1)
  const [timeout ,setTimeout]=useState(false)
  const [amount,setAmount]=useState("$0")
  const [username,setUsername]=useState(null)
  const [isRunning, setIsRunning] = useState(true);
  const [level,setLevel]=useState("")
  useEffect(()=>{
    itemnum>1 &&
    setAmount(moneylist.find((item)=>item.id=== itemnum-1 )?.amount)
  },[moneylist,itemnum])

  const [data,setData]=useState(null)

  useEffect(() => {
    if (level === "easy") {
      setData(dataone);
    } else if (level === "hard") {
      setData(datatwo);
    }
  }, [level]);
  return (
   
    <div className="app">
      {username ? (
        <>
          <div className="main">

            {timeout ? (<div className="endtext">
              <h1>{`Congratulation ${username}`}</h1>
              <h2>{`you earned ${amount}`}</h2>
            </div>) : (
              <>
                <div className="top">
                    <div className="timer">{data &&<Timer setTime={setTimeout} itemnum={itemnum} isRunning={isRunning} setIsRunning={setIsRunning} level={level}/>}</div>
                </div>
                  <div className="buttom"><Trivria setIsRunning={setIsRunning} setTime={setTimeout} data={data} itemnum={itemnum} setItemnum={setItemnum} /></div>
              </>
            )}



          </div>



          <div className="money">
            <ul className="money-list">
              {moneylist.map((item) => {
                return (<li className={itemnum === item.id ? "money-item active" : "money-item"}>
                  <span className="moneyitemnum">{item.id}</span>
                  <span className="money">{item.amount}</span>
                </li>)
              })}


            </ul>

          </div>
        </>
      ) : <User setUsername={setUsername} setLevel={setLevel} level={level} />}
      
    </div>
    
  );
}

export default App;
