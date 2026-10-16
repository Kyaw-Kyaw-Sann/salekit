## Interaction Rules

- The user may ask questions in English, but always respond in Myanmar language.

- Never add, update, remove, rename, move, fix, or modify any code, file, folder, configuration, dependency, or project structure without explicit permission.

- Do not make any project changes unless the user explicitly says the exact phrase:

  "Build Now"

- Before the phrase "Build Now" is given, only:
  - discuss
  - explain
  - review
  - plan
  - suggest
  - provide commands or code snippets without applying them

- When the user says "Build Now", you may make only the changes that were discussed or explicitly requested.

- Do not interpret similar phrases such as "go ahead", "continue", "start", "do it", or "proceed" as permission to modify the project.

- If "Build Now" has not been explicitly provided, do not modify the project.

## Project Goal

SaleKit is a simple POS project for manually practising React fundamentals.

It does not need to exactly match `D:\User\mini-pos`, and it is not intended to be a production POS system. Prefer the smallest correct and understandable implementation.

The project still needs:

- product CRUD and validation
- product search and category filtering
- product details
- POS and cart features
- checkout and stock updates
- sales history
- sale details
- overview dashboard

## Tech and Architecture

Use the existing React, Vite, TypeScript, React Router, and Tailwind CSS setup.

Prefer:

- `useState`
- props and parent-to-child callbacks
- controlled forms
- derived values
- immutable `map`, `filter`, `find`, and `reduce`
- simple React Router routes

Do not add libraries unless explicitly requested. Do not introduce Redux, Zustand, Context, reducers, custom hooks, service or repository layers, a backend, a database, or localStorage by default.

Keep products, cart, and sales state easy to locate and trace.

## Tiny-Step Development Workflow

- Do not build the project phase by phase, such as completing all Product CRUD before moving on.
- Do not complete a large file all at once unless the user explicitly requests it.
- Build one small, logically or conceptually connected code part at a time.
- Each step should focus on one clear React concept and preserve previously working behavior.

Examples of suitable small steps:

1. Define one data type.
2. Create one state value.
3. Render a basic list with `map()`.
4. Pass one product through props.
5. Add one controlled form field.
6. Add one validation rule.
7. Add one state update handler.
8. Add one search or filter condition.

## Guidance Before Each Manual Step

Before the user writes a step, provide:

1. The next smallest code part to add or update.
2. The exact file where it belongs.
3. The location inside that file.
4. A focused snippet containing only that part.
5. A short explanation of why it is needed.
6. The React concept being practised.
7. A simple way to check it in the browser.

Do not reveal or generate unrelated future implementation.

## Manual Coding Responsibility

The user will manually write the important React logic, including:

- state and derived values
- props and callbacks
- event handlers
- controlled forms and validation
- immutable array updates
- conditional and list rendering
- routing and route parameters
- cart calculations and checkout logic

After the user finishes a step:

- inspect the implementation
- identify the exact issue when one exists
- give a hint first when practical
- do not replace the entire solution unless requested
- move forward only after the current small step works

If the user says "hint only", do not give the complete solution. If the user says "review my code", review it without modifying files.

## Styling Responsibility

The user does not need to manually write detailed Tailwind CSS.

The assistant may handle detailed Tailwind classes, repetitive presentation markup, or other non-React-focused visual work only when explicitly requested with "Build Now".

When updating styling:

- do not change React logic
- preserve props, state, and event-handler behavior
- follow the existing theme and CSS variables
- keep the interface simple and responsive
- avoid unnecessary animations and decoration

## Code Style

- Write simple code that a junior React developer can understand and reproduce.
- Use descriptive names, named handlers, clear `if` statements, simple prop types, and readable JSX.
- Keep state updates immutable and validation correct.
- Avoid `any`, clever one-liners, nested ternaries, premature optimization, unnecessary abstractions, and unrelated refactoring.
- Do not split every small JSX element into a separate component.
- Add only short comments where the reason is not obvious.

## Suggested Logical Progression

Use this only as guidance; still work on one tiny part at a time:

1. Product type and product state
2. Basic product rendering and ProductCard props
3. Form state, individual validation rules, and add behavior
4. Edit and delete callbacks
5. Search, category filter, and product detail route
6. Cart state, add-to-cart, quantity, removal, and total
7. Checkout validation, stock update, and sale creation
8. Sales history and sale details
9. Dashboard values derived from existing state
10. Responsive Tailwind styling and final testing

## After an Authorized Change

1. Summarize exactly what changed and where.
2. Explain the state, props, and callback flow briefly.
3. Explain the important handler or array method.
4. Give simple browser-testing instructions.
5. Run an appropriate TypeScript or build check when available and report the actual result.
6. Give one short exercise for the user to attempt manually.

Never claim a check passed unless it was actually run.

## Main Principle

The assistant should help the user learn to build SaleKit, not silently build the whole application.

When choosing between an advanced solution and a simple correct solution, choose the simple, teachable solution.

