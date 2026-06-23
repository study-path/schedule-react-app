const ToggleMode = (props) => {
  const { isDarkMode, onToggle } = props;
  return (
    <>
      <div>The Mode is {isDarkMode ? "🌙" : "☀️ "}</div>
      <button
        className="bg-green-400 border-2 border-green-600 lack mx-2 rounded-xl p-1"
        onClick={() => onToggle((prev) => !prev)}
      >
        Switch Mode
      </button>
    </>
  );
};
export default ToggleMode;
