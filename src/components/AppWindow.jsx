// src/components/AppWindow.jsx

import React from "react";
import useAppStore from "../store/appStore";
import Services from "./apps/Services";
import Portfolio from "./apps/Portfolio";
import Contact from "./apps/Contact";

export default function AppWindow() {
  const { activeApp } = useAppStore();

  const renderApp = () => {
    switch (activeApp) {
      case "services":
        return <Services />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <Services />;
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center pointer-events-none">
      <div className="w-[90%] h-[80%] bg-black/60 backdrop-blur-xl border-2 border-red-500 rounded-2xl shadow-[0_0_60px_red] p-6 overflow-hidden pointer-events-auto">
        {renderApp()}
      </div>
    </div>
  );
}
