"use client";

import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // No longer returning null to allow SSR
  // if (!isMounted) return null;

  return (
    <MotionConfig transition={{ duration: 0 }}>
      {children}
    </MotionConfig>
  );
}
