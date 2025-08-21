
const expect = require("chai").expect;
const request = require("request");

describe("Multiply Calculator API", function () {
    const baseUrl = "http://localhost:3000";
    
    it("returns status 200 to check if api works", function (done) {
        request(baseUrl, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it("should return correct multiplication result for valid numbers", function (done) {
        request.get(
            `${baseUrl}/multiply?a=10&b=5`,//calling the /multiply enpoint with query parameters a=10 & b=5, baseUrl = localhost: 3000
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.include("50"); // Response contains the multiplcation result in plain text
                done();
            }
        );
    });
    it("should handle missing parameters", function (done) {
        request.get(`${baseUrl}/multiply?a=10`, function (error, response, body) { //Sends a GET request to the /multiply endpoint with only one query parameter: a=10
            expect(response.statusCode).to.not.equal(200); // Expect error - b is not provided, which should trigger an error from the API
            done();
        });
    });
    it("should return error for non-numeric input", function (done) {
        request.get(
            `${baseUrl}/multiply?a=hello&b=world`,//Sends a GET request to /multiply with non-numeric values: a=hello and b=world
            function (error, response, body) {//The API is expected to validate input types and reject this request
                expect(response.statusCode).to.not.equal(200);//asserts that the response status code should not be 200, meaning the API correctly rejects invalid input
                done();//closes callback and test case 
            }
        );
    });
});
