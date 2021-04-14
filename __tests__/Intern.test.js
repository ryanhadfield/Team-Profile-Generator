const Intern = require("../lib/Intern");

describe("testing intern constructor", () => {
    describe("test intern properties", () => {
        test("test school property", () => {
            const intern = new Intern("Garth Holliday", 1, "ghollidayharken@channel4news.com", "San Diego State");
            expect(intern.school).toEqual("San Diego State");
        });
    });

    describe("test intern methods", () => {
        test("test officeNumber method", () => {
            const intern = new Intern("Garth Holliday", 1, "ghollidayharken@channel4news.com", "San Diego State");
            expect(intern.getSchool()).toEqual("San Diego State");
        });
        test("test getRole method", () => {
            const intern = new Intern("Garth Holliday", 1, "ghollidayharken@channel4news.com", "San Diego State", "Intern");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});
