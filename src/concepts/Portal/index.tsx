import { useState } from "react";
import { Modal } from "./Modal";

export const Portal = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setOpen(true);
                }}
            >
                CLICK ME!!
            </button>
            <Modal
                open={open}
                close={() => {
                    setOpen(false);
                }}
            >
                👁️
            </Modal>
        </div>
    );
};
