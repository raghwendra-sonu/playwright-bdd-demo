Feature: Random Brewery API

    @API
    Scenario: Retrieve and validate 2 random breweries
        Given the user requests 2 random breweries
        Then the API response status should be 200
        And brewery details should be displayed