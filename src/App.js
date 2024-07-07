import './App.css';
import buttonText from "./util/Const";
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        tg.ready();
    }, []);
    const onClose = () => {
        tg.close();
    };

  return (
    <div className="App">
        <button onClick={onClose}>{buttonText.close}</button>
    </div>
  );
}

export default App;
