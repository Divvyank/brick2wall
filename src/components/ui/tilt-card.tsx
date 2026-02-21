"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export function TiltCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        // Calculate rotation (-10 to 10 degrees)
        const ry = ((x / width) - 0.5) * 20;
        const rx = ((y / height) - 0.5) * -20;

        setRotateX(rx);
        setRotateY(ry);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ rotateX: 0, rotateY: 0 }}
            animate={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            {children}
        </motion.div>
    );
}
