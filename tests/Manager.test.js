const { describe, it, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe('Employee', () => {
    describe("Constructor", () => {
        it("Creates a new Engineer", () => {
            const Managertest = new Manager();
            expect(typeof Managertest).toBe("object");
        });

        describe("Name", () => {
            it('Should return the Manager Name', () => {
                expect(new Manager('Jose').name).toEqual('Jose')
            })
        });

        describe("ID", () => {
            it('Should return the Manager ID', () => {
                expect(new Manager('Jose', 5).id).toEqual(5)
            })
        });

        describe("Email", () => {
            it('Should return the Manager Email', () => {
                expect(new Manager('Jose', 5, 'JY@gmail.com').email).toEqual('JY@gmail.com')
            })
        });
    })
    describe("getName", () => {
        it('Should return the Manager Name', () => {
            expect(new Manager('Jose', 5, 'JY@gmail.com').getName()).toEqual('Jose')
        })
    });

    describe("getID", () => {
        it('Should return the Manager ID', () => {
            expect(new Manager('Jose', 5, 'JY@gmail.com').getID()).toEqual(5)
        })
    });

    describe("getEmail", () => {
        it('Should return the Manager Email', () => {
            expect(new Manager('Jose', 5, 'JY@gmail.com').getEmail()).toEqual('JY@gmail.com')
        })
    });
    describe("getRole", () => {
        it('Should return the Manager role', () => {
            expect(new Manager('Jose', 5, 'JY@gmail.com').getRole()).toEqual('Manager')
        })
    });
    describe("getOfficeNumber", () => {
        it('Should return the office number', () => {
            expect(new Manager('Jose', 5, 'JY@gmail.com', 10).getOfficeNumber()).toEqual(10)
        })
    });
});