const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../src/app");

describe("Project Participants API", () => {
  it("should create project participants", async () => {
    const response = await supertest(app)
      .post("/api/v1/project-participants")
      .send({
        name: "John Doe",
        date_of_birth: "1990-01-01",
        address: "123 Main St",
        phone_number: "+1234567890"
      });

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("message").to.equal("Project participants created successfully");
  });
});
