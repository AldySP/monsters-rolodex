import React from 'react'
// styles
import './card-list.styles.css';
// components
import Card from '../card/card.component';

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {
                monsters.map(monster => {
                    return(
                        <Card 
                            key={monster.id} 
                            monster={monster}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;