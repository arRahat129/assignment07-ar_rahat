"use client";
import TimelinesProvider from "@/components/context/timeline.context";
import React from "react";

const Providers = ({ children }) => {
  return <TimelinesProvider>
    {children}
  </TimelinesProvider>
};

export default Providers;