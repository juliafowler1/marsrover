const gridItem = {
    templateUrl: "app/griditem/griditem.template.html",
    controller: ["roverFactory", function(roverFactory){
        const vm = this;
        // sets current x,y on ng-click
        vm.handleClick = function() {
            roverFactory.setXY(vm.x, vm.y)
        }
        // checking if service x,y is equal to items x,y
        vm.roverHere = function() {
            return vm.x == roverFactory.currentX && vm.y == roverFactory.currentY;
        }
    }],
    bindings: {
        x: "<",
        y: "<"
    }

}

angular.module("app").component("gridItem", gridItem)