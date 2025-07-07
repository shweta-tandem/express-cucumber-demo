const { Given, When, Then } = require('@cucumber/cucumber');
const request = require('supertest');
const app = require('../../app');
const assert = require('assert');

let response;

Given('the server is running', function () {
  // Nothing needed here since we're not running a real server
});

When('I POST to {string} with username {string} and password {string}', async function (endpoint, username, password) {
  response = await request(app)
    .post(endpoint)
    .send({ username, password });
});

Then('the response status should be {int}', function (statusCode) {
  assert.strictEqual(response.status, statusCode);
});

Then('the response should contain {string}', function (message) {
  assert.strictEqual(response.body.message, message);
});

