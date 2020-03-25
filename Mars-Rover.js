// Rover Object Goes Here
// ======================
let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [[0, 0]]
  };
  
  function boundaries(rover) {
    if (rover.y < 0 || rover.y > 10) {
      console.log("Nah you don't want to go that way Kylo Ren is throwing a fit");
    }
    if (rover.x < 0 || rover.x > 10) {
      console.log("Welp my frien that is one step too far! turn around!");
    }
  }
  
  function turnLeft(rover) {
    console.log("turnLeft was called!");
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "N";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "W":
        rover.direction = "S";
        break;
    }
    console.log(`The new direction of the Rover is ${rover.direction}`);
  }
  
  function turnRight(rover) {
    console.log("turnRight was called!");
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "W";
      case "W":
        rover.direction = "N";
    }
    console.log(`The new direction of the Rover is ${rover.direction}`);
  }
  
  function moveForward(rover) {
    console.log("moveForward was called");
    switch (rover.direction) {
      case "N":
        rover.y -= 1;
        break;
      case "E":
        rover.x += 1;
        break;
      case "S":
        rover.y += 1;
        break;
      case "W":
        rover.x -= 1;
        break;
    }
    if (rover.x < 0 || rover.x > 10 || rover.y < 0 || rover.y > 10) {
      boundaries(rover);
    } else {
      console.log(`The new position of the rover is ${rover.x} & ${rover.y}`);
      rover.travelLog.push([rover.x, rover.y]);
    }
  }
  
  function moveBackwards(rover) {
    console.log("moveBackwards was called");
    switch (rover.direction) {
      case "N":
        rover.y += 1;
        break;
      case "E":
        rover.x -= 1;
        break;
      case "S":
        rover.y -= 1;
        break;
      case "W":
        rover.x += 1;
        break;
    }
    if (rover.x < 0 || rover.x > 10 || rover.y < 0 || rover.y > 10) {
      boundaries(rover);
    } else {
      console.log(`The new position of the rover is ${rover.x} & ${rover.y}`);
      rover.travelLog.push([rover.x, rover.y]);
    }
  }
  
  let command = ''
  function comm(command) {
      for (let i = 0; i < command.length; i++) {
          switch(command[i]) {
              case 'f':
                  moveForward(rover);
                  break;
              case 'b':
                  moveBackwards(rover);
                  break;
              case 'l':
                  turnLeft(rover);
                  break;
              case 'r':
                  turnRight(rover);
                  break;
              default: continue;
              }         
      }
  }
  