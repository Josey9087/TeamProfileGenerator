const { describe, it, expect } = require("@jest/globals");
const Intern = require("../lib/Intern"); 

describe('Employee', () => {
    describe("Constructor ", () => {
        it("Creates a new Intern", () => {
            const Interntest = new Intern();
            expect(typeof Interntest).toBe("object");
        });

        describe("Name", () => {
            it('Should return the Intern Name', () => {
                expect(new Intern('Jose').name).toEqual('Jose')
            })
        });

        describe("ID", () => {
            it('Should return the Intern ID', () => {
                expect(new Intern('Jose', 5).id).toEqual(5)
            })
        });

        describe("Email", () => {
            it('Should return the Intern Email', () => {
                expect(new Intern('Jose', 5, 'JY@gmail.com').email).toEqual('JY@gmail.com')
            })
        });
    })
    describe("getName", () => {
        it('Should return the Intern Name', () => {
            expect(new Intern('Jose', 5, 'JY@gmail.com').getName()).toEqual('Jose')
        })
    });

    describe("getID", () => {
        it('Should return the Intern ID', () => {
            expect(new Intern('Jose', 5, 'JY@gmail.com').getId()).toEqual(5)
        })
    });

    describe("getEmail", () => {
        it('Should return the Intern Email', () => {
            expect(new Intern('Jose', 5, 'JY@gmail.com').getEmail()).toEqual('JY@gmail.com')
        })
    });
    describe("getRole", () => {
        it('Should return the Intern role', () => {
            expect(new Intern('Jose', 5, 'JY@gmail.com').getRole()).toEqual('Intern')
        })
    });
    describe("getSchool", ()=>{
        it('Should return the Intern school', () =>{
            expect(new Intern('Jose', 5, 'JY@gmail.com', 'DU').getSchool()).toEqual('DU')
        })
    })
});