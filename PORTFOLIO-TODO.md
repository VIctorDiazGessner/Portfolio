# Portfolio: What's Next

Running checklist of assets still needed and content still to confirm before the
`portfolio-upgrade` branch merges to `main` (the live GitHub Pages site).

How assets work: drop a file into `public/` (or a subfolder), then reference it in
[`src/config.ts`](src/config.ts) with a path starting with `/` and **without** `/Portfolio`
(the base path is added automatically). Filenames are **case-sensitive** on GitHub Pages,
match them exactly.

Asset folder: `public/reports/`  (full path: `C:\Users\linux\OneDrive\Documents\GitHub\Portfolio\public\reports`)

---

## 1. Still needed / optional

- [ ] **Remaining Endless Garden UI screens** (optional). Four of the eight LCD screens are on
      the page (intro, harvest, pH, water). Drop the other four in `public/reports/` if you want
      them shown too, and I'll wire them.

## 2. Content to confirm before going live

- [ ] **Endless Garden role breakdown** — the project note says the exact per-teammate role
      split is "to be confirmed." Confirm or remove that caveat.
- [ ] **Cessna 172 lift sign** — the report itself flags that lift coefficient trends the
      "wrong" way with angle of attack, pointing to a solver sign/reference-frame convention.
      Confirm the convention before treating those numbers as physical.

---

## Done

- Wired the real **CV/resume** (`victor-diaz-gessner-cv.pdf`) to the header + contact buttons,
  and updated the **favicon** to `favicon.jpg`.
- Embedded, in-site PDF report viewer + "Read the full report" button on every project with a
  `reportUrl`: **Cessna 172**, **Lid-Driven Cavity**, **Renter-Friendly Desk**, and the
  **Endless Garden** exec summary.
- **DAPS:** added the total-density-normalization figure and gave all four photos descriptive
  captions (density screening, SEM lattice alignment, SEM inconsistency, Rhode Island results).
- **Endless Garden:** wired the real build photos (full CAD, assembled prototype) and four LCD
  UI screens; added the UI/display story to My Contributions (100+ hrs on a third-party screen,
  the two-weeks-out decision to switch to a first-party Arduino display, ~40 hrs of refinement)
  and updated the role note to credit the UI to Victor. Desk report PDF reduced to ~2.7 MB.
- Added the **High-Re Lid-Driven Cavity** ANSYS project (HW 3A), built from the report.
- **Removed the Turbulent Pipe Flow Validation** ANSYS project entirely.
- **Removed the image placeholders on the ANSYS projects** (readers see the figures in the
  embedded report instead).
- **Renter-Friendly Desk:** embedded the design report PDF and replaced the four placeholders
  with the two real images (`DESK-CAD.jpg`, `desk-FEA-bending.jpg`).
- **DAPS:** wired the three real lab photos (`daps-ceramics-sem-1/2.jpg`, `daps-presenation-1.jpg`).
- Removed the Endless Garden 3D model section; capstone now shows its photo gallery.
- Wired the hero photo (`public/victor.jpg`).
