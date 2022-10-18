// Lexical scope: định nghĩa scope của biến đó bởi vị trí của nó trong scope của chúng ta
let aNewNam = "Henry"; // global scope
function sayHello() {
    let message = "Hello"; // block scope
    console.log(`${message} ${aNewNam}`);
}

// closures: nhiều function được lồng vào nhau, cho phép chúng ta truy xuất từ function bên trong ra function bên ngoài
function sayHello2() { // parent function
    let message = "Hello"; // block scope
    function sayHi() { // child function
        console.log(message);
    }
    return sayHi;

}