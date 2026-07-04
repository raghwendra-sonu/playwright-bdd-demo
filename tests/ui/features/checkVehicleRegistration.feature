Feature: Check Vehicle Registration

    @UI
    Scenario: Validate error message for invalid registration
        Given the user opens the Service NSW homepage
        When the user clicks the Check Rego link
        And the user clicks the Check online button
        And the user enters "ABC123" as the plate number
        And the user accepts the terms and conditions
        And the user clicks the Check registration button
        Then the error message "No vehicles found for ABC123" should be displayed