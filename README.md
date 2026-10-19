# Customer Registration

Responsive customer registration interface built with HTML, vanilla JavaScript, and Tailwind CSS v4.

## Project Scope

The initial version implements the frontend only.

Customer data will not be persisted. Form submission will validate the fields, display a success message, and clear the form.

Future backend integration is planned with ASP.NET Core, Entity Framework Core, and MySQL.

## Requirements

- Node.js and npm
- Tailwind CSS v4
- Tailwind CSS CLI
- A local development server, such as VS Code Live Server

## Installation

Install the project dependencies:

```bash
npm install
```

## Development

Start the Tailwind CSS compiler in watch mode:

```bash
npm run dev
```

Keep the command running while developing.

Open `index.html` using a local development server, such as VS Code Live Server. Do not open the file directly using `file://`, because the CEP lookup requires browser HTTP requests.

## Production Build

Compile and minify the CSS:

```bash
npm run build
```

The generated stylesheet is located at `public/css/styles.css`.

The generated CSS file must not be edited manually.

## Documentation

- `AGENTS.md`: Instructions for AI-assisted development.
- `docs/REQUIREMENTS.md`: Functional requirements and acceptance criteria.
- `docs/DESIGN.md`: Visual identity, responsiveness, and accessibility.
- `docs/ARCHITECTURE.md`: Technical structure and future backend integration.

## Language and Naming

Source code, filenames, variables, and functions use English.

The user interface uses Brazilian Portuguese.

## Current Limitations

- No backend or database integration.
- No persistent customer records.
- CEP lookup requires an internet connection.
- Browser-side validation does not replace future server-side validation.
- The current submission process is demonstrative and does not save customer information.
