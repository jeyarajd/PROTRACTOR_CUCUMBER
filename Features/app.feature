Feature: Go to the home
  Display the title

# Scenario: Home Page
#     Given I am on the home page
#     When I do nothing
#     Then I should see the title

Scenario: Searching on google
  Given I am on search page
  When I type "searchkeyword"
    | path | ./TestData/SearchData.xlsx |
    |TC_ID| TC_001|
    | FindData | FirstName |

