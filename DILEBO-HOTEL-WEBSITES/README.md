# Dilebo Hotel Website

A responsive multi-page hotel website for Dilebo Hotel in Polokwane, Limpopo. The project showcases the hotel’s rooms, services, booking information, and contact details.

## Student Information

- **Project Title:** Dilebo Hotel Website
- **Name:** VIRGINIA BOIKOKOBETSO DILEBE
- **Student Number:** ST10533132

## Overview

The Dilebo Hotel Website is a responsive, multi-page front-end website for a hotel located in Polokwane, Limpopo. It gives prospective guests a clear place to learn about the hotel, view room options and prices, find information about its history and facilities, and get in touch. The site uses a consistent visual style and navigation across its pages so visitors can move easily between hotel information and enquiry options. It is built with HTML, CSS and JavaScript as a static website; it does not include a back-end booking system, so enquiries are validated in the browser and contact messages open the visitor's email app.

## Website Goals and Objectives

- Present Dilebo Hotel and its services in a clear, professional way.
- Help visitors find room options, pricing, hotel information, and contact details.
- Make the website easy to navigate on desktop and mobile screens.
- Provide visitors with booking enquiry and contact form interfaces.
- Use consistent styling and structure across all website pages.

## Key Features and Functionality

- Responsive navigation menu linking the main website pages.
- Home page with a hotel introduction and hero image.
- Rooms page displaying available room options and pricing.
- Booking page with a booking enquiry form interface.
- About page presenting the hotel’s history and facilities.
- Contact page with contact information, a message form interface, and an embedded map.
- Shared CSS styling for a consistent look and responsive layouts.
- Facilities accordion on the About page.
- Lightbox image gallery on the Rooms page.
- Room search filter (by name) on the Rooms page.
- Fade-in animation on hero and page headers.
- Booking enquiry form with JavaScript validation (email format, check-out after check-in, guests 1-4) and a total cost alert (nights x price: Standard R650, Deluxe R950, Family Suite R1450).
- Contact form with validation that compiles a `mailto:info@dilebohotel.co.za` message.
- Interactive Leaflet map on the Contact page.
- SEO: unique titles, descriptions, keywords, H1-H3 hierarchy, descriptive image names and alt text, `robots.txt` and `sitemap.xml`.

Forms have no back-end: the booking enquiry shows a cost estimate and the contact form opens the visitor's email client.

## Project Phases

The descriptions below summarize the work represented by the submitted project and the current website files.

### Part 1: Project Planning and Initial Structure

**Submitted:** 14 August — completed.

- Defined the Dilebo Hotel website concept and its intended audience: guests looking for hotel, room, booking, and contact information.
- Established the main goals and planned sections for the website.
- Started the website structure and visual direction for a hotel based in Polokwane, Limpopo.

### Part 2: Multi-Page Website Implementation

**Submitted:** 18 September — completed.

- Built the Home, Rooms, Book Now, About, and Contact pages.
- Added shared navigation and a common visual style using HTML and CSS.
- Added hotel and room descriptions, room prices, facilities, contact details, and images.
- Created booking and contact form interfaces and embedded a Google Map on the Contact page.
- Checked that the pages link together as one website.

### Part 3: Testing, Refinement, and Final Submission

**Planned submission:** 2 November.

- Test each page and navigation link, and fix any broken links or display issues.
- Review the layout at desktop and mobile screen sizes and refine consistency where needed.
- Check page content, image alternatives, form fields, and contact/location information.
- Update the changelog with final improvements and prepare the completed project for submission.

The booking and contact forms are front-end interfaces only. Connecting them to a service that stores bookings or sends messages is outside the current static website implementation.

## Project Structure

- `index.html` — Home page
- `rooms.html` — Room options and pricing
- `bookings.html` — Booking form
- `about.html` — Hotel history, mission and facilities accordion
- `contact.html` — Contact information, message form and map
- `style.css` — Full website styling
- `script.js` — Interactivity, form validation and map
- `robots.txt`, `sitemap.xml` — SEO files
- `images/` — Hotel and room images

## Sitemap

```text
Home (index.html)
├── Rooms (rooms.html)
├── Book Now (bookings.html)
├── About (about.html)
└── Contact (contact.html)
	└── Leaflet Map

Shared resources
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
└── images/
```

Each main page links to the other pages through the shared navigation menu.

## Changelog

This log tracks submitted milestones and project improvements. Add a new dated entry whenever the site changes.

| Date | Update |
| --- | --- |
| 14 August | Part 1 submitted: established the website concept, goals, and initial structure. |
| 18 September | Part 2 submitted: implemented the five-page website, shared styling and navigation, page content, enquiry forms, and map. |
| 16 October 2026 | Expanded README documentation with student information, project overview, goals, project phases, sitemap, and this changelog. |
| 2 November | Part 3 planned: test and refine the site, resolve issues, and prepare the final subission. |
| 2 November 2026 | Part 3 final: fixed nav, fixed booking form, unified mission/footer, added JS and SEO |
| 2 Nov 2026 | Part 3 final: fixed Part 2, added JS accordion lightbox search map validation cost calc, SEO tags, robots sitemap |

## Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)
- Leaflet and OpenStreetMap

## How to Run

1. Open the project folder in Visual Studio Code.
2. Open any page such as `index.html` in your browser.
3. Optional: use a live preview extension for easier local viewing.

## References

These documentation sources cover the main technologies and techniques used in the project. Keep only references that you personally consulted while learning or building the website.

- MDN Web Docs, [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) — HTML page structure and semantic elements.
- MDN Web Docs, [CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics) — CSS selectors, properties, and page styling.
- MDN Web Docs, [Responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) — layouts that adapt to different screen sizes.
- Google for Developers, [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started) — embedding a map in a web page (used as the no-JavaScript fallback).
- MDN Web Docs, [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — DOM events, form validation and the `mailto:` scheme.
- Leaflet, [Quick Start Guide](https://leafletjs.com/examples/quick-start/) — interactive map.

## Contact Information

**Dilebo Hotel**  
123 Main Street, Polokwane, 0700, Limpopo  
Phone: 015 123 4567  
Email: info@dilebohotel.co.za

## Notes

This is a static front-end website, so no server setup or backend is required for local viewing.