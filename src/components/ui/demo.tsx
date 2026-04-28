import React from "react";
import ShaderBackground from "./shader-background";

const DemoOne = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <ShaderBackground />
      <h1 className="text-4xl font-bold text-slate-800 z-10 bg-white/50 p-4 rounded-xl backdrop-blur-sm">
        Shader Background Demo
      </h1>
    </div>
  );
};

export { DemoOne };
