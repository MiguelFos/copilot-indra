# Copilot Instructions

## Project Overview
This project is a simple static web application using plain HTML, CSS and JavaScript.
The current page is called "Rincón Creativo" and is opened directly from `index.html`.

## Project Structure
- `index.html` contains the page structure and Spanish user-facing content.
- `styles.css` contains the visual design, layout and responsive rules.
- `script.js` contains the inspiration button and analog clock behavior.
- `README.md` contains the project documentation.

Do not introduce a framework, build tool or dependency unless the user explicitly requests it.

## Rules and Guidelines
1. **Code Style**: Follow the existing code formatting and naming conventions. Use camelCase and English for variable and function names. Avoid abbreviations unless they are widely recognised.
2. User-facing text should be in Spanish, while code, selectors, identifiers and technical comments should be in English.
3. Keep HTML semantic and accessible. Use meaningful landmarks, heading order, labels and `aria` attributes when they improve the experience.
4. Keep the layout responsive for desktop and mobile. Reuse the existing CSS variables, typography and color palette before adding new styles.
5. Keep JavaScript small and dependency-free. Use `const` by default, avoid global variables, and update the DOM only where interaction requires it.
6. Preserve existing functionality, links and IDs unless the requested change requires an intentional update.
7. Validate edited files with the available editor diagnostics and, when possible, open `index.html` in a browser to verify the visual result.
8. Update `README.md` when adding a user-visible feature or changing how the project is used.