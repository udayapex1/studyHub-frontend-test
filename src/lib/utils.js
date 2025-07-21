export const BACKEND_URL = "https://studyhub-1djd.onrender.com"
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
