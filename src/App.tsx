import "./App.css";
import { HOCComponent } from "./concepts";
// import { ControlledComp, PureComponent, UnControlledComp } from "./concepts";

function App() {
    return (
        <div style={MainDivStyle}>
            {/* <PureComponent /> */}
            {/* <UnControlledComp /> */}
            {/* <ControlledComp /> */}
            {/* <ExecutionFlow></ExecutionFlow> */}
            <HOCComponent></HOCComponent>
        </div>
    );
}

const MainDivStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90vw",
    height: "90vh",
    margin: "20px",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: "5px 5px 5px black",
    padding: "12px",
};

export default App;
