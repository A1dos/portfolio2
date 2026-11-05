// ===== TABS (About / Skills / Education) =====
const tabs = document.querySelectorAll(".tab");     // all tab buttons
const panels = document.querySelectorAll(".panel"); // all content blocks

tabs.forEach(function (tab) {                       // for every button...
  tab.onclick = function () {                       // ...do this on click:
    tabs.forEach(t => t.classList.remove("active")); // remove orange from all buttons
    panels.forEach(p => p.classList.remove("show")); // hide all blocks
    tab.classList.add("active");                     // make the clicked button orange
    document.getElementById(tab.dataset.tab).classList.add("show"); // show the matching block
  };
});

// ===== CONTACT FORM =====
const form = document.getElementById("form");       // find the form by id

form.onsubmit = function (e) {                      // when the form is sent...
  e.preventDefault();                               // ...don't reload the page
  const name = document.getElementById("name").value;       // text from the name field
  const email = document.getElementById("email").value;     // text from the email field
  const message = document.getElementById("message").value; // text from the message field
  const body = message + "\n\nFrom: " + name + " (" + email + ")"; // full letter text
  window.location.href = "mailto:n7001504@gmail.com?subject=Portfolio message&body=" + encodeURIComponent(body); // open the mail app with the letter ready
  form.reset();                                     // clear the fields
};

// ===== HIGHLIGHT THE MENU WHILE SCROLLING =====
const links = document.querySelectorAll("header nav a");           // menu links in the header
const blocks = document.querySelectorAll("#home, #about, #services, #projects, #contact"); // blocks to watch
const topBtn = document.getElementById("top");                     // back-to-top button

window.onscroll = function () {                                    // runs on every scroll
  let current = "home";                                            // by default: home
  blocks.forEach(function (b) {
    if (window.scrollY >= b.offsetTop - 150) current = b.id;       // the last block we passed
  });
  links.forEach(function (a) {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current); // orange only for the current one
  });
  topBtn.style.display = window.scrollY > 500 ? "flex" : "none";   // show button after 500px
};

// ===== FADE-IN WHEN A BLOCK APPEARS =====
const watcher = new IntersectionObserver(function (items) {        // watches blocks entering the screen
  items.forEach(function (i) {
    if (i.isIntersecting) i.target.classList.add("visible");       // visible = CSS fades it in
  });
}, { threshold: 0.1 });                                            // fire when 10% is visible
document.querySelectorAll(".reveal").forEach(function (el) {
  watcher.observe(el);                                             // start watching each block
});
