/* ==========================================================================
   OJ LOGISTICS — WEBSITE CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to change the words, phone numbers,
   pay rates, areas and photos on the website.

   How to edit:
   1. Open this file in any text editor (Notepad, TextEdit, VS Code).
   2. Change the text between the "quote marks". Keep the quote marks.
   3. Keep the comma at the end of each line.
   4. Save, then refresh index.html in your browser to check.

   Anything in [SQUARE BRACKETS] is a placeholder that still needs filling in.
   ========================================================================== */

window.SITE = {

  // ------------------------------------------------------------------------
  // CONTACT DETAILS (used all over the site)
  // ------------------------------------------------------------------------
  // EDIT: phone number, written how you want people to see it.
  // The tap-to-call link is created from this automatically.
  phone: "075 8506 3362",

  // EDIT: email address
  email: "hello@ojlogistics.co.uk",

  // EDIT: WhatsApp number in international format, digits only, no + or spaces.
  // Example: "447585063362". Until this is filled in, the WhatsApp button
  // scrolls to the contact form instead.
  whatsappNumber: "[WHATSAPP NUMBER]",

  // EDIT: the green WhatsApp button in the bottom corner. The message is
  // typed into WhatsApp for the person, ready to send.
  whatsappFabLabel: "Message us\non WhatsApp",   // \n = new line
  whatsappDriverMessage: "Hi OJ Logistics, I'm interested in applying to be a delivery driver.",

  // EDIT: office address (use \n for a new line)
  address: "[ADDRESS LINE 1]\n[TOWN], [POSTCODE]",

  // EDIT: company name used in the footer copyright
  companyName: "OJ Logistics",


  // ------------------------------------------------------------------------
  // SCROLL SCENE (the animated van at the very top of the page)
  // ------------------------------------------------------------------------
  scene: {
    line1: "Your parcels, on the move.",   // shown from the start with the buttons
    line2: "Delivered",                   // orange line that appears as you scroll...
    line2Old: "tomorrow",                 // ...this word gets crossed out...
    line2New: "today",                    // ...and this is hand-written in its place
    primaryButton: "Apply to drive",
    secondaryButton: "I need deliveries"
  },


  // ------------------------------------------------------------------------
  // HERO (driver section, straight after the scroll scene)
  // ------------------------------------------------------------------------
  hero: {
    eyebrow: "Now recruiting · Greater Manchester",
    headingLine1: "Become a self\u2011employed",   // \u2011 = hyphen that never splits across lines
    headingLine2: "driver.",                   // shown in orange
    text: "Be your own boss while delivering parcels for one of the largest companies in the world. Become part of a new exciting team, with vans, fuel, insurance and uniform provided.",

    // EDIT: pay rate
    payAmount: "[£DAY RATE]",
    payLabel: "per day",
    payNote: "Van, fuel, insurance and uniform provided",

    primaryButton: "Join today",

    // EDIT: hero photo. Put your photo in the "images" folder and change this
    // to e.g. "images/driver-van.jpg". Always describe the photo in imageAlt.
    image: "https://placehold.co/960x1120/13283D/8A9AAB?text=Driver+with+van&font=raleway",
    imageAlt: "An OJ Logistics driver standing beside a delivery van",

    // small label that sits over the photo
    tagTitle: "Greater Manchester",
    tagText: "Delivering on behalf of one of the world's largest retailers"
  },


  // ------------------------------------------------------------------------
  // WHAT YOU GET (driver benefits)
  // icon options: "van", "fuel", "shield", "shirt", "clock", "bolt", "star"
  // ------------------------------------------------------------------------
  benefits: {
    eyebrow: "What you get",
    heading: "Everything you need to start.",
    text: "Turn up ready to work. We provide the kit.",
    items: [
      { icon: "van",    title: "Van",       text: "A delivery van ready for your route." },
      { icon: "fuel",   title: "Fuel",      text: "Fuel is provided, so you're not paying at the pump." },
      { icon: "shield", title: "Insurance", text: "Van insurance arranged for you." },
      { icon: "shirt",  title: "Uniform",   text: "A full uniform so you look the part from day one." }
    ]
  },


  // ------------------------------------------------------------------------
  // HOW TO JOIN (3 steps)
  // ------------------------------------------------------------------------
  steps: {
    eyebrow: "How to join",
    heading: "3 simple steps to join.",
    items: [
      { title: "Apply",                     text: "Fill in the short form or give us a call. It takes a couple of minutes." },
      { title: "Meet the team & train",     text: "Come and meet us. We'll train you on the routes, the van and the app." },
      { title: "Start delivering",          text: "Pick up your van and head out on your first multi-drop route." }
    ],
    button: "Apply now"
  },


  // ------------------------------------------------------------------------
  // WHATSAPP BAND
  // ------------------------------------------------------------------------
  chat: {
    heading: "Prefer to chat?",
    text: "Message us on WhatsApp or give us a ring. We're happy to answer questions.",
    whatsappButton: "Message us on WhatsApp"
  },


  // ------------------------------------------------------------------------
  // FOR BUSINESSES
  // icon options: "van", "fuel", "shield", "shirt", "clock", "bolt", "star"
  // ------------------------------------------------------------------------
  business: {
    eyebrow: "For businesses",
    heading: "Package delivery. Done today.",
    text: "You have plenty of choice. Let our friendly, reliable team get your parcels where they need to be, on time.",
    items: [
      { icon: "clock", title: "24-hour service", text: "We listen to customers and staff, and keep improving how we work." },
      { icon: "bolt",  title: "Fast delivery",   text: "Great service is at the heart of what we do. We want to make a real difference." },
      { icon: "star",  title: "Quality service", text: "We work with trusted carriers, because quality and reliability matter to you." }
    ],
    button: "Become a customer"
  },


  // ------------------------------------------------------------------------
  // ABOUT
  // ------------------------------------------------------------------------
  about: {
    eyebrow: "About OJ",
    statement: "We recruit, train and manage drivers, and support the fleet, so you can focus on growing your business.",
    text: "OJ Logistics takes a modern, professional approach to delivery and collection. We tailor our service to what you need and aim to deliver it quickly and cost-effectively.",
    // EDIT: the four things you handle (shown as a numbered list)
    list: ["Driver recruitment", "Training", "Day-to-day management", "Fleet support"]
  },


  // ------------------------------------------------------------------------
  // DELIVERY AREAS
  // EDIT: add or remove areas. Keep each one in "quotes" with a comma after.
  // ------------------------------------------------------------------------
  areas: {
    eyebrow: "Where we deliver",
    heading: "Covering Greater Manchester.",
    list: ["[AREA 1]", "[AREA 2]", "[AREA 3]", "[AREA 4]", "[AREA 5]", "[AREA 6]"],
    note: "Not sure if we cover you?",
    noteLink: "Ask us"
  },


  // ------------------------------------------------------------------------
  // TESTIMONIALS (the second one is highlighted in orange)
  // EDIT: \n in a quote starts a new paragraph.
  // ------------------------------------------------------------------------
  testimonials: {
    eyebrow: "What customers say",
    heading: "Trusted by local businesses.",
    items: [
      { quote: "We have been doing business with OJ Logistics for over one year and their deliveries are very well suited to our industry.\nThey are usually made in a box truck or van to a location inside the hotel by professionally uniformed drivers.", name: "John Smith", company: "" },
      { quote: "I would consider OJ Logistics a core carrier of ours in the Greater Manchester region and based on their penchant for always putting the customer first and \"can do\" attitude, we have continually tried to find ways to grow our partnership with them.", name: "Amanda White", company: "" }
    ]
  },


  // ------------------------------------------------------------------------
  // ENQUIRY FORM
  // ------------------------------------------------------------------------
  contact: {
    eyebrow: "Get in touch",
    heading: "Drive with us, or ship with us.",
    text: "Send us a message and we'll get back to you. Or call us. We'd love to hear from you.",

    // The form is handled by Netlify Forms once the site is deployed on Netlify.
    // Submissions appear in the Netlify dashboard under Forms → "enquiry",
    // where you can also turn on email notifications.

    interestOptions: ["Driving for OJ", "Becoming a customer", "Other"],
    submitButton: "Send message",
    privacyNote: "We only use your details to reply to your enquiry."
  },


  // ------------------------------------------------------------------------
  // FINAL CALL TO ACTION (orange band)
  // ------------------------------------------------------------------------
  finalCta: {
    heading: "We're hiring drivers.",
    text: "We're always looking for reliable multi-drop delivery drivers. Van, fuel, insurance and uniform provided.",
    button: "Apply now"
  },


  // ------------------------------------------------------------------------
  // FOOTER
  // ------------------------------------------------------------------------
  // EDIT: link to your privacy policy page when you have one
  privacyLink: "#[PRIVACY POLICY LINK]",

  // EDIT: short line under the logo in the footer
  footerText: "Multi-drop parcel delivery across Greater Manchester, delivering on behalf of one of the world's largest retailers."
};
