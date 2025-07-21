// utils/toast.js
import { toast } from "react-toastify";

export const showSuccess = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        onClose: () => {
            if (redirectFn) redirectFn();
        }
    });
};

export const showError = (message) => {
    toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
    });
};

export const showWarning = (message) => {
    toast.warn(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
    });
};

export const showInfo = (message) => {
    toast.info(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
    });
};
