import "./App.css";

import ToggleMode from "./ToggleMode";
import { useState } from "react";
import ScheduleList from "./ScheduleList ";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={`${isDarkMode ? "bg-slate-800 text-white" : "bg-slate-300"}  transition-all`}
    >
      <ToggleMode isDarkMode={isDarkMode} onToggle={setIsDarkMode} />
      <div className="flex justify-center">
        <ScheduleList />
      </div>
    </div>
  );
}

export default App;
