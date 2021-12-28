const expect = require("chai").expect;
const sinon = require("sinon");

const MyClass = require("../src/myClass");
const myObj = new MyClass();

describe.skip("Test suite", () => {
    it("test the add method", () => {
        expect(myObj.add(1, 2)).to.be.equal(3);
    });

    it("spy the add method", () => {
        const spy = sinon.spy(myObj, "add");
        let arg1 = 10, arg2 = 20;
        myObj.callAnotherFn(arg1, arg2);
        // sinon.assert.calledOnce(spy);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(10, 20)).to.be.true;
    });

    it("spy the callback method", () => {
        const callback = sinon.spy();
        myObj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true;
    });

    it("mock the sayHello method", () => {
        const mock = sinon.mock(myObj);
        const expectation = mock.expects("sayHello");
        expectation.exactly(1);
        expectation.withArgs("Hello World");
        myObj.callAnotherFn(10, 20);
        mock.verify();
    });
});

describe("Test suite for stub", () => {
    it("Stub the add method", () => {
       const stub = sinon.stub(myObj, "add");
       stub.withArgs(10, 20).returns(100);
       expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
    });
});
