import React from 'react'

export default function Subdiv(coords) {
    let subdivs = [];
    for (var i = 0; i < coords.length; i++){
        subdivs.push(
            <rect x={coords[i].x} y={coords[i].y} width={coords[i].width} height={coords[i].height} stroke="black" fill={coords[i].color} stroke-width="1" />
        )
    }
    return subdivs
}