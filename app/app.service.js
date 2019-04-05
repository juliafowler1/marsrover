const roverFactory = function () {
    const service = {
        currentX: 0,
        currentY: 0,
        currentDirection: "N",
        setDirection(direction) {
            this.currentDirection = direction;
        }
    }
    return service;
}


angular.module("app").factory("roverFactory", roverFactory)