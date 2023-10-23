function ThemeChange(props) {
  const backgroundColor = props.isDarkMode ? "gray" : "white";
  const textColor = props.isDarkMode ? "white" : "black";

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: "10px",
      }}
    >
      {props.isDarkMode ? (
        <p>Modo Noturno Ativado</p>
      ) : (
        <p>Modo Claro Ativado</p>
      )}
    </div>
  );
}
export default ThemeChange;


// -------------
// function App() {
//   const isDark = true;
//   return (
//     <div className="App">
//       <ThemeChange isDarkMode={isDark} />
//     </div>
//   );
// }