import { useDispatch, useSelector } from "react-redux";
import Routes from "./Routes";

function App() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  console.log("articles", articles);

  return <Routes />;
}

export default App;
