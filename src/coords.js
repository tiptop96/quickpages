const full = [
    [{x: '0', y:'0', width: '100%', height: '100%', color: 'lightgrey'}]
]

const squared = [
    [{x: '0', y:'50%', width: '100%', height: '50%', color: 'lightgrey'}],
    [{x: '50%', y:'0', width: '50%', height: '100%', color: 'lightgrey'}],

    [{x: '0', y:'0', width: '50%', height: '50%', color: 'lightgrey'}],
    [{x: '0', y:'50%', width: '50%', height: '50%', color: 'lightgrey'}],
    [{x: '50%', y:'0', width: '50%', height: '50%', color: 'lightgrey'}],
    [{x: '50%', y:'50%', width: '50%', height: '50%', color: 'lightgrey'}],
    [{x: '50%', y:'50%', width: '50%', height: '50%', color: 'lightgrey'}, {x: '0', y:'50%', width: '50%', height: '50%', color: 'lightgrey'}], 
    [{x: '50%', y:'0%', width: '50%', height: '50%', color: 'lightgrey'}, {x: '0', y:'50%', width: '50%', height: '50%', color: 'lightgrey'}],
    [{x: '50%', y:'0', width: '50%', height: '50%', color: 'lightgrey'}, {x: '0', y:'0', width: '50%', height: '50%', color: 'lightgrey'}],    
]

const oneCol = [
    [{x: '0', y:'0%', width: '100%', height: '50%', color: 'lightgrey'}, {x: '0', y:'50%', width: '100%', height: '50%', color: 'lightgrey'}],
    [{x: '0', y:'0%', width: '100%', height: '33%', color: 'lightgrey'}, {x: '0', y:'33%', width: '100%', height: '67%', color: 'lightgrey'}],
    [{x: '0', y:'0%', width: '100%', height: '67%', color: 'lightgrey'}, {x: '0', y:'67%', width: '100%', height: '33%', color: 'lightgrey'}],
    [{x: '0', y:'0%', width: '100%', height: '33%', color: 'lightgrey'}, {x: '0', y:'33%', width: '100%', height: '34%', color: 'lightgrey'},{x: '0', y:'67%', width: '100%', height: '33%', color: 'lightgrey'}],

    [{x: '0', y:'0%', width: '100%', height: '25%', color: 'lightgrey'},{x: '0', y:'25%', width: '100%', height: '75%', color: 'lightgrey'}],
    [{x: '0', y:'0%', width: '100%', height: '75%', color: 'lightgrey'}, {x: '0', y:'75%', width: '100%', height: '25%', color: 'lightgrey'}],
    [{x: '0', y:'0%', width: '100%', height: '25%', color: 'lightgrey'}, {x: '0', y:'25%', width: '100%', height: '50%', color: 'lightgrey'},{x: '0', y:'75%', width: '100%', height: '25%', color: 'lightgrey'}],
    [{x: '0', y:'0%', width: '100%', height: '25%', color: 'lightgrey'}, {x: '0', y:'25%', width: '100%', height: '25%', color: 'lightgrey'}, {x: '0', y:'50%', width: '100%', height: '25%', color: 'lightgrey'}, {x: '0', y:'75%', width: '100%', height: '25%', color: 'lightgrey'}],

    [{x: '0', y:'0%', width: '100%', height: '25%', color: 'lightgrey'}, {x: '0', y:'25%', width: '100%', height: '25%', color: 'lightgrey'}, {x: '0', y:'50%', width: '100%', height: '50%', color: 'lightgrey'}],
    [{x: '0', y:'0%', width: '100%', height: '50%', color: 'lightgrey'}, {x: '0', y:'50%', width: '100%', height: '25%', color: 'lightgrey'}, {x: '0', y:'75%', width: '100%', height: '25%', color: 'lightgrey'}],
    [{x: '0', y:'0%', width: '100%', height: '20%', color: 'lightgrey'}, {x: '0', y:'20%', width: '100%', height: '20%', color: 'lightgrey'}, {x: '0', y:'40%', width: '100%', height: '20%', color: 'lightgrey'}, {x: '0', y:'60%', width: '100%', height: '20%', color: 'lightgrey'}, {x: '0', y:'80%', width: '100%', height: '20%', color: 'lightgrey'}],
    [{x: '0', y:'0%', width: '100%', height: '15%', color: 'lightgrey'}, {x: '0', y:'15%', width: '100%', height: '70%', color: 'lightgrey'}, {x: '0', y:'85%', width: '100%', height: '15%', color: 'lightgrey'}],

    [{x: '0', y:'0%', width: '100%', height: '15%', color: 'lightgrey'}, {x: '0', y:'15%', width: '100%', height: '85%', color: 'lightgrey'}],
    [{x: '0', y:'0%', width: '100%', height: '85%', color: 'lightgrey'}, {x: '0', y:'85%', width: '100%', height: '15%', color: 'lightgrey'}],
    [{}],
    [{}],
]

//Coordinate system for diffrent pages templates.

export default () => {
    const all = [full, oneCol, squared]
    return all;
}