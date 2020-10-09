# Assignment

Create a web view showing delivery time slots based on data from provided endpoints. Please note that design is not a part of this assignment so while a pretty view is always appreciated a barren one will not be judged negatively.

## Functionality:

- Users should be able to select a delivery date.
- Users should be able to select a delivery time for the selected delivery date.
- Users should be able to tick/untick a checkbox for wanting In-Home delivery.
- Users should be able to proceed to a confirmation/summary page showing the selected information.
- Users should be able to go back and edit their choice from the confirmation/summary page.

## Logic

The web-view should make requests to the following endpoints and then render the view with the fetched dates and times:

- Dates: https://api.mathem.io/mh-test-assignment/delivery/dates
- Times: https://api.mathem.io/mh-test-assignment/delivery/times/:dateString

The date and time slots need to be sorted in ascending order based on the date and start time respectively.

When a user selects a delivery slot the button to proceed should be enabled (while it should be disabled when no slot is selected). While the button is disabled it should also have the CSS class “disabled”.

While user has ticked the In Home delivery checkbox, any delivery slots where inHomeAvailable is false should not be listed.

Additionally, the state of the application, such as selected date, In Home delivery on/off, and so on, should persist between reloads.
