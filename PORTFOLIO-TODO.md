# Portfolio: What's Next

Running checklist of assets still needed and content still to confirm before the
`portfolio-upgrade` branch merges to `main` (the live GitHub Pages site).

How assets work: drop a file into `public/` (or a subfolder), then reference it in
[`src/config.ts`](src/config.ts) with a path starting with `/` and **without** `/Portfolio`
(the base path is added automatically). Filenames are **case-sensitive** on GitHub Pages,
match them exactly.

Asset folder: `public/reports/`  (full path: `C:\Users\linux\OneDrive\Documents\GitHub\Portfolio\public\reports`)

---

## Outstanding

Nothing blocking. The `portfolio-upgrade` branch is ready to review for merge to `main`.

---

## Done

- Wired the real **CV/resume** (`victor-diaz-gessner-cv.pdf`) to the header + contact buttons,
  and updated the **favicon** to `favicon.jpg`.
- Embedded, in-site PDF report viewer + "Read the full report" button on every project with a
  `reportUrl`: **Cessna 172**, **Lid-Driven Cavity**, **Renter-Friendly Desk**, and the
  **Endless Garden** exec summary.
- **DAPS:** added the total-density-normalization figure and gave all four photos descriptive
  captions (density screening, SEM lattice alignment, SEM inconsistency, Rhode Island results).
- **Cessna 172:** updated the Outcome to the corrected results (lift now increases with angle
  of attack, matching the cambered-airfoil lift curve) and removed the sign-convention caveat.
- **Endless Garden:** wired the real build photos (full CAD, assembled prototype) plus two LCD
  UI screens as a taste of the 8-screen interface; rewrote My Contributions to Victor's exact
  role (IR harvest sensor, grow lights, LCD UI + Arduino, code integration, CAD contribution and
  build; plug dispenser as support to a teammate), including the display pivot story; trimmed the
  note to focus on Victor's role. Desk report PDF reduced to ~2.7 MB.
- Added the **High-Re Lid-Driven Cavity** ANSYS project (HW 3A), built from the report.
- **Removed the Turbulent Pipe Flow Validation** ANSYS project entirely.
- **Removed the image placeholders on the ANSYS projects** (readers see the figures in the
  embedded report instead).
- **Renter-Friendly Desk:** embedded the design report PDF and replaced the four placeholders
  with the two real images (`DESK-CAD.jpg`, `desk-FEA-bending.jpg`).
- **DAPS:** wired the three real lab photos (`daps-ceramics-sem-1/2.jpg`, `daps-presenation-1.jpg`).
- Removed the Endless Garden 3D model section; capstone now shows its photo gallery.
- Wired the hero photo (`public/victor.jpg`).
