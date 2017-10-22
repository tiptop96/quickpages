let full = [{x: '0', y:'0', width: '100%', height: '100%'}]

let squared = [
    [{x: '0', y:'50%', width: '100%', height: '50%'}],
    [{x: '50%', y:'0', width: '50%', height: '100%'}],

    [{x: '0', y:'0', width: '50%', height: '50%'}],
    [{x: '0', y:'50%', width: '50%', height: '50%'}],
    [{x: '50%', y:'0', width: '50%', height: '50%'}],
    [{x: '50%', y:'50%', width: '50%', height: '50%'}],
    [{x: '50%', y:'50%', width: '50%', height: '50%'}, {x: '0', y:'50%', width: '50%', height: '50%'}], 
    [{x: '50%', y:'0%', width: '50%', height: '50%'}, {x: '0', y:'50%', width: '50%', height: '50%'}],
    [{x: '50%', y:'0', width: '50%', height: '50%'}, {x: '0', y:'0', width: '50%', height: '50%'}],    
]

let oneCol = [
    [{x: '0', y:'0%', width: '100%', height: '50%'}, {x: '0', y:'50%', width: '100%', height: '50%'}],
    [{x: '0', y:'0%', width: '100%', height: '33%'}, {x: '0', y:'33%', width: '100%', height: '67%'}],
    [{x: '0', y:'0%', width: '100%', height: '67%'}, {x: '0', y:'67%', width: '100%', height: '33%'}],
    [{x: '0', y:'0%', width: '100%', height: '33%'}, {x: '0', y:'33%', width: '100%', height: '34%'},{x: '0', y:'67%', width: '100%', height: '33%'}],

    [{x: '0', y:'0%', width: '100%', height: '25%'},{x: '0', y:'25%', width: '100%', height: '75%'}],
    [{x: '0', y:'0%', width: '100%', height: '75%'}, {x: '0', y:'75%', width: '100%', height: '25%'}],
    [{x: '0', y:'0%', width: '100%', height: '25%'}, {x: '0', y:'25%', width: '100%', height: '50%'},{x: '0', y:'75%', width: '100%', height: '25%'}],
    [{x: '0', y:'0%', width: '100%', height: '25%'}, {x: '0', y:'25%', width: '100%', height: '25%'}, {x: '0', y:'50%', width: '100%', height: '25%'}, {x: '0', y:'75%', width: '100%', height: '25%'}],

    [{x: '0', y:'0%', width: '100%', height: '25%'}, {x: '0', y:'25%', width: '100%', height: '25%'}, {x: '0', y:'50%', width: '100%', height: '50%'}],
    [{x: '0', y:'0%', width: '100%', height: '50%'}, {x: '0', y:'50%', width: '100%', height: '25%'}, {x: '0', y:'75%', width: '100%', height: '25%'}],
    [{x: '0', y:'0%', width: '100%', height: '20%'}, {x: '0', y:'20%', width: '100%', height: '20%'}, {x: '0', y:'40%', width: '100%', height: '20%'}, {x: '0', y:'60%', width: '100%', height: '20%'}, {x: '0', y:'80%', width: '100%', height: '20%'}],
    [{x: '0', y:'0%', width: '100%', height: '15%'}, {x: '0', y:'15%', width: '100%', height: '70%'}, {x: '0', y:'85%', width: '100%', height: '15%'}],

    [{x: '0', y:'0%', width: '100%', height: '15%'}, {x: '0', y:'15%', width: '100%', height: '85%'}],
    [{x: '0', y:'0%', width: '100%', height: '85%'}, {x: '0', y:'85%', width: '100%', height: '15%'}],
    [{}],
    [{}],
]

//Coordinate system for diffrent pages templates.

export default (index) => {
    let type = [full, oneCol, squared]
    return type[index]
}