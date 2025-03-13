import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import "./Modal.css";

export const Modal = ({
    open,
    close,
    children,
}: {
    open: boolean;
    close: () => void;
    children: React.ReactNode;
}) => {
    const [isVisible, setIsVisible] = useState(open);

    useEffect(() => {
        if (open) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 800); // Delay unmounting for animation
            return () => clearTimeout(timer);
        }
    }, [open]);

    if (!isVisible) {
        return null;
    }

    return ReactDOM.createPortal(
        <div
            className={`modal-overlay ${open ? "open" : "close"}`}
            onClick={close}
        >
            <div
                className={`modal-content ${open ? "open" : "close"}`}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {children}
                <button className="modal-close-button" onClick={close}>
                    Close
                </button>
            </div>
        </div>,
        document.getElementById("react-portal") as unknown as DocumentFragment
    );
};
