function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFn(){
        console.log("named function");
    ;}
}

function returnsAnAnonymousFunction() {
    return () => console.log("anonymous function");
}
