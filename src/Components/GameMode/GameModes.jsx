import React, { useState, useEffect } from 'react'
import './gameMaps.css'
import { getMaps } from './getMaps';


const GameMode = () => {
    const [gameModes, setGameModes] = useState(null);
 

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMaps();
            if (data) {
                setGameModes(data);
            }
        };

        fetchData();
    }, [])


    return (
        <div className='page-container'>
            {gameModes ?
                // to another component
                (
                    gameModes.map((modeObj, index) => {
                        const modeName = Object.keys(modeObj)[0];
                        const mode = modeObj[modeName];
                        const maps = mode.maps;

                        return (
                            <div key={index} className='mode-container'>
                                <section className='mode-info'>
                                    <img src={mode.iconUrl} alt={`${modeName} icon`} width={'30px'} />
                                    <p>{modeName}</p>
                                    <samp>{`(${maps.length})`}</samp>
                                </section>
                                <section className='maps-container'>
                                    {maps.map((pic, i) => (
                                        <div className='picture' key={i} >
                                            <img src={pic.imgUrl} alt="" width={'220px'} />
                                            <span className='map-name'>{pic.name}</span>
                                        </div>
                                    ))}
                                </section>
                            </div>
                        );
                    })
                )

                : (
                    <p style={{ textAlign: 'center' }}>Loading game modes...</p>
                )}
        </div>
    );

};


export default GameMode
