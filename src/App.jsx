import './App.css'
import starIcon from './assets/images/icon-star.svg'
import plusIcon from './assets/images/icon-plus.svg'
import minusIcon from './assets/images/icon-minus.svg'
import Data from "./data"
import { useState } from 'react';


function App() {
  const [items, setItems] = useState(Data);

  function handleChange(id) {
    setItems(prevItems => prevItems.map(item => (
      item.id === id ? {...item, on: !item.on} : item
    )))
  }

  return (
    <main className='container'>
      <div className="card">
        <div className="title">
          <img src={starIcon} alt="Star icon" className="icon-star" />
          <h1 className="title-text">FAQs</h1>
        </div>
        {
          items.map(item => (
            <div key={item.id} className="item">
              <div onClick={() => handleChange(item.id)}  className="display-answer">
                <p className="question">{item.question}</p>
                <img src={item.on ? minusIcon : plusIcon} alt="Icon" className="icon" />
              </div>
              <p className="answer" style={item.on ? null : {display: "none"} }>
                {item.answer}
              </p>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default App
