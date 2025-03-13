import { useCallback, useState } from "react";

export const role = ["admin", "user", "subAdmin", "owner", "clintA"];

const getRandomValueFromArray = () => {
    const index = Math.floor(Math.random() * role.length);
    return role[index];
};

// hype2222 dominos

export const RoleAsRenderProps = ({
    children,
}: {
    children: (props: { role: string }) => React.ReactElement;
}) => {
    const [newRole, setNewRole] = useState("admin");
    // Memoize the role update function for better performance
    const handleNewRoleClick = useCallback(() => {
        setNewRole(getRandomValueFromArray());
    }, []);

    return (
        <div>
            <button onClick={handleNewRoleClick}>Change Role</button>
            {typeof children === "function" && children({ role: newRole })}
        </div>
    );
};
