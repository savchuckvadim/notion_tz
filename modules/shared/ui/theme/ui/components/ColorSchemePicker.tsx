"use client";

import { useState, useRef, memo } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../../hook/useOutsideClick";
import { ColorScheme } from "../../provider/Theme";

const schemeList = [
    { value: "default", color: "#1E293B" },
    { value: "violet", color: "#8B5CF6" },
    { value: "red", color: "#EF4444" },
    { value: "beige", color: "#ffeacf" },
];

export const ColorSchemePicker = memo(
    ({
        scheme,
        setScheme,
    }: {
        scheme: ColorScheme;
        setScheme: (scheme: ColorScheme) => void;
    }) => {
        const [open, setOpen] = useState(false);
        const ref = useRef<HTMLDivElement>(null);

        useOutsideClick(ref, () => setOpen(false));

        return (
            <div className="relative" ref={ref}>
                <button
                    className="cursor-pointer hover:text-primary text-foreground p-2 rounded-md hover:bg-muted transition"
                    onClick={() => setOpen(!open)}
                    title="Выбрать цветовую схему"
                >
                    <Palette size={20} />
                </button>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute right-30 z-50 mt-2 w-48 p-4 bg-popover rounded-md shadow-lg grid grid-cols-4 gap-2"
                        >
                            {schemeList.map(({ value, color }) => (
                                <button
                                    key={value}
                                    className={`cursor-pointer w-8 h-8 rounded-full border-2 ${scheme === value ? "ring-2 ring-foreground" : ""}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => {
                                        debugger;
                                        setScheme(value as ColorScheme);
                                        setOpen(false);
                                    }}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    },
);
