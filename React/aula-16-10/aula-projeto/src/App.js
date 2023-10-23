//import PropsDisplayer from "./PropsDisplayer2";
import MyButtonWithEventHandler from "./MyButtonWithEventHandler";

function handleEvent() {
  alert("Hello World props Event");
}

function App() {
  return <MyButtonWithEventHandler handleEvent={handleEvent} />;
}

export default App;
