import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
// console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

// Provider로 store를 넣어서 App 을 감싸게 되면 우리가 렌더링하는 그 어떤 컴포넌트던지 리덕스 스토어에 접근 할 수 있게 된답니다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
