const GRIDSIZE = 4;
const DIRECTIONS = ["N", "E", "S", "W"];

const gridContainer = {
    templateUrl: "app/gridcontainer/gridcontainer.template.html",
    controller: [
        "roverFactory",
        function (roverFactory) {
            const vm = this;
            vm.command = "";
            vm.errorMessage = "";
            vm.coordinates = [];

            // loop through GRIDSIZE to create x,y coordinates, push to coordinates array
            for (let i = 0; i < GRIDSIZE; i++) {
                for (let j = 0; j < GRIDSIZE; j++) {
                    vm.coordinates.push({ x: j, y: i });
                }
            }

            // submit command from input in gridcontainer.template.html
            vm.submitCommand = function () {
                for (const letter of vm.command) {
                    switch (letter) {
                        case "F":
                        case "B": {
                            vm.moveRover(letter);
                            break;
                        }
                        case "L":
                        case "R": {
                            vm.rotateRover(letter);
                        }
                        default: {
                            vm.errorMessage = "Invalid input!";
                        }
                    }
                }
            };
            vm.moveRover = function (command) {
                if (command == "F") {
                    switch (roverFactory.currentDirection) {
                        case "N": {
                            if (roverFactory.currentY == 0) {
                                roverFactory.currentY = 3;
                            } else {
                                roverFactory.currentY--;
                            }
                            break;
                        }
                        case "E": {
                            if (roverFactory.currentX == 3) {
                                roverFactory.currentX = 0;
                            } else {
                                roverFactory.currentX++;
                            }
                            break;
                        }
                        case "S": {
                            if (roverFactory.currentY == 3) {
                                roverFactory.currentY = 0;
                            } else {
                                roverFactory.currentY++;
                            }
                            break;
                        }
                        case "W": {
                            if (roverFactory.currentX == 0) {
                                roverFactory.currentX = 3;
                            } else {
                                roverFactory.currentX--;
                            }
                            break;
                        }
                    }
                } else if (command == "B") {
                    switch (roverFactory.currentDirection) {
                        case "N": {
                            if (roverFactory.currentY == 3) {
                                roverFactory.currentY = 0;
                            } else {
                                roverFactory.currentY++;
                            }
                            break;
                        }
                        case "E": {
                            if (roverFactory.currentX == 0) {
                                roverFactory.currentX = 3;
                            } else {
                                roverFactory.currentX--;
                            }
                            break;
                        }
                        case "S": {
                            if (roverFactory.currentY == 0) {
                                roverFactory.currentY = 3;
                            } else {
                                roverFactory.currentY--;
                            }
                            break;
                        }
                        case "W": {
                            if (roverFactory.currentX == 3) {
                                roverFactory.currentX = 0;
                            } else {
                                roverFactory.currentX++;
                            }
                            break;
                        }
                    }
                }
            };
            // indexOf DIRECTIONS array takes parameter of roverFactory's hard coded currentDirection
            vm.rotateRover = function (command) {
                const directionIndex = DIRECTIONS.indexOf(
                    roverFactory.currentDirection
                );
                if (command == "L") {
                    if (directionIndex == 0) {
                        roverFactory.currentDirection = DIRECTIONS[3];
                    } else {
                        roverFactory.currentDirection = DIRECTIONS[directionIndex - 1];
                    }
                } else {
                    if (directionIndex == 3) {
                        roverFactory.currentDirection = DIRECTIONS[0];
                    } else {
                        roverFactory.currentDirection = DIRECTIONS[directionIndex + 1];
                    }
                }
            };
        }
    ]
};

angular.module("app").component("gridContainer", gridContainer);
