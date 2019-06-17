var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

var grid = [
  ["R", null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
  ];
  console.log(grid);


  function turnLeft(rover){
    console.log("turnLeft was called!");
  

  var changeDirection;

  switch (rover.direction) {
    case "N":
      changeDirection = "W";
    break;

    case "E":
      changeDirection = "N"
    break;

    case "S":
      changeDirection = "E"
    break;

    case "W":
      changeDirection = "S"
    break;

    default:
      null
    break;
  }
  rover.direction = changeDirection;
  console.log(`Change direction is ${changeDirection}`);
}

  function turnRight(rover){
    console.log("turnRight was called!");
  

  switch (rover.direction) {
    case "N":
      changeDirection = "E";
    break;

    case "E":
      changeDirection = "S"
    break;

    case "S":
      changeDirection = "W"
    break;

    case "W":
      changeDirection = "N"
    break;

    default:
      null
    break;
  }
  rover.direction = changeDirection;
  console.log(`Change direction is ${changeDirection}`);
}

  var changePlacement;
  
  function moveForward(rover){
    console.log("moveForward was called") 
      switch (rover.direction) {
        case "N":
          changePlacementY--;
          break;
        case "S":
          changePlacementY++;
          break;
        case "E":
          changePlacementX++;
        break;
        case "W":
          changePlacementX--;
        break;
    }
    rover.direction = changePlacement;
    console.log(`Change placement is ${changePlacement}`);
  }
  
  function moveBackwards(rover){
    console.log("moveBackward was called") 
      switch (rover.direction) {
        case "N":
          changeplacementY++;
          break;
        case "S":
          changeplacementY--;
          break;
        case "E":
          changeplacementX--;
        break;
        case "W":
          changeplacementX++;
        break;
    }
    rover.direction = changePlacement;
    console.log(`Change placement is ${changePlacement}`);
  }

function commands(list) {
  for(var i = 0; i < list.length; i++) {
    switch(list[i]) {
      case "R":
        turnRight(rover);
      break;
      case "L":
        turnLeft(rover);
      break;
      case "F":
        moveForward(rover);
      break;
      case"B":
        moveBackwards(rover);
      break;
      default:
        console.log ("Cannot fulfill command.")
    }
    rover.travelLog.push(" " + change.placementX + ":" + change.placementY + '-' + "direction: " + rover.direction);
  }
  console.log(`TravelLog is ${rover.travelLog}`);
}
