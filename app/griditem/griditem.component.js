const gridItem = {
    templateUrl: "app/griditem/griditem.template.html",
    controller: [function(){
        const vm = this;
    }],
    bindings: {
        x: "<",
        currentX: "<",
        selected: "<"
    }
}

angular.module("app").component("gridItem", gridItem)