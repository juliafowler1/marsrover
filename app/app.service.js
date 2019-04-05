const roverFactory = function() {
    const service = {
        currentX: 0,
        currentY: 0,
        currentDirection: "N",
        setXY(valueX, valueY) {
            this.currentX = valueX;
            this.currentY = valueY;
            console.log(this.currentX, this.currentY)
        },
        setDirection(direction) {
            this.currentDirection = direction;
        }
        
    }
    return service;

}

// setXY updated based on user input




angular.module("app").factory("roverFactory", roverFactory)