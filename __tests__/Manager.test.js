const Manager = require("../lib/Manager");

describe("testing manager constructor", () => {
    describe("test manager properties", () => {
        test("test officeNumber property", () => {
            const manager = new Manager("Ed Harken", 1, "eharken@channel4news.com", 100);
            expect(manager.officeNumber).toEqual(100);
        });
    });

    describe("test manager methods", () => {
        test("test officeNumber method", () => {
            const manager = new Manager("Ed Harken", 1, "eharken@channel4news.com", 100);
            expect(manager.getOfficeNumber()).toEqual(100);
        });
        test("test getRole method", () => {
            const manager = new Manager("Ed Harken", 1, "eharken@channel4news.com", 100, "Manager");
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});
