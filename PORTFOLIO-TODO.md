# Portfolio: What's Next

Running checklist of assets still needed and content still to confirm before the
`portfolio-upgrade` branch merges to `main` (the live GitHub Pages site).

How assets work: drop a file into `public/` (or a subfolder), then reference it in
[`src/config.ts`](src/config.ts) with a path starting with `/` and **without** `/Portfolio`
(the base path is added automatically). Names: lowercase, hyphens, no spaces.

---

## 1. Blocking (a feature is wired but the file is missing, so it 404s today)

These two features are built and live in the code, but the actual files are not in the
repo yet. Until they land, the "Read the full report" button and embedded viewer will
show a blank/failed frame.

- [ ] **CFD report PDFs** -> drop into `public/reports/` with these exact names:
  - `cfd-hw3a-high-re-cavity.pdf`  (the "High Re Incompressible Flow" / lid-driven cavity report)
  - `cfd-hw4-cessna-172.pdf`       (the "Cessna 172 Airfoil" report)
  - Wired on: `/projects/cfd-lid-driven-cavity` and `/projects/cfd-cessna-172-airfoil`.

- [ ] **DAPS lab photos** -> drop into `public/projects/`, then I (or you) add a `src:` to each
      entry under the `daps-ceramics` project in `config.ts`. Suggested names:
  - `daps-sem-1.jpg`          -> "SEM micrograph, boron ceramic sample"
  - `daps-sem-2.jpg`          -> "SEM micrograph, microstructure detail"
  - `daps-presentation-1.jpg` -> "Figure from the connected research presentation"
  - NOTE: `public/` currently holds only the logos (`daps.png` is the lab **logo**, not a lab
    photo). No DAPS photos are in the repo yet, so tell me where they are or drop them in
    and I'll wire the `src:` lines.

---

## 2. Photos still shown as placeholders (site works, just no image yet)

Each is a labeled placeholder until a `src:` is added. Drop files in `public/projects/`.

- [ ] **Endless Garden capstone** (3D model section removed; now relies on photos):
  - "3D printed plug refill mechanism"
  - "CAD render, plug refill rail and door system"
  - "Assembled prototype"
- [ ] **Renter-Friendly Desk:** static FEA, buckling FEA, gear analysis, final 3D-printed prototype
- [ ] **CFD - Turbulent Pipe Flow:** centerline velocity, wall shear stress, mesh independence, model comparison
- [ ] **CFD - Cessna 172:** mesh, static pressure field, velocity streamlines/contour, lift & drag histories
- [ ] **CFD - Lid-Driven Cavity:** Re=400 residuals, Re=100 pathlines, Re=1000 profile, Re=10,000 pathlines, turbulence comparison

## 3. Other placeholder assets

- [ ] **Resume PDF** -> drop the real file at `public/resume.pdf` (the header + contact "Resume"
      buttons currently link to a file that 404s).
- [x] **Hero photo** -> wired to `public/victor.jpg` (file present).

---

## 4. Content to confirm before going live

- [ ] **Endless Garden role breakdown** — the project note says the exact per-teammate role
      split is "to be confirmed." Confirm or remove that caveat.
- [ ] **Cessna 172 lift sign** — the report itself flags that lift coefficient trends the
      "wrong" way with angle of attack, pointing to a solver sign/reference-frame convention.
      Confirm the convention before treating those numbers as physical.
- [ ] **Turbulent Pipe Flow report** — if you want that one readable in-site too, send the PDF
      and I'll add a `reportUrl` and embed it the same way as the other two CFD projects.

---

## 5. Done this pass

- Added an embedded, in-site PDF report viewer + "Read the full report" button to any project
  with a `reportUrl` (wired for both provided CFD reports).
- Added a new ANSYS project page for the High-Re Lid-Driven Cavity (HW 3A) benchmark, built
  from the report text.
- Removed the 3D model section from the Endless Garden capstone (component + wiring deleted);
  the capstone now shows its photo gallery instead.
- Wired the hero photo.
