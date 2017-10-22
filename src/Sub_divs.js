import React from 'react'

export default function Subdiv(coords, colors) {
    let subdivs = [];
    for (var i = 0; i < coords.length; i++){
        subdivs.push(
            <rect x={coords[i].x} y={coords[i].y} width={coords[i].width} height={coords[i].height} stroke="black" fill='lightgrey' stroke-width="1" />
        )
    }
    return subdivs
}

/*export default function Subdiv({coords}) {
    let subdivs = [];
    for (var i = 0; i < coords.length; i++){
        subdivs.push(
            <div className='canvas'>   
            <svg width="148" height="210" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x={coords[i].x} y={coords[i].y} width={coords[i].width} height={coords[i].height} stroke="black" fill="lightgrey" stroke-width="1" />
            </svg>
            </div>
        )
    }
    return subdivs;
}*/