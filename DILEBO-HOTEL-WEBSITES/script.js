"use strict";

document.documentElement.classList.add("js");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const HOTEL_EMAIL = "info@dilebohotel.co.za";

// Field/error helpers
function setError(input, message) {
    const error = document.getElementById(input.id + "Error");
    if (error) error.textContent = message;
    input.classList.toggle("invalid", Boolean(message));
    input.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
}

function clearErrors(form) {
    form.querySelectorAll(".error").forEach((span) => { span.textContent = ""; });
    form.querySelectorAll(".invalid").forEach((el) => el.classList.remove("invalid"));
}

// Fade-in animation (hero and page headers)
function initFadeIn() {
    const items = document.querySelectorAll(".fade-in");
    requestAnimationFrame(() => {
        requestAnimationFrame(() => items.forEach((el) => el.classList.add("visible")));
    });
}

// Accordion (about page facilities)
function initAccordion() {
    document.querySelectorAll(".accordion-header").forEach((button) => {
        button.addEventListener("click", () => {
            const panel = document.getElementById(button.getAttribute("aria-controls"));
            const open = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!open));
            panel.hidden = open;
        });
    });
}

// Lightbox gallery
function initLightbox() {
    const images = document.querySelectorAll(".lightbox-img");
    if (!images.length) return;

    const box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Enlarged image");
    box.innerHTML =
        '<button type="button" class="lightbox-close" aria-label="Close image">&times;</button>' +
        '<img src="" alt="">' +
        '<p class="lightbox-caption"></p>';
    document.body.appendChild(box);

    const bigImg = box.querySelector("img");
    const caption = box.querySelector(".lightbox-caption");
    const closeBtn = box.querySelector(".lightbox-close");
    let lastFocus = null;

    function open(img) {
        lastFocus = img;
        bigImg.src = img.currentSrc || img.src;
        bigImg.alt = img.alt;
        caption.textContent = img.alt;
        box.classList.add("open");
        closeBtn.focus();
    }

    function close() {
        box.classList.remove("open");
        if (lastFocus) lastFocus.focus();
    }

    images.forEach((img) => {
        img.tabIndex = 0;
        img.setAttribute("role", "button");
        img.addEventListener("click", () => open(img));
        img.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open(img);
            }
        });
    });

    closeBtn.addEventListener("click", close);
    box.addEventListener("click", (e) => { if (e.target === box) close(); });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && box.classList.contains("open")) close();
    });
}

// Room search filter
function initRoomSearch() {
    const input = document.getElementById("roomSearch");
    if (!input) return;
    const cards = document.querySelectorAll("#roomGrid .room-detail-card");
    const message = document.getElementById("roomNoResults");

    input.addEventListener("input", () => {
        const term = input.value.trim().toLowerCase();
        let visible = 0;
        cards.forEach((card) => {
            const match = card.dataset.name.toLowerCase().includes(term);
            card.hidden = !match;
            if (match) visible++;
        });
        message.hidden = visible > 0;
    });
}

// Booking enquiry form
function initBookingForm() {
    const form = document.getElementById("bookingForm");
    if (!form) return;

    const fullName = form.elements.fullName;
    const email = form.elements.email;
    const checkin = form.elements.checkin;
    const checkout = form.elements.checkout;
    const roomType = form.elements.roomtype;
    const guests = form.elements.guests;

    const today = new Date();
    const todayStr = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0")
    ].join("-");
    checkin.min = todayStr;
    checkout.min = todayStr;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors(form);
        let ok = true;

        ok = setError(fullName, fullName.value.trim().length < 2 ? "Please enter your full name." : "") && ok;
        ok = setError(email, !EMAIL_PATTERN.test(email.value.trim()) ? "Please enter a valid email address." : "") && ok;

        let nights = 0;
        if (!checkin.value) {
            ok = setError(checkin, "Please choose a check-in date.") && ok;
        } else if (checkin.value < todayStr) {
            ok = setError(checkin, "Check-in cannot be in the past.") && ok;
        }

        if (!checkout.value) {
            ok = setError(checkout, "Please choose a check-out date.") && ok;
        } else if (checkin.value && checkout.value <= checkin.value) {
            ok = setError(checkout, "Check-out must be after check-in.") && ok;
        } else if (checkin.value) {
            nights = Math.round((new Date(checkout.value) - new Date(checkin.value)) / 86400000);
        }

        ok = setError(roomType, !roomType.value ? "Please select a room type." : "") && ok;

        const guestCount = Number(guests.value);
        const guestsValid = Number.isInteger(guestCount) && guestCount >= 1 && guestCount <= 4;
        ok = setError(guests, guestsValid ? "" : "Guests must be a whole number from 1 to 4.") && ok;

        if (!ok) return;

        const price = Number(roomType.selectedOptions[0].dataset.price);
        const total = nights * price;
        alert(
            "Thank you, " + fullName.value.trim() + "!\n\n" +
            "Room: " + roomType.value + "\n" +
            "Guests: " + guestCount + "\n" +
            "Stay: " + checkin.value + " to " + checkout.value + "\n" +
            "Cost: " + nights + " night(s) x R" + price + " = R" + total.toLocaleString("en-ZA") + "\n\n" +
            "We will confirm your enquiry at " + email.value.trim() + "."
        );
        form.reset();
        guests.value = 2;
    });
}

// Contact form -> mailto
function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const nameInput = form.elements.name;
    const email = form.elements.email;
    const messageType = form.elements.messageType;
    const message = form.elements.message;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors(form);
        let ok = true;

        ok = setError(nameInput, nameInput.value.trim().length < 2 ? "Please enter your name." : "") && ok;
        ok = setError(email, !EMAIL_PATTERN.test(email.value.trim()) ? "Please enter a valid email address." : "") && ok;
        ok = setError(messageType, !messageType.value ? "Please select a message type." : "") && ok;
        ok = setError(message, message.value.trim().length < 10 ? "Message must be at least 10 characters." : "") && ok;

        if (!ok) return;

        const subject = "Dilebo Hotel - " + messageType.value;
        const body =
            "Name: " + nameInput.value.trim() + "\n" +
            "Email: " + email.value.trim() + "\n" +
            "Type: " + messageType.value + "\n\n" +
            message.value.trim();

        window.location.href =
            "mailto:" + HOTEL_EMAIL +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
    });
}

// Leaflet map (contact page)
function initMap() {
    const mapEl = document.getElementById("map");
    if (!mapEl || typeof L === "undefined") return;

    const position = [-23.9045, 29.4689];
    const map = L.map(mapEl).setView(position, 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker(position)
        .addTo(map)
        .bindPopup("<strong>Dilebo Hotel</strong><br>123 Main Street, Polokwane")
        .openPopup();
}

document.addEventListener("DOMContentLoaded", () => {
    initFadeIn();
    initAccordion();
    initLightbox();
    initRoomSearch();
    initBookingForm();
    initContactForm();
    initMap();
});
