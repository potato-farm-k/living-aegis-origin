# Decision Log

## 2026-06-23 - Use This Repository for the Main Game

Decision: `living-aegis-origin` is the main game repository.

Reason: The main game needs a stable starting point with a clear file structure and a static entry page. Keeping this repository focused reduces confusion during future iterations.

## 2026-06-23 - Keep Prototype and Simulator Work Separate

Decision: Prototype and simulator experiments belong in separate repositories.

Reason: Experimental work can move quickly and change direction often. Keeping it outside the main game repository protects the main project from accidental scope growth and unrelated implementation details.

Related repositories:

- `living-aegis-prototype`
- `living-aegis-simulator`

## 2026-06-23 - Start with GitHub Pages and Canvas 2D

Decision: Begin with static HTML, CSS, JavaScript, and Canvas 2D.

Reason: This keeps the project easy to open locally, easy to publish with GitHub Pages, and free of build tools or external dependencies during the initial scaffold.
