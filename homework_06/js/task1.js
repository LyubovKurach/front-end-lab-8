var a = parseFloat (prompt("Please, enter the length of the 1st side"));
var b = parseFloat (prompt("Please, enter the length of the 2nd side"));
var c = parseFloat (prompt("Please, enter the length of the 3rd side"));

var type;
var square;
var incorrect;


/*types*/
if (a==b && b==c && c==b){
type = "Equilateral triangle"; 
}

if (a==b || b==c || c==b) {
type = "Isosceles triangle";
}

if (a!==b && b!==c && c!==b){
type = "Scalene triangle"; 
}

if ( a*a + b*b == c*c || b*b + c*c == a*a || c*c + a*a == b*b ) {
type = "Right triangle";
}

console.log(type);

/*square*/
sguare = (p=(a+b+c)/2);

console.log (sguare);

/*incorrect*/
if (a <= 0 || b <= 0 || c <= 0 || incorrect <= 0 || isNaN(incorrect)){
incorrect = "incorrect data"
}

console.log(incorrect);

console.log("Type of triangle is " + type + "and square is " + square);
