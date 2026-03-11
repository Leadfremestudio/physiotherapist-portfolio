# UI/UX & Development Blueprint: Sports Injury Clinic Website
**Client:** Jithesh V Nair (Musculoskeletal & Sports Physiotherapist)
**Target Aesthetic:** Wix "Sports Injury Clinic" Template (ID: 5571)
**Tech Stack:** HTML5, Tailwind CSS (via CDN), Vanilla JS

## 1. Global Design System & Vibe
The design must feel **athletic, clinical, high-performance, and trustworthy.** It should not look like a standard hospital; it must look like a sports performance center.

### A. Color Palette
* **Primary Dark:** `bg-slate-900` / `text-slate-900` (Used for heavy text, dark sections, footer)
* **Primary Light:** `bg-white` / `bg-gray-50` (Used for main backgrounds to keep it clinical)
* **Accent Color (Crucial for the "Sports" feel):** Vibrant Orange or True Red. Use `bg-orange-600` or `text-red-600`.
* **Borders/Dividers:** `border-gray-200`

### B. Typography (Use Google Fonts)
* **Headings Font:** 'Oswald' or 'Montserrat' (Athletic, geometric).
    * *Rules:* Always `font-black` or `font-extrabold`, often `uppercase`, tight letter spacing (`tracking-tight` or `tracking-tighter`).
* **Body Font:** 'Inter' or 'Roboto' (Clinical, highly legible).
    * *Rules:* `font-normal`, `text-gray-600`, relaxed line height (`leading-relaxed`).

### C. Component Styles
* **Buttons:** Strict sharp edges. **NO rounded corners.** * *Primary CTA Class:* `bg-orange-600 text-white px-8 py-4 uppercase tracking-widest font-bold hover:bg-slate-900 transition-colors duration-300 rounded-none`
* **Cards:** Flat design, subtle shadows, crisp edges.
    * *Card Class:* `bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`

### D. Global Spacing Rules (The Wix Feel)
* **Macro Spacing (Between Sections):** Huge vertical padding. Always use `py-20 md:py-32` for standard sections.
* **Micro Spacing (Inside Elements):** Consistent gaps. Use `space-y-6` for text stacking, and `gap-8` or `gap-12` for grids.
* **Container Width:** Max width should be constrained but wide. Use `max-w-7xl mx-auto px-6 md:px-12`.

---

## 2. Layout & Architecture Details (By Section)

### Section 1: Navigation Bar
* **Layout:** Fixed top, sticky on scroll (`fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100`).
* **Spacing:** `py-4 px-6 md:px-12`. Flex container, space-between.
* **Brand:** "JITHESH V NAIR" - `font-black text-2xl tracking-tighter uppercase`. Subtitle underneath in small text: "Sports Physiotherapist".
* **Links:** `text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-orange-600 space-x-8`.

### Section 2: High-Impact Hero Section
* **Layout:** Split screen or Full-width background image with heavy overlay. Let's use a split layout to match modern sports clinics.
* **Left Column (Content):** `flex flex-col justify-center space-y-8 pr-10`.
* **Typography:**
    * Tagline: `text-orange-600 font-bold tracking-widest uppercase text-sm` ("Reg.No: L-13948 • MIAP").
    * H1: `text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter text-slate-900`. ("RECOVER. REBUILD. PERFORM.")
    * Subtext: `text-lg text-gray-600 max-w-lg`.
* **Right Column (Image):** High-quality placeholder image of sports therapy, full height (`h-[600px] object-cover`).

### Section 3: The "Treatments" Grid (Services)
* **Background:** `bg-gray-50 py-24`.
* **Header:** Center aligned. H2 `text-4xl font-black uppercase`. Small orange dividing line underneath (`w-16 h-1 bg-orange-600 mx-auto mt-6`).
* **Grid Layout:** `grid grid-cols-1 md:grid-cols-3 gap-8 mt-16`.
* **Card Design:** See *Component Styles*. Each card needs a minimal SVG icon (e.g., knee, spine, abstract muscle), an `h3` (`text-xl font-bold uppercase`), and a paragraph (`text-gray-500 text-sm`).
    * *Card 1:* Sports Therapy & Training
    * *Card 2:* Orthopedic Manual Therapy (COMT)
    * *Card 3:* Fascial Manipulation (Stecco)
    * *Card 4:* Dry Needling
    * *Card 5:* IASTM
    * *Card 6:* Ergonomic Interventions

### Section 4: Credentials & Expertise (Data Injection)
* **Vibe:** This is where the client's visiting card data goes. It needs to look highly authoritative.
* **Background:** Dark mode. `bg-slate-900 text-white py-24`.
* **Layout:** 2-column grid. Left side: "Meet Your Therapist" text. Right side: A dense, organized grid of his credentials.
* **Credentials List Styling:** Do not just make a bulleted list. Use a `grid grid-cols-1 md:grid-cols-2 gap-4`.
* **List Items:** Each item should be a `flex items-start space-x-3 p-4 bg-slate-800/50 border-l-4 border-orange-600`.
* **Data to map into the list:**
    1.  MPT (Ortho)
    2.  P.G. Dip. in Sports Therapy & Training (PGDSST)
    3.  Fellowship in Ortho. Rehab (FOR) (Apollo)
    4.  Fellowship in Sports Sciences (FSS) (Apollo)
    5.  Certified Dry Needling Practitioner CDNP (South Africa)
    6.  Certificate in Ergonomics (Sweden)
    7.  Certificate in Orthopedic Manual Therapy COMT (UK)
    8.  Certificate in IASTM (UK)
    9.  Fascial Manipulation Practitioner FM (Stecco, Italy)

### Section 5: Footer / Final CTA
* **Layout:** Massive CTA banner (`bg-orange-600 text-white py-20 text-center flex flex-col items-center justify-center space-y-8`).
* **Text:** H2 `text-5xl font-black uppercase`. ("Ready to get back in the game?")
* **Button:** Inverted style (`bg-slate-900 text-white hover:bg-white hover:text-slate-900`).

### Section 2.5: About the Therapist (With Certificate Showcase)
* **Layout:** `py-24 bg-white`. Two-column grid (`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6`).
* **Left Column (Image):** A strong, professional portrait of Jithesh V Nair in a clinical or sports setting. Image styling: `w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl`.
* **Right Column (Bio & Certificates):**
    * **Heading:** H2 `text-5xl font-black uppercase text-slate-900 tracking-tighter`. ("Global Expertise. Elite Recovery.")
    * **Bio Text:** `text-gray-600 leading-relaxed mt-6 mb-8 text-lg`. (Draft placeholder: "With extensive training across the globe, Jithesh V Nair brings elite, evidence-based sports physiotherapy to every patient...")
    * **The Certificate Showcase (Tags/Badges):**
        * **Container:** `flex flex-wrap gap-3 mt-8`.
        * **Badge Styling:** `px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-sm`. (Using sharp corners `rounded-sm` or `rounded-none` to keep the athletic feel).
        * **Data to Map as Badges:**
            * MPT (Ortho)
            * PGD Sports Therapy
            * FOR (Apollo)
            * FSS (Apollo)
            * CDNP (South Africa)
            * Ergonomics (Sweden)
            * COMT (UK)
            * IASTM (UK)
            * Fascial Manipulation (Italy)

## 3. Execution Prompt for AI Generator
"Generate a fully responsive, single-page HTML file using Tailwind CSS via CDN. Implement the exact typography, color scheme, spacing rules, and section layouts defined above. Ensure the design perfectly mimics a high-end, modern sports injury clinic with aggressive, athletic fonts, square buttons, and massive padding between sections. Use placeholder images via Unsplash source for sports physiotherapy. Integrate the provided list of medical credentials exactly as instructed in the dark-themed section."