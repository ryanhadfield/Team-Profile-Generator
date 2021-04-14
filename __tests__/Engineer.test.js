const Engineer = require("../lib/Engineer");

describe("testing engineer constructor", () => {
    describe("test engineer properties", () => {
        test("test github property", () => {
            const engineer = new Engineer("Brian Fantana", 1, "bfantana@channel4news.com", "BrianFantana");
            expect(engineer.github).toEqual("BrianFantana");
        });
    });

    describe("test engineer methods", () => {
        test("test getGitHub method", () => {
            const engineer = new Engineer("Brian Fantana", 1, "bfantana@channel4news.com", "BrianFantana");
            expect(engineer.getGitHub()).toEqual("BrianFantana");
        });
        test("test getRole method", () => {
            const engineer = new Engineer("Brian Fantana", 1, "bfantana@channel4news.com", "Engineer");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});
