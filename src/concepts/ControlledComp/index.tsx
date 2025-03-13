import { useEffect, useState } from "react";

export const ControlledComp = () => {
    const [inputValue, setInputValue] = useState("");

    const setChangedValue = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value);

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    return (
        <div>
            <input value={inputValue} onChange={setChangedValue}></input>
        </div>
    );
};

/**
 * 📝 Senior-Level React Interview Notes:
 *
 * ✅ 1. Controlled vs Uncontrolled Components:
 *    - Controlled: Input state is managed by React (via useState).
 *    - Uncontrolled: Input state is managed by the DOM (via refs).
 *    - **When to use Controlled?**
 *      - Form validation, dynamic input control, sync state with input.
 *    - **When to use Uncontrolled?**
 *      - Performance optimization for static forms, third-party libraries.
 *
 * ✅ 2. Event Handling:
 *    - React uses **SyntheticEvent** for cross-browser compatibility.
 *    - **Why use e.target.value?**
 *      - Access the input value from the event object.
 *
 * ✅ 3. Performance Optimization:
 *    - Use **debouncing** (with lodash or custom) for high-frequency updates (e.g., search).
 *    - Use **React.memo** for preventing unnecessary re-renders of child components.
 *    - Consider **useCallback** if the `setChangedValue` function is passed as a prop.
 *
 * ✅ 4. Type Safety (TypeScript Best Practices):
 *    - Ensure event types: `React.ChangeEvent<HTMLInputElement>`.
 *    - Use proper typing for complex states: `useState<string>()`.
 *
 * ✅ 5. Accessibility (a11y Considerations):
 *    - Always include **labels** for form controls.
 *    - Consider **aria-* attributes** for better screen reader support.
 *
 * ✅ 6. Testing Controlled Components:
 *    - Use **React Testing Library** to simulate user input.
 *    - Assert the component updates correctly: `fireEvent.change()`.
 */
