import { useRef, useEffect } from "react";

export const UnControlledComp = () => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus(); // Automatically focus input on mount (best practice).
        }

        return () => {
            // Cleanup if needed (best practice).
            console.log("Component unmounted, cleanup here");
        };
    }, []);

    const handleLog = () => {
        if (ref.current) {
            console.log(ref.current.value, "ref.current/value");
        }
    };

    return (
        <div style={{ display: "flex" }}>
            <label htmlFor="input">Enter Value:</label>
            <input id="input" ref={ref} aria-label="Input for logging"></input>
            <button onClick={handleLog}>Log input Values</button>
        </div>
    );
};

/**
 * 📝 Senior-Level React Interview Notes:
 *
 * ✅ 1. Uncontrolled Components:
 *    - Uncontrolled: Input state is managed by the DOM (via refs).
 *    - **When to use Controlled?**
 *      - Form validation, dynamic input control, sync state with input.
 *    - **When to use Uncontrolled?**
 *      - Performance optimization for static forms, third-party libraries.
 *
 * ✅ 2. useRef Hook:
 *    - useRef creates a mutable reference object (`{ current: value }`).
 *    - **When to use?**
 *      - Access DOM elements (like inputs, videos).
 *      - Store mutable values without causing re-renders.
 *      - Hold previous values (in combination with useEffect).
 *
 * ✅ 3. Performance Considerations:
 *    - Avoids re-renders when reading DOM values directly.
 *    - Ideal for large-scale forms where re-renders are expensive.
 *    - Avoid ref misuse—don’t use for derived state or complex logic.
 *
 * ✅ 4. Type Safety (TypeScript Best Practices):
 *    - Correct ref typing: `useRef<HTMLInputElement>(null)`.
 *    - Ensure `ref.current` is not null before accessing its properties.
 *
 * ✅ 5. Accessibility (a11y Considerations):
 *    - Always pair input with a label for accessibility.
 *    - Consider `aria-*` attributes if enhancing usability (e.g., `aria-label`).
 *    - Ensure focus management (e.g., auto-focus for user convenience).
 *
 * ✅ 6. Testing Uncontrolled Components:
 *    - Use **React Testing Library** for interacting with refs.
 *    - Simulate user events via `fireEvent` or `userEvent`.
 *    - Validate DOM value access via `ref.current`.
 *
 * ✅ 7. Common Pitfalls:
 *    - Accessing `ref.current` before it’s mounted results in `null`.
 *    - Avoid managing core application state via refs (useState is better).
 *    - Improper cleanup can lead to memory leaks (always clean up).
 *
 * ✅ 8. Best Practices:
 *    - Use uncontrolled components for simple, static forms to improve performance.
 *    - Ensure proper cleanup if refs hold external resources.
 *    - Combine `useRef` with `useEffect` for lifecycle-specific behaviors.
 *    - Prefer controlled components if form data needs to sync with React state.
 *    - Always validate `ref.current` before accessing its properties.
 */
