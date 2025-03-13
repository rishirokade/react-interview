import "./App.css";
import { ControlledComp, PureComponent, UnControlledComp } from "./concepts";

function App() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <PureComponent />
            <UnControlledComp />
            <ControlledComp />
        </div>
    );
}

export default App;
