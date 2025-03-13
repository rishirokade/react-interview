import { useEffect, ReactNode } from "react";

interface HOCLogComponentProps {
    children: ReactNode;
}

export const HOCLogComponent = ({ children }: HOCLogComponentProps) => {
    useEffect(() => {
        console.log("Logged children:", children?.type?.name);
    }, [children]); // Logs when children change

    return <>{children}</>;
};

/**
 * 📝 Senior-Level React Interview Notes:
 *
 * ✅ Higher-Order Component (HOC) Overview:
 *    - A HOC is a function that takes a component and returns a new enhanced component.
 *    - Common use cases: logging, authentication, and performance optimization.
 *
 * ✅ When to Use HOCs:
 *    - Cross-cutting concerns (logging, permissions, caching).
 *    - Avoid repeating logic in multiple components.
 *
 * ✅ Performance Considerations:
 *    - Ensure dependency arrays in `useEffect` prevent unnecessary re-renders.
 *    - Consider using `React.memo` or `useMemo` when optimizing wrapped components.
 *
 * ✅ Alternatives to HOCs:
 *    - **Render Props**: For more dynamic composition.
 *    - **Custom Hooks**: Encapsulate reusable logic without wrapping components.
 */
