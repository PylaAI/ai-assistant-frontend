import React from 'react'
import './brawlers.css'
import ExampleBrawlers from './exampleBrawlers'
import { Link } from 'react-router-dom';
import Brawler from './Brawler';



const Brawlers = () => {


  return (
    <section>
      <h1 className='title'><b>All Brawlers</b></h1>

      <div style={{ color: 'white' }} className='brawlers'>
        {ExampleBrawlers.map((brawler, index) =>
          <section key={index} className={`brawler ${brawler.rarity.replace(/\s+/g, '-')}`}>
            <Link to={`${brawler.name}`} className='link'>
              <img src={brawler.img} alt="" className='brawler-img' />
            </Link>
            <b>{brawler.name}</b>
          </section>
        )}
      </div>

    </section>

  )
}

export default Brawlers