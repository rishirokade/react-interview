<!--
    React.memo(): Use for function components, with a custom comparator if needed.
    PureComponent: Use for class components, automatically optimizes shallow comparisons.
    Deep Comparison: Use when dealing with nested objects or complex data.
    Avoid Over-Optimization: Always profile using React DevTools to find bottlenecks.

*Avoiding Over-Optimization in React
    While optimizing React applications with tools like React.memo() and PureComponent can improve performance, blindly applying these optimizations can backfire if not used properly.

*Let’s dive deeper into:
    Why over-optimization is harmful
    When to use memoization techniques
    How to identify real bottlenecks using React DevTools
    Practical strategies to optimize effectively

*Why Is Over-Optimization Harmful?
React is already optimized for rendering updates efficiently through its Virtual DOM. Unnecessary optimization can:
    - Increase complexity: Adding React.memo() and custom comparison functions make code harder to read and debug.
    - Worse performance: Comparing complex props (e.g., deep objects or arrays) requires computation that slows down rendering.
    - Maintenance issues: Custom equality checks in React.memo() and shouldComponentUpdate() require manual updates if the prop structure changes.

*Use React.memo() or PureComponent if:
    Static Props: The component gets unchanging props most of the time (e.g., configuration data).
    Expensive Components: Components that are computationally heavy to re-render (e.g., charts, large lists).
    Component Hierarchy: Frequently updating parent components that cause child components to re-render unnecessarily.

🚫 Avoid memoization if:
    Frequent Prop Changes: If props change often (e.g., time-based values, user inputs).
    Small Components: For lightweight components, React’s internal optimizations are usually faster than React.memo().
    Mutable Data: When using mutable objects (arrays, objects) without useMemo() or custom comparisons.
👉 Rule of Thumb: Optimize only if you have a proven performance issue.
 -->
