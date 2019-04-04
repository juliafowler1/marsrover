const GRIDSIZE = 4;
const gridContainer = {
    templateUrl:"app/gridcontainer/gridcontainer.template.html",
    controller: [function(){
        
        const vm = this;
        vm.currentX = 1;
        vm.currentY = 2;
        vm.coordinates = []
        for (let i = 0; i < GRIDSIZE; i++) {
            for (let j = 0; j < GRIDSIZE; j++) {
                vm.coordinates.push({x: i, y: j})
            }
        }

    }]

}





angular.module("app").component("gridContainer", gridContainer);