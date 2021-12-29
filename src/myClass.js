class MyClass {
    constructor () {
        console.log("initiate");
    }

    sayHello(str) {
        console.log(str);
    }

    add(arg1, arg2) {
        if(1){
        var result;
        result = arg1 + arg2;
        return result;
        } else {
            return 2;
        }
    }

    callAnotherFn(arg1, arg2) {
        this.sayHello("Hello World");
        var result = this.add(arg1, arg2);
        return result;
    }

    callTheCallback(callback) {
        callback();
    }

    testPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(3)
            }, 1000);
        }).then((result) => {
            return result * 2;
        });
    }
}

module.exports = MyClass;