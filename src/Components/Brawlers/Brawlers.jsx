import React from 'react'
import './brawlers.css'
import ExampleBrawlers from './exampleBrawlers'

const Brawlers = () => {


  return (
    <section>
      <h1 className='title'><b>All Brawlers</b></h1>

      <div style={{ color: 'white' }} className='brawlers'>
        {ExampleBrawlers.map((brawler, index) =>
          <section key={index} className={`brawler ${brawler.rarity.replace(/\s+/g, '-')}`}>
            <img src={brawler.img} alt="" className='brawler-img' />
            <b>{brawler.name}</b>
          </section>
        )}
      </div>

    </section>

  )
}

export default Brawlers