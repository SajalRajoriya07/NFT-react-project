import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'

const CollectionCard = ({id, name , traits }) => {
    return (
        <div className='collectionCard'>
            <img src='../assets/ape.png'/>
            <div className='details'></div>
            <div className='name'>
                {name}<div className='id'>.#{id}</div>
            </div>
            <div className='priceContainer'>
                <img src={weth} className='wethImage'/>
                <div className='price'>{traits[0]?.value}</div>
            </div>
            
        </div>
    )
}

export default CollectionCard