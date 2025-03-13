import { HOCLogComponent } from "./HOCLogComponent";

export const HOCComponent = () => {
    return (
        <div>
            <HOCLogComponent>
                <NormalComponent compId={"from HOCLogComponent"} />
            </HOCLogComponent>
            <NormalComponent compId={"outside from HOCLogComponent"} />
        </div>
    );
};

const NormalComponent: React.FC<{ compId: string }> = ({ compId }) => {
    return <div>{compId}welcome</div>;
};
