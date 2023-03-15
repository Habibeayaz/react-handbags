import React from 'react';

function Tile({img, imgTitle, title, children}) {
    return (
        <section>
        <img src={img} alt={imgTitle}/>
            <h2>{title}</h2>
            {children}
        </section>
        )
    }


export default Tile;