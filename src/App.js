import React, { useState } from 'react';
import data from './datas/data01';
import './styles/app.css'
 
function App() {
  

  const[holidays,setHolidays] = useState(data);

  const silstate = () => {
    setHolidays([])
  }
    return (
      <div className="App">  
      <main>
        <section className='container'>
          <h3>National Holidays Dates</h3>
          {holidays.map((holiday)=> {
            return(
              <div className='holiday' key={holiday.id}>
                <img src={holiday.img}></img>
                <div>
                <p>{holiday.title}</p>
                <p>{holiday.date}</p></div>                             
              </div>
            )
          })}
          <button onClick={silstate}>Clear All</button>
        </section>
      </main>
      </div>
    );
  }
export default App;
