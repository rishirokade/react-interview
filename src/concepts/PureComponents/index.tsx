import React, { useState } from "react";

// Parent Component
export const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("IronMan");

    console.log("Parent re-rendered");

    return (
        <div>
            <h1>Parent Component</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setName("React Developer")}>
                Change Name
            </button>

            {/* Child component with memo */}
            <PureComponents name={name} count={count} />

            {/* NormalComponent */}
            <NormalComponent name={name} count={count} />
        </div>
    );
};

// Pure Component (Optimized with React.memo)
const NormalComponent = ({ name }: { name: string; count: number }) => {
    console.log("NormalComponent re-rendered");
    return <h2>Hii, {name} From NormalComponent!</h2>;
};

// Pure Component (Optimized with React.memo)
const PureComponents = React.memo(
    ({ name }: { name: string; count: number }) => {
        console.log("Child re-rendered");
        return <h2>Hii, {name} From PureComponent!</h2>;
    },
    (prevProps, nextProps) => {
        // Custom comparison logic
        return prevProps.name === nextProps.name; // Only re-render if "name" changes
    }
);

/**
 * add how we can add it with calassbased comp and also some extra info that is very useful for senior level interview
 */
