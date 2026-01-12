# JS-ve-CSS-ile-geli-tirilmi-Portcity-Projesi



About the Project

This project is a PortCity Promotion Website developed using basic web technologies such as HTML, CSS, and JavaScript. The main purpose of the project is to correctly use JavaScript events, manipulate the DOM, and manage user interactions in an effective way.

The project consists of four main pages: index.html, about.html, services.html, and contact.html. All JavaScript code is written in a single file called script.js.

Implemented Features
1. Page Load Event (DOMContentLoaded)

When the page is first loaded, an alert message saying "Welcome to the PortCity Promotion Website" is displayed. This feature is implemented using the DOMContentLoaded event to ensure the page is fully loaded before the code runs.

2. Menu Interaction (Mouseover & Mouseout)

When the user moves the mouse over the menu links, the text color changes. When the mouse leaves the link, it returns to its original color. This interaction is created using mouseover and mouseout events.

3. Active Page Highlighting

The clicked menu item becomes active and is visually highlighted. The click event and classList are used for this feature. The active menu item is also automatically set when the page is loaded.

4. Theme Switching (Light / Dark Mode)

A "🎨 Change Theme" button allows users to switch between light and dark themes. The theme change is handled by adding and removing CSS classes from the body element. This changes the background color, text color, and menu color dynamically.

5. Hover Information Boxes on Services Page

On the services.html page, when the user hovers over an activity, a short description is shown. When the mouse leaves the activity, the description disappears. This feature is controlled using JavaScript mouseover and mouseout events.

6. Dynamic Activity List

The activity list is created dynamically using a JavaScript array. The list items are added to the HTML using loop structures such as forEach.

7. Like Counter

On the homepage, a "👍 Like" button increases the like counter each time it is clicked. The counter value is stored in a global variable and updated in the DOM after each click.

8. Contact Form Validation

When the contact form on contact.html is submitted, the input fields are checked. If any field is empty, the user is warned. If all fields are filled, a success message is displayed. This is done using the submit event and preventDefault().

9. Image Interaction (Zoom Effect)

At least one image on the website can be clicked to zoom in. When clicked again, it returns to its original size. This effect is implemented using the click event and classList.toggle.

Conclusion

This project provides a practical example of using JavaScript events, DOM manipulation, and user interaction handling. It is a simple but effective project that demonstrates fundamental front-end development skills.


📄 Page Structure

The project includes the following pages:

index.html – Home Page

about.html – About PortCity

services.html – Activities and Services

contact.html – Contact Page

All pages share a common top navigation menu that allows users to move between pages easily.

🧭 Menu Interactions

When the mouse is placed over a menu link, the text color changes.

When the mouse leaves the link, it returns to its original color.

These effects are implemented using JavaScript with mouseover and mouseout events.

⚠️ Page Load Alert

When the home page is opened, an alert message appears: “Welcome to the PortCity Promotion Website”

This feature is implemented using window.onload.

🎨 Theme Switch Button

A “🎨 Change Theme” button is available on the pages.

At least two different themes are defined:

Light theme

Dark theme

Each time the button is clicked:

Background color

Text color

Menu colors change dynamically.

Theme switching is handled using a CSS class toggle approach.

👍 Like Counter

On the home page, there is a “👍 Like” button.

Each click:

Increases a global counter variable.

Updates the number shown on the page instantly.

This feature is built using a click event and DOM manipulation.

🖱️ Hover Information Boxes

On the services.html page, when the user hovers over an activity:

A short description is displayed.

When the mouse leaves the activity, the description is hidden.

This interaction uses mouseover and mouseout events.

🖼️ Image Interaction

At least one image on the site:

Enlarges when clicked.

Returns to its original size when clicked again.

This is achieved by toggling CSS classes with JavaScript.

✉️ Contact Form Validation

The contact.html page includes a contact form with:

Name

Email

Message

When the form is submitted:

If any field is empty, the user sees a warning.

If all fields are filled, a success message is shown.

Form validation is done using the submit event and preventDefault().

🎯 Project Purpose

The purpose of this project is to practice:

Creating HTML page structures

Using JavaScript events

DOM manipulation

User interaction handling

in a simple and clear way.

License by Yağız Kerem Şen



