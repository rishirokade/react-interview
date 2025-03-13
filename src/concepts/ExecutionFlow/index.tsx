import { useEffect, useLayoutEffect } from "react";

console.log("OutSide Component Code");

export const ExecutionFlow = () => {
    useEffect(() => {
        console.log("parent useEffect");
    }, []);
    useLayoutEffect(() => {
        console.log("parent useLayoutEffect");
    }, []);

    console.log("parent synchronous");

    return (
        <>
            <>{console.log("Parent JSX")}</>
            <ChildComponent />
            <NestedChildComponent />
        </>
    );
};

const ChildComponent = () => {
    useEffect(() => {
        console.log("Child useEffect");
    }, []);

    useLayoutEffect(() => {
        console.log("Child useLayoutEffect");
    }, []);

    console.log("Child synchronous");
    return (
        <div>
            ChildComponent
            <>{console.log("ChildComponent JSX")}</>
        </div>
    );
};
const NestedChildComponent = () => {
    useEffect(() => {
        console.log(" NestedChild useEffect");
    }, []);
    useLayoutEffect(() => {
        console.log("NestedChild useLayoutEffect");
    }, []);

    console.log(" NestedChild synchronous");
    return (
        <div>
            NestedChildComponent
            <>{console.log("NestedChildComponent JSX")}</>
        </div>
    );
};

/**
parent synchronous
Parent JSX

Child synchronous
ChildComponent JSX

NestedChild synchronous
NestedChildComponent JSX

Child useLayoutEffect
NestedChild useLayoutEffect
parent useLayoutEffect

Child useEffect
NestedChild useEffect
parent useEffect
 */
