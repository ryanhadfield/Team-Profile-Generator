const Employee = require("../lib/Employee");

describe("testing employee constructor", () => {
  describe("test employee properties", () => {
    test("test name property", () => {
      const employee = new Employee("Ron Burgundy", 1, "rburgundy@channel4news.com");
      expect(employee.name).toEqual("Ron Burgundy");
    });
    test("test id property", () => {
      const employee = new Employee("Ron Burgundy", 1, "rburgundy@channel4news.com");
      expect(employee.id).toEqual(1);
    });
    test("test email property", () => {
      const employee = new Employee("Ron Burgundy", 1, "rburgundy@channel4news.com");
      expect(employee.email).toEqual("rburgundy@channel4news.com");
    });
  });

  describe("test employee methods", () => {
    test("test getName method", () => {
      const employee = new Employee("Ron Burgundy", 1, "rburgundy@channel4news.com");
      expect(employee.getName()).toEqual("Ron Burgundy");
    });
    test("test getId method", () => {
      const employee = new Employee("Ron Burgundy", 1, "rburgundy@channel4news.com");
      expect(employee.getId()).toEqual(1);
    });
    test("test getEmail method", () => {
      const employee = new Employee("Ron Burgundy", 1, "rburgundy@channel4news.com");
      expect(employee.getEmail()).toEqual("rburgundy@channel4news.com");
    });
    test("test getRole method", () => {
      const employee = new Employee("Ron Burgundy", 1, "rburgundy@channel4news.com", "Employee");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
