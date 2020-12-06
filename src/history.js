import { createBrowserHistory } from "history";

const history = createBrowserHistory();

history.listen((action) => {
  if (action === "POP") {
    return;
  }
  window.scrollTo(0, 0);
});

export default history;
