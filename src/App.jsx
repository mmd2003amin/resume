import React, { useReducer } from "react";
import Settings from "./components/template/settings";
import i18n from "./i18n";
import Sections from "./components/template/Sections";
import Loader from "./components/template/loader";

const App = () => {
  const lng = i18n.language;
  const [, forceUpdate] = useReducer((x) => x + 1, 0); //To rerender the App component

  return (
    <div
      dir={`${lng === "fa" ? "rtl" : "ltr"}`}
      className="font-kalameh-regular dark:bg-darker bg-lighter h-[100vh]"
    >
      <Loader />
      <Settings update={forceUpdate} />
      <Sections />
    </div>
  );
};

export default App;
