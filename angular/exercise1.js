var myNum = 5;
var myString = "Hello Universe";
var anythingOne = "Hey";
anythingOne = 25;
var anythingTwo = "Hey";
anythingTwo = [1, 2, 3, 4];
var anythingThree = "Hey";
anythingThree = { x: 1, y: 2 };
// There are two ways of declaring an array type
var arrayNumbersOne = [1, 2, 3, 4, 5, 6];
var arrayNumbersTwo = [1, 2, 3, 4, 5, 6];
var myObj = { x: 5, y: 10 };
// function constructor
var MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
// This function will return nothing.
function myFunction() {
    console.log("Hello World");
}
