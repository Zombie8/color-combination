//===========//
// FUNCTIONS //
//===========//

function SolveChallenge(colorToFind, endColor, availableChips, usedChips) {

    if(availableChips.length === 0)
    {
        return true;
    }

    if(availableChips.length === 1)
    {
        // if((availableChips[0].value1 === colorToFind && availableChips[0].value2 === endColor))
        // {
        //     usedChips.push({value1: availableChips[i].value1, value2: availableChips[i].value2});
        // }
        if((availableChips[0].value1 !== endColor && availableChips[0].value2 !== endColor))
        {
            return false;
        }
    }

    for(var i = 0; i < availableChips.length; i++)
    {
        // CHECK #1
        if (availableChips[i].value1 === colorToFind) {
            usedChips.push({value1: availableChips[i].value1, value2: availableChips[i].value2});
            availableChips.splice(i, 1);
            break;
        }

        // CHECK #2 (INVERSE)
        if(availableChips[i].value2 === colorToFind) {
            usedChips.push({value1: availableChips[i].value2, value2: availableChips[i].value1});
            availableChips.splice(i, 1);
            break;
        }

        if(availableChips.length === 1)
        {
            return false;
        }
    }

    return SolveChallenge(usedChips[usedChips.length - 1].value2, endColor, availableChips, usedChips);
}

var usedChips = [];

//==============//
// TEST CASE #1 //
//==============//
// var startColor = 'Blue';
// var endColor = 'Green';
// var availableChips = [
//     { value1 : 'Blue',   value2 :'Yellow'},
//     { value1 : 'Yellow', value2 :'Red'},
//     { value1 : 'Red',    value2 :'Green'},
// ];

//==============//
// TEST CASE #2 //
//==============//
// var startColor = 'Blue';
// var endColor = 'Green';
// var availableChips = [
//     { value1: 'Blue', value2: 'Yellow'},
//     { value1: 'Red', value2: 'Orange'},
//     { value1: 'Red', value2: 'Green'},
//     { value1: 'Yellow', value2: 'Red'},
//     { value1: 'Orange', value2: 'Purple'},
// ];

//==============//
// TEST CASE #3 //
//==============//
// var startColor = 'Blue';
// var endColor = 'Green';
// var availableChips = [
//     { value1: 'Blue', value2: 'Yellow'},
//     { value1: 'Red', value2: 'Orange'},
//     { value1: 'Red', value2: 'Green'},
//     { value1: 'Yellow', value2: 'Red'},
//     { value1: 'Orange', value2: 'Red'},
// ];

//==============//
// TEST CASE #4 //
//==============//
var startColor = 'Blue';
var endColor = 'Green';
var availableChips = [
    { value1: 'Blue', value2: 'Green'},
    { value1: 'Blue', value2: 'Yellow'},
    { value1: 'Green', value2: 'Yellow'},
    { value1: 'Orange', value2: 'Red'},
    { value1: 'Red', value2: 'Green'},
    { value1: 'Red', value2: 'Orange'},
    { value1: 'Yellow', value2: 'Blue'},
    { value1: 'Yellow', value2: 'Red'},
];

//==========//
// RUN CODE //
//==========//

var isCompleted = SolveChallenge(startColor, endColor, availableChips, usedChips);

if (isCompleted) {
    console.log('Master Panel Unlocked!');

    usedChips.forEach(function(element){
        console.log(element.value1 + ', ' + element.value2);
    })

} else {
    console.log('Cannot unlock master panel');
}
