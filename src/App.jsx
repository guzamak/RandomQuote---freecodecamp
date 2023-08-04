import { useEffect, useState } from 'react'
import image from "./assets/1294187.png"
import './App.css'

function App() {

  const [quote,setQuote] = useState()
  const [error,setError] = useState()

  const fetchapi = async() => {
    try{
      const newQourtefetch = await fetch("https://api.api-ninjas.com/v1/quotes",{
      method: "GET",
      headers: {'x-api-key': "/wHl8MOkfG1Ox1W1ql/wOQ==AvJ09JEr4c84iPbx"}}
      )
      const newQuorte = await newQourtefetch.json() //await json
      setQuote(newQuorte)
      }catch(e){
          console.log(e)
      }
  }

  useEffect(() =>{fetchapi()},[])




  return (
    <>
      <div id="quote-box">
        <img src={image} id="image"/>
        {quote?
        // <> return ได้เเค่ tag ใช้ tag <> คุมหมด
        <> 
        <div id="text">
          "{quote[0].quote}"
        </div>
        <div id="author">
          {quote[0].author}
        </div>
        <div id="control">
          <button type="button" id="new-quote"onClick={fetchapi}>random</button>
          <a href= {`https://twitter.com/intent/tweet?text=${quote[0].quote}`} id="tweet-quote" target='_blank'>twitter</a>
        </div>
        </>:null}

      </div>
    </>
  )
}

export default App
