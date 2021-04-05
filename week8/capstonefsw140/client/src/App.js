import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "./Navbar"
import "./index.css"

function App() {
  const [reviews, setReviews] = useState([]);
  const getReviews = () => {

    axios.get("http://localhost:3000/reviews").then((res) => {
      setReviews(res.data)
    })
}

useEffect(() => {
    getReviews();
}, [reviews])


  return (

    <div className="reviews">
         <Navbar />
          {reviews.map((item) => {
       return (
           <div className="review">
          <h3>Title: {item.book_title}</h3>
          <h3>Review: {item.book_review}</h3>
          <h3>Rating: {item.book_rating}</h3>
          </div>
    )
})}
</div>
  
  )
}

export default App;
