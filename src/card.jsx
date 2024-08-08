import React, { useState } from 'react';
import data from './data.jsx';
import './card.css';


function Card() {
    const [readStates, setReadStates] = useState(data.map(() => false));
    const toggleRead = (index) => {
        const newReadStates = [...readStates];
        newReadStates[index] = !newReadStates[index];
        setReadStates(newReadStates);
    };
    const [cards, setcards] = useState(data);
    const removeCard = (targetindex) => {
        const newdata = cards.filter((item, index) => index !== targetindex);
        setcards(newdata);
        setReadStates(prevReadStates => prevReadStates.filter((_, index) => index !== targetindex));
    }
    return (
        <>
            <div className='parent'>
                {cards.map((item, index) => {
                    const { url, ttl, des } = item;
                    const isRead = readStates[index];
                    return (
                        <div className='card' key={index}>
                            <img src={url} alt="unable to load" />
                            <h2>{ttl}</h2>
                            <p className='des' onClick={() => toggleRead(index)}>
                                {isRead ? des : des.slice(0, 40)}
                                <span className='readmore'>{isRead ? " show less" : "...read more"}</span>
                            </p>
                            <div className='btn-center'><button className='btn' onClick={()=>removeCard(index)}>Not Interested</button></div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Card;
