# AGENTS.md

## Project Overview

This project is a customer registration interface built with HTML, JavaScript, and Tailwind CSS v4.

The initial scope is frontend-only. Backend integration and database persistence are planned for a future phase using ASP.NET Core, Entity Framework Core, and MySQL.

## Language and Naming Conventions

- Write source code, filenames, variables, functions, and identifiers in English.
- Write all user-facing interface text in Brazilian Portuguese.
- Use clear, descriptive, and consistent names.
- Follow the existing project conventions whenever they are established.

## Documentation

Before implementing changes, read the relevant project documentation:

- `README.md` for setup and execution instructions.
- `docs/REQUIREMENTS.md` for functional requirements and acceptance criteria.
- `docs/DESIGN.md` for visual identity, responsive behavior, and accessibility.
- `docs/ARCHITECTURE.md` for technical decisions and project structure.

If documentation is missing, do not assume that its contents exist. Ask for clarification when a missing decision materially affects the implementation.

Keep documentation consistent with the actual project behavior. Update the relevant document when an approved requirement or technical decision changes.

## Technical Guidelines

- Use semantic HTML and accessible form controls.
- Use Tailwind CSS v4 compiled locally with the Tailwind CLI.
- Use vanilla JavaScript unless an additional dependency is explicitly approved.
- Do not introduce a frontend framework without approval.
- Keep the implementation simple, maintainable, and focused on the current scope.
- Avoid unnecessary dependencies, abstractions, and unrelated changes.
- Do not introduce backend code or database persistence during the initial phase.
- Do not use the Tailwind CSS CDN as the production styling solution.

## Functional Requirements

Follow `docs/REQUIREMENTS.md` for the authoritative customer registration rules.

The interface must support customer registration fields, CPF/CNPJ validation, automatic CEP lookup through ViaCEP, manual address editing, and demonstrative form submission.

The current implementation must not claim that customer data has been persisted.

## Design and Responsiveness

Follow `docs/DESIGN.md` for the approved visual guidelines.

The interface must adapt to mobile phones, tablets, and desktop screens without requiring manual resizing or producing unnecessary horizontal scrolling.

Preserve the approved visual identity and accessibility requirements when modifying the interface.

## Architecture and Future Integration

Follow `docs/ARCHITECTURE.md` for the current frontend structure and future integration boundaries.

Keep the frontend organized so that a future ASP.NET Core backend can receive customer data through an HTTP API.

Do not implement API calls for customer persistence until the backend contract has been defined and approved.

## Validation and Error Handling

- Validate user input in the browser.
- Display clear validation messages in Brazilian Portuguese.
- Handle invalid input and failed CEP lookups gracefully.
- Allow manual address entry when the CEP lookup fails.
- Never treat frontend validation as a replacement for future server-side validation.

## Quality Checks

Before considering a change complete:

- Verify the affected functionality.
- Check form validation and error messages.
- Test the layout at mobile, tablet, and desktop widths.
- Verify keyboard navigation and visible focus states.
- Confirm that the project builds successfully when applicable.
- Report any checks that could not be completed.

## Scope Control

Implement only the requested functionality.

Do not modify unrelated files, change approved requirements, add dependencies, or introduce infrastructure changes without justification and approval.

When a requirement conflicts with these instructions or the project documentation, identify the conflict and request clarification rather than silently choosing a different behavior.
