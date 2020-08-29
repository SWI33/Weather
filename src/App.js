import React from "react";
import  Main  from "./components/MainComponent";
import styles from './MyStyles.module.css'
import 'weather-icons/css/weather-icons.css'


function App() {
  return (
    <div className={styles.backcolor}>
      <Main />
    </div>
  );
}


export default App;

