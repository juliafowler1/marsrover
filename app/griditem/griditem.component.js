const gridItem = {
  templateUrl: "app/griditem/griditem.template.html",
  controller: [
    "roverFactory",
    function(roverFactory) {
      const vm = this;

      // comparing x, y values with currentX and currentY values, if true image is added to grid div
      vm.roverHere = function() {
        return vm.x == roverFactory.currentX && vm.y == roverFactory.currentY;
      };
    }
  ],

  // binding x and y from coordinates array in grid container
  bindings: {
    x: "<",
    y: "<"
  }
};

angular.module("app").component("gridItem", gridItem);
