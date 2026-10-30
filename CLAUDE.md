# Portfolio — marcelosias.vercel.app

React 19 + Vite + Motion app in `portfolio/`. Pushing `main` deploys to Vercel — ask before pushing.
Career context (verified CV facts, CV file locations) lives in the memory files listed in `~/.claude/CLAUDE.md`; read them first.

## Where things live

- All content: `portfolio/src/data/profile.ts` — bilingual `tx(en, es)` entries. UI copy: `portfolio/src/data/ui.ts`.
- Downloadable CV: `portfolio/public/Marcelo_Sias_Resume.pdf`. Every download button reads `profile.resume`; replace the file and keep the name.
- Project images: `portfolio/public/projects/<project>/`. iPhone screens are JPG, 828 px wide.
- A project with `gallery` (screens + 3 `cover` indexes) renders the clickable iPhone gallery; `wide: true` spans the full row. Keep non-wide cards in pairs so none sits alone.

## The CV is the source of truth

The site mirrors the current CV: `~/Documents/07 CV/jake resume template/Mongo DB 27 Oct 2026/Marcelo_Sias_SWE_Intern_Resume.pdf` (Oct 27 2026, PDF only — no editable source).

- Bullets follow the CV's facts and wording; the site may add technical detail that has been verified in code, never new claims.
- Skills use the CV's groups: Languages · Databases & cloud · Frameworks & tools · Spoken.
- Site-only items Marcelo chose to keep: **Lūma**, **Premio FRISA**, **French (B2 · DELF)**, **IELTS** label. Ask before removing anything else that isn't on the CV, and ask before adding anything not on the CV.
- Removed on purpose (don't bring back without asking): SEITC Project Coordinator, Sociedad Sobresaliente bullet, Data Science Club certificates, IBM discovery-sessions and labs bullets, CorAI team results (97.4% AFDB, USD 50–80), Mabe MIRA/TraceFlow bullets, LeRe infra detail, MATLAB/Assembly.
- Key facts: Cerca pitch ranked **#1 of 24 ideas**, 4-person team; GPA 3.8/4.0; graduation expected Dec 2027.
- Not on the site yet (offered, not decided): CV's "open to relocate: New York · Austin · San Francisco".

## Capturing real iOS screens (as done for Trionda)

Trionda source: `~/Downloads/Trionda-iOSChallenge--main` (team project; backup in `~/Documents/old/trionda-backup`).

1. Copy the project to a scratch folder — never patch the original.
2. `export DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer` (xcode-select points at Command Line Tools).
3. Build: `xcodebuild -project Trionda.xcodeproj -scheme Trionda -destination 'platform=iOS Simulator,name=iPhone 18 Pro' -derivedDataPath <dd> CODE_SIGNING_ALLOWED=NO build`.
4. In the copy, add a launch-argument switch in the App struct (`UserDefaults.standard.string(forKey: "shot")`) that shows one screen directly; launch with `xcrun simctl launch <udid> <bundle id> -shot <name>`.
5. `simctl status_bar … override --time 9:41`, grant location with `simctl privacy`, set defaults to skip onboarding, then `simctl io <udid> screenshot`.
6. Stuck system alerts (e.g. notification prompt) survive reinstall — shut down and reboot the simulator to clear them.
7. Convert: `sips -s format jpeg --resampleWidth 828`.

Foundation Models works in the simulator on this Mac. Camera features (flag detector, translator) can't be captured.

## Checking the site visually

Headless screenshots don't work past the hero: sections animate in on scroll and the hero is full-height. Check with `npm run dev` in `portfolio/`, or ask Marcelo to look.

## Status (2026-10-30)

Site synced to the Oct 27 CV, Lūma restored, Trionda gallery with real screens and technical bullets — merged into `main` locally, not pushed yet.
