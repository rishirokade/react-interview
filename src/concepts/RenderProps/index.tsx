import { RoleAsRenderProps } from "./RoleAsRenderProps";

export const RenderProps = () => {
    return (
        <div>
            <RoleAsRenderProps>
                {({ role }) => {
                    switch (role) {
                        case "user":
                            return <UserComp></UserComp>;
                        case "clint":
                            return <ClintAComp></ClintAComp>;
                        case "owner":
                            return <OwnerComp></OwnerComp>;
                        case "admin":
                            return <AdminComp></AdminComp>;
                        case "subAdmin":
                            return <SubAdminComp></SubAdminComp>;
                        default:
                            return <UserComp></UserComp>;
                    }
                }}
            </RoleAsRenderProps>
        </div>
    );
};

const ClintAComp = () => {
    return <div>ClintAComp</div>;
};

const OwnerComp = () => {
    return <div>OwnerComp</div>;
};

const AdminComp = () => {
    return <div>AdminComp</div>;
};
const SubAdminComp = () => {
    return <div>SubAdminComp</div>;
};

const UserComp = () => {
    return <div>UserComp</div>;
};

/**
 * . Render Props Pattern (In-depth Explanation):
 *    - **Definition:**
 *      - A technique where a prop (usually a function) is passed to a component to determine what to render.
 *    - **Purpose:**
 *      - Share component logic while maintaining control over the output.
 *    - **Advantages:**
 *      - Allows code reuse while providing flexibility.
 *      - Avoids the limitations of traditional component composition.
 *      - Enhances separation of concerns between logic and presentation.
 *    - **Use Cases:**
 *      - Dynamic role-based rendering (like in this example).
 *      - Data fetching and UI binding (e.g., passing loading and data states).
 *      - Feature toggling (conditionally render based on feature flags).
 *    - **Alternative Approaches:**
 *      - Higher-Order Components (HOCs): Wraps components to enhance functionality.
 *      - Hooks: For logic sharing in functional components (preferable in modern React).
 *    - **When to Use Render Props:**
 *      - When you need to share complex logic between components while maintaining rendering control.
 *      - When HOCs add too much abstraction or reduce component clarity.
 *
 * . Extensions and Use Cases:
 *    - Use for dynamic permission-based rendering (admin/user views).
 *    - Can be extended to provide multiple dynamic props via render function.
 */
