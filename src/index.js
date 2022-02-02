import ReactDom from "react-dom";
import App from "./App";
import "./style/reset.css"
import "./style/style.css"

const root = document.querySelector(".root");
ReactDom.render(<App />, root);