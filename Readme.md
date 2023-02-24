Click the **index.html** file to open the login page
login page,home page and detailed view page has splitted into 3 files for each file there is a seperate css and javascript file

This application is designed to perform the following tasks:

- Collect user information through a login form on the first page
- Save user details in local storage and redirect to the second page
- Display a list of data fetched from an API on the second page
- Provide detailed view of individual data when clicked on a row of the list view on the third page
- Clear local storage and redirect to the login page when the user clicks the logout button


**Usage**

**Login Page**

The login page will display a form to collect the following user details:

 - Name
 - Phone number
 - Email
 
After providing the necessary information, click the submit button. The user details will be saved in local storage and the user will be redirected to the second page.
If the user tries to access the second page without entering their details, they will be redirected back to the login page with a message to enter their details.

**Home Page**

The home page will display a list of data fetched from an API in list view format.
Clicking on any row of the list view will redirect the user to the third page, which displays the detailed view of individual data.
On top of the list view, a logout button is provided. Clicking on this button will clear local storage and redirect the user to the login page.

**Detailed View Page**

The detailed view page displays the individual data of the selected row from the list view on the second page.

Built With
- HTML
- CSS
- JavaScript

Author
**Vignesh J**