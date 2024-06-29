
// ## Problem 64:

// ### Explain what a callback function is and provide a simple example? 

const func1 = () => {
    console.log("World");
}

const func2 = () => {
    console.log("Hello");
    func1();
}
func2();


