const expect = require("chai").expect;
const sinon = require("sinon");

const MyClass = require("../src/myClass");
const myObj = new MyClass();

describe("Test suite", () => {
    it("test the add method", () => {
        expect(myObj.add(1, 2)).to.be.equal(3);
    });

    it("spy the add method", () => {
        const spy = sinon.spy(myObj, "add");
        let arg1 = 10, arg2 = 20;
        myObj.callAnotherFn(arg1, arg2);
        sinon.assert.calledOnce(spy);
    });
})