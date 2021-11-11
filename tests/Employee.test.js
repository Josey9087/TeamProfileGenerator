const { describe, it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee"); 

//Test for Employee class
describe('Employee', () => {
    describe("Constructor ", () => {
        it("Creates a new Employee", () => {
            const Employeetest = new Employee();
            expect(typeof Employeetest).toBe("object");
        });

        describe("Name", () => {
            it('Should return the employee Name', () => {
                expect(new Employee('Jose').name).toEqual('Jose')
            })
        });

        describe("ID", () => {
            it('Should return the employee ID', () => {
                expect(new Employee('Jose', 5).id).toEqual(5)
            })
        });

        describe("Email", () => {
            it('Should return the employee Email', () => {
                expect(new Employee('Jose', 5, 'JY@gmail.com').email).toEqual('JY@gmail.com')
            })
        });
    })
    describe("getName", () => {
        it('Should return the employee Name', () => {
            expect(new Employee('Jose', 5, 'JY@gmail.com').getName()).toEqual('Jose')
        })
    });

    describe("getID", () => {
        it('Should return the employee ID', () => {
            expect(new Employee('Jose', 5, 'JY@gmail.com').getId()).toEqual(5)
        })
    });

    describe("getEmail", () => {
        it('Should return the employee Email', () => {
            expect(new Employee('Jose', 5, 'JY@gmail.com').getEmail()).toEqual('JY@gmail.com')
        })
    });
    describe("getRole", () => {
        it('Should return the employee role', () => {
            expect(new Employee('Jose', 5, 'JY@gmail.com').getRole()).toEqual('Employee')
        })
    });

});