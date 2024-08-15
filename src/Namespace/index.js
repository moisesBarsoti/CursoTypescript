var MyNameSpace;
(function (MyNameSpace) {
    console.log(11111);
    var PeopleFromNamespace = /** @class */ (function () {
        function PeopleFromNamespace(name) {
            this.name = name;
        }
        return PeopleFromNamespace;
    }());
    MyNameSpace.PeopleFromNamespace = PeopleFromNamespace;
    var people = new PeopleFromNamespace('Moisés');
    console.log(people);
})(MyNameSpace || (MyNameSpace = {}));
var people2 = new MyNameSpace.PeopleFromNamespace('Moisés');
console.log(people2);
/// <reference path="modulo/aula1-namespace.ts" />
console.log(MyNameSpace);
