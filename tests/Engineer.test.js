const { describe, it, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe('Employee', () => {
    describe("Constructor", () => {
        it("Creates a new Engineer", () => {
            const Engineertest = new Engineer();
            expect(typeof Engineertest).toBe("object");
        });

        describe("Name", () => {
            it('Should return the Engineer Name', () => {
                expect(new Engineer('Jose').name).toEqual('Jose')
            })
        });

        describe("ID", () => {
            it('Should return the Engineer ID', () => {
                expect(new Engineer('Jose', 5).id).toEqual(5)
            })
        });

        describe("Email", () => {
            it('Should return the Engineer Email', () => {
                expect(new Engineer('Jose', 5, 'JY@gmail.com').email).toEqual('JY@gmail.com')
            })
        });
    })
    describe("getName", () => {
        it('Should return the Engineer Name', () => {
            expect(new Engineer('Jose', 5, 'JY@gmail.com').getName()).toEqual('Jose')
        })
    });

    describe("getID", () => {
        it('Should return the Engineer ID', () => {
            expect(new Engineer('Jose', 5, 'JY@gmail.com').getId()).toEqual(5)
        })
    });

    describe("getEmail", () => {
        it('Should return the Engineer Email', () => {
            expect(new Engineer('Jose', 5, 'JY@gmail.com').getEmail()).toEqual('JY@gmail.com')
        })
    });
    describe("getRole", () => {
        it('Should return the Engineer role', () => {
            expect(new Engineer('Jose', 5, 'JY@gmail.com').getRole()).toEqual('Engineer')
        })
    });
    describe("getGithub", () => {
        it('Should return the Engineer github username', () => {
            expect(new Engineer('Jose', 5, 'JY@gmail.com', 'Josey9087').getGitHub()).toEqual('Josey9087')
        })
    });
});