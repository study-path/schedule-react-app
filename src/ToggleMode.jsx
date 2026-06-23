const ToggleMode = (props) => {
  const { isDarkMode, onToggle } = props;
  return (
    <>
      The Mode is {isDarkMode ? "🌙" : "☀️ "}
      <button
        className="bg-green-400 border-2 border-green-600 lack mx-2 px-1 rounded-xl "
        onClick={() => onToggle((prev) => !prev)}
      >
        Switch Mode
      </button>
    </>
  );
};
export default ToggleMode;
