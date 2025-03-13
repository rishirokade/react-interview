import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

export const AutomaticBatching = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("React");
    const [status, setStatus] = useState("Inactive");

    // ✅ Automatic Batching in React 18
    // log only 1 time
    const handleClick = () => {
        setCount((prev) => prev + 1);
        setName("React 18");
        setStatus("Active");
        // All state updates will be batched and cause a single re-render.
    };

    // ✅ Batch updates inside setTimeout (without automatic batching)
    // log only 3 time
    const handleAsyncUpdate = () => {
        setTimeout(() => {
            setCount((prev) => prev + 1);
            setName("Async Update");
            setStatus(status === "Updated" ? "complete" : "Updated");
            // React does not batch state updates inside setTimeout.
        }, 500);
    };

    // ✅ Fixing async batching using flushSync (forces synchronous updates)
    // log only 1 time
    const handleFlushSyncUpdate = () => {
        setTimeout(() => {
            flushSync(() => {
                setCount((prev) => prev + 1);
                setStatus("Forced Update");
            });
            flushSync(() => {
                setName("Flushed");
            });
        }, 1000);
    };

    // ✅ Observe render logs
    useEffect(() => {
        console.log("Component rendered!");
    });

    return (
        <div>
            <h2>Automatic Batching Example</h2>

            <p>Count: {count}</p>
            <p>Name: {name}</p>
            <p>Status: {status}</p>

            <button onClick={handleClick}>Batch Update (Auto)</button>
            <button onClick={handleAsyncUpdate}>Async Update (No Batch)</button>
            <button onClick={handleFlushSyncUpdate}>
                Flush Sync (Force Update)
            </button>
        </div>
    );
};

/**
 *
 * ✅ 1. Automatic Batching in React 18:
 *    - Multiple state updates in the same event are batched (combined into a single re-render).
 *    - Applies to event handlers, Promises, and asynchronous tasks.
 *
 * ✅ 2. Async Updates & setTimeout Behavior:
 *    - React does NOT automatically batch updates inside setTimeout or native async calls.
 *    - To fix this, use `flushSync()` from 'react-dom'.
 *
 * ✅ 3. flushSync Usage:
 *    - Forces synchronous DOM updates immediately.
 *    - Useful when you need precise timing control.
 *
 * ✅ 4. Best Practices:
 *    - Prefer automatic batching for performance benefits.
 *    - Use `flushSync` only when strict synchronous updates are necessary.
 *
 * ✅ 5. Real-World Use Cases:
 *    - Batching improves performance for high-frequency updates (e.g., form inputs).
 *    - Flush sync for immediate feedback (e.g., showing loading spinners).
 */
