import React, { useReducer } from "react";
import Settings from "./components/template/settings";
import i18n from "./i18n";

const App = () => {
  const lng = i18n.language;
  const [, forceUpdate] = useReducer((x) => x + 1, 0); //To rerender the App component

  return (
    <div
      dir={`${lng === "fa" ? "rtl" : "ltr"}`}
      className="dark:bg-darker bg-lighter h-[100vh]"
    >
      <Settings update={forceUpdate} />
    </div>
  );
};

export default App;
