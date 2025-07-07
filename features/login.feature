Feature: Login API

  Scenario: Successful login with valid credentials
    Given the server is running
    When I POST to "/login" with username "admin" and password "secret"
    Then the response status should be 200
    And the response should contain "Login successful"

  Scenario: Failed login with wrong credentials
    Given the server is running
    When I POST to "/login" with username "foo" and password "bar"
    Then the response status should be 401
    And the response should contain "Invalid credentials"
