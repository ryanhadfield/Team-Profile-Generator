const Engineer = require("../lib/Engineer");

describe("testing engineer constructor", () => {
    describe("test engineer properties", () => {
        test("test github property", () => {
            const engineer = new Engineer("Ron Burgundy", 1, "rburgundy@channel4news.com", "RonBurgundy");
            expect(engineer.github).toEqual("RonBurgundy");
        });
    });

    describe("test engineer methods", () => {
        test("test getGitHub method", () => {
            const engineer = new Engineer("Ron Burgundy", 1, "rburgundy@channel4news.com", "RonBurgundy");
            expect(engineer.getGitHub()).toEqual("RonBurgundy");
        });
        test("test getRole method", () => {
            const engineer = new Engineer("Ron Burgundy", 1, "rburgundy@channel4news.com", "Engineer");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});
