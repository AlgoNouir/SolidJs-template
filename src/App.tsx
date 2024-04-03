import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class="flex items-center justify-center h-screen w-screen">
      <h1 class="font-black text-7xl text-sky-700">Hello Solid.js</h1>
    </div>
  );
};

export default App;
