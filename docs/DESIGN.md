# Design — Customer Registration

## 1. Design Goals

Create a clean, modern, friendly, and professional customer registration interface.

The design must prioritize readability, usability, accessibility, and responsiveness.

## 2. Visual Identity

### Colors

Use a soft blue and gray color palette.

- Primary: soft blue for buttons and interactive elements.
- Primary Hover: a darker blue for hover states.
- Background: very light gray.
- Surface: white for the main form card.
- Text: dark gray for primary content.
- Secondary Text: medium gray for descriptions and supporting information.
- Border: light gray for inputs and separators.
- Success: green for successful submission messages.
- Error: red for validation errors.

Use Tailwind CSS utility classes rather than creating unnecessary custom CSS.

### Typography

- Font Family: Nunito Sans.
- Headings: bold, dark gray, with clear visual hierarchy.
- Body Text: regular weight with comfortable line spacing.
- Labels: medium weight for readability.
- Validation Messages: small, readable text with sufficient contrast.

## 3. Page Layout

- Center the registration card horizontally.
- Use a light gray page background.
- Keep the card white with rounded corners and a subtle shadow.
- Apply consistent spacing between sections and form fields.
- Set a reasonable maximum width for the card.
- On smaller screens, allow the card to use the available width with appropriate side padding.

## 4. Form Layout

### Header

Display a title in Brazilian Portuguese:

**Cadastro de Cliente**

Include a short description explaining that the form collects customer and address information.

### Customer Information

Organize the fields in a logical order:

1. Nome completo
2. E-mail
3. CPF
4. CNPJ
5. Razão social

CPF and CNPJ must remain visible at all times.

### Address Information

Group address fields in a separate section with a heading:

**Endereço**

Display the following fields:

1. CEP
2. Rua
3. Número
4. Cidade
5. Estado (UF)

The CEP field should provide clear feedback while an address lookup is in progress or when the lookup fails.

### Actions

- Display a prominent primary button labeled **Cadastrar**.
- Make the button easy to identify and use on touchscreens.
- Show a success message after valid submission.
- Display validation messages close to their corresponding fields.

## 5. Responsive Behavior

### Mobile

- Use a single-column form layout.
- Keep fields and buttons within the viewport.
- Make the primary button full width when appropriate.
- Provide enough spacing for comfortable touch interaction.
- Avoid horizontal scrolling.

### Tablet

- Use a balanced layout with two columns when sufficient space is available.
- Keep related fields visually grouped.

### Desktop

- Center the card with a comfortable maximum width.
- Use two columns for suitable fields to reduce unnecessary vertical scrolling.
- Keep the reading order logical and predictable.

Responsive behavior must be implemented using Tailwind CSS v4 breakpoints.

## 6. Form Controls

### Inputs

- Use consistent heights, padding, borders, and corner radii.
- Provide a visible focus state.
- Use clear placeholder examples only when helpful.
- Do not rely on placeholders as substitutes for labels.
- Ensure disabled, invalid, and focused states remain distinguishable.

### Buttons

- Use the primary blue color for the main action.
- Provide visible hover and keyboard focus states.
- Use a pointer cursor for interactive elements.
- Maintain sufficient contrast between text and background.

## 7. Validation and Feedback

- Display all user-facing messages in Brazilian Portuguese.
- Place field-specific errors near the corresponding inputs.
- Use text in addition to color to communicate errors.
- Display a clear success message after valid submission.
- Keep feedback readable without causing unnecessary layout shifts.

## 8. Accessibility

- Use semantic HTML and properly associated labels.
- Preserve a logical keyboard navigation order.
- Ensure interactive elements have visible focus indicators.
- Use sufficient color contrast.
- Associate validation messages with their inputs when applicable.
- Do not communicate status using color alone.

## 9. Design Constraints

- Use HTML, vanilla JavaScript, and Tailwind CSS v4.
- Use Nunito Sans as the primary font.
- Do not introduce a frontend framework.
- Avoid unnecessary animations, decorative elements, and dependencies.
- Keep the interface simple, responsive, and easy to maintain.
