import React from 'react';
import { useParams } from "react-router-dom";
import ExampleBrawlers from './exampleBrawlers';
import './brawlers.css';

const Brawler = () => {

    const { name } = useParams()
    const brawler = ExampleBrawlers.find(item => item.name === name);

  
    

    return (
        <div style={{ color: 'white' }}>
            <h2>{brawler.name}</h2>
            <img src={brawler.img} alt="" />
        </div>
    )
}

export default Brawler