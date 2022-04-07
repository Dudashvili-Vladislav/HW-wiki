import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthAction } from "./redux/reducers/profile";
import Routes from "./Routes";

function App() {
  const dispatch = useDispatch();
  const initApp = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(setAuthAction(true));
  }, []);

  useEffect(() => {
    initApp();
  }, []);

  return <Routes />;
}

export default App;
