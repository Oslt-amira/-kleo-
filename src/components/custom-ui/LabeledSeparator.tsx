"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";

interface LabeledSeparatorProps {
  text: string;
}

const LabeledSeparator: React.FC<LabeledSeparatorProps> = ({ text }) => {
  return (
    <div className="flex items-center space-x-2 mt-6 mb-2">
      <span className="text-lg font-bold text-gray-900">{text}</span>
      <Separator
        orientation="horizontal"
        className="mx-1 h-0.5 w-[90%] bg-gray-500"
      />
    </div>
  );
};

export default LabeledSeparator;
