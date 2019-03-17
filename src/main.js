import App from "./App.html";

const app = new App({
  target: document.body,
  data: {
    visible: false,
    messages: ["Приветствую, могу ли вам помочь?"]
  }
});

export default app;
