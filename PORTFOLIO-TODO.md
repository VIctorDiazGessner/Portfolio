# Portfolio: What's Next

Running checklist of assets still needed and content still to confirm before the
`portfolio-upgrade` branch merges to `main` (the live GitHub Pages site).

How assets work: drop a file into `public/` (or a subfolder), then reference it in
[`src/config.ts`](src/config.ts) with a path starting with `/` and **without** `/Portfolio`
(the base path is added automatically). Filenames are **case-sensitive** on GitHub Pages,
match them exactly.

Asset folder: `public/reports/`  (full path: `C:\Users\linux\OneDrive\Documents\GitHub\Portfolio\public\reports`)

---

## 1. Still needed

- [ ] **Endless Garden capstone photos** (the 3D model was removed, so these carry the project).
      Drop into `public/reports/` and I'll wire the `src:` lines. Currently placeholders:
  - "3D printed plug refill mechanism"
  - "CAD render, plug refill rail and door system"
  - "Assembled prototype"

## 2. Content to confirm before going live

- [ ] **Endless Garden role breakdown** — the project note says the exact per-teammate role
      split is "to be confirmed." Confirm or remove that caveat.
- [ ] **Cessna 172 lift sign** — the report itself flags that lift coefficient trends the
      "wrong" way with angle of attack, pointing to a solver sign/reference-frame convention.
      Confirm the convention before treating those numbers as physical.

## 3. Heads-up

- `Final-Design-Report-desk.pdf` is ~27 MB. It works, but it makes the repo heavy and the
  embedded viewer slow to load. Consider compressing it (e.g. a "reduced size" export) if you
  want faster page loads.

---

## Done

- Wired the real **CV/resume** (`victor-diaz-gessner-cv.pdf`) to the header + contact buttons,
  and updated the **favicon** to `favicon.jpg`.
- Embedded, in-site PDF report viewer + "Read the full report" button on every project with a
  `reportUrl`: **Cessna 172**, **Lid-Driven Cavity**, **Renter-Friendly Desk**, and the
  **Endless Garden** exec summary.
- **DAPS:** added the total-density-normalization figure and gave all four photos descriptive
  captions (density screening, SEM lattice alignment, SEM inconsistency, Rhode Island results).
- Added the **High-Re Lid-Driven Cavity** ANSYS project (HW 3A), built from the report.
- **Removed the Turbulent Pipe Flow Validation** ANSYS project entirely.
- **Removed the image placeholders on the ANSYS projects** (readers see the figures in the
  embedded report instead).
- **Renter-Friendly Desk:** embedded the design report PDF and replaced the four placeholders
  with the two real images (`DESK-CAD.jpg`, `desk-FEA-bending.jpg`).
- **DAPS:** wired the three real lab photos (`daps-ceramics-sem-1/2.jpg`, `daps-presenation-1.jpg`).
- Removed the Endless Garden 3D model section; capstone now shows its photo gallery.
- Wired the hero photo (`public/victor.jpg`).
