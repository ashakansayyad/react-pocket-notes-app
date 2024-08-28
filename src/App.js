
import { ModalProvider } from "./contextapi/ModalContext";

import HomePage from "./page/HomePage";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ModalProvider>
        <HomePage />
      </ModalProvider>
    </div>
  );
}

export default App;
