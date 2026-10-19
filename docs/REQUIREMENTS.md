# Requirements — Customer Registration

## 1. Purpose

Build a responsive customer registration form using HTML, vanilla JavaScript, and Tailwind CSS v4.

The initial version includes only the frontend. Customer data will not be saved to a database.

## 2. Functional Requirements

### FR-01 — Customer Information

The form must contain the following fields:

- Email
- Full Name
- Company Legal Name
- CPF
- CNPJ
- ZIP Code (CEP)
- Street
- Number
- City
- State (UF)

All fields are required except Number. Company Legal Name is conditionally required when CNPJ is provided.

### FR-02 — CPF and CNPJ

- CPF and CNPJ must always be visible.
- The user must provide either CPF or CNPJ, but not both.
- CPF must be validated using its check digits.
- CNPJ must be validated using its check digits.
- Both fields must support appropriate input masks.
- Invalid documents must display a clear validation message.

### FR-03 — Customer Type

- When CPF is provided, Company Legal Name is optional.
- When CNPJ is provided, Company Legal Name is required.
- The form must prevent submission when both CPF and CNPJ are provided or when both are empty.

### FR-04 — Email Validation

- Email is required.
- The form must validate the email format.
- Invalid email addresses must display a clear validation message.

### FR-05 — Full Name

- Full Name is required.
- Leading and trailing whitespace must be removed before validation.
- Empty or whitespace-only values must be rejected.

### FR-06 — ZIP Code Lookup

- The form must use ViaCEP to look up Brazilian addresses.
- When a valid CEP is found, Street, City, and State must be populated automatically.
- Automatically populated fields must remain editable.
- If the CEP is invalid, not found, or the service is unavailable, the user must be able to enter the address manually.
- Lookup failures must display a clear message without blocking manual entry.

### FR-07 — Address

- ZIP Code, Street, and City are required.
- State is required and must use the two-letter Brazilian state abbreviation.
- Number is optional.

### FR-08 — Form Submission

- The form must validate all applicable fields before submission.
- Validation errors must be displayed in Brazilian Portuguese.
- When all validations pass, the form must display a success message.
- After successful submission, the form must be cleared.
- No API submission, database persistence, or fake backend behavior must be implemented.

## 3. Non-Functional Requirements

### NFR-01 — Responsiveness

The form must work on mobile phones, tablets, laptops, and desktop screens without unnecessary horizontal scrolling.

### NFR-02 — Accessibility

- Use semantic HTML elements.
- Every field must have an associated label.
- The form must be usable with a keyboard.
- Focus indicators must remain visible.
- Validation messages must be understandable and associated with the relevant fields.

### NFR-03 — Maintainability

- Use HTML, vanilla JavaScript, and Tailwind CSS v4.
- Keep source code, filenames, variables, and functions in English.
- Display user-facing text in Brazilian Portuguese.
- Keep the implementation simple and avoid unnecessary dependencies.

### NFR-04 — Styling

- Compile Tailwind CSS locally using the Tailwind CLI.
- Do not use the Tailwind CDN in production.
- Use Nunito Sans and a soft blue and gray color palette.

## 4. Acceptance Criteria

The implementation is considered complete when:

- All specified fields are present.
- Required fields and conditional rules work correctly.
- CPF and CNPJ validation and masks work correctly.
- Email validation works correctly.
- CEP lookup populates the address and allows manual editing.
- CEP lookup failures do not prevent manual address entry.
- Successful submission displays a message and clears the form.
- Invalid submissions display appropriate validation messages.
- The interface works at mobile, tablet, and desktop widths.
- Keyboard navigation and visible focus indicators work correctly.
- No customer data is persisted or sent to a backend.
