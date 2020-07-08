
Feature: Go to the home
@Regression
Scenario Outline: Auth Agent Request
        Given I am on "<Brand>" page
        When Enter "<FirstName>" 
    
    Examples: 
    TestData/SearchData.csv
@Regression
Scenario Outline: Non Account Agent Request
        Given I am on "<Brand>" page
        When Enter "<FirstName>" 
    
    Examples: 
    TestData/SearchData.csv



