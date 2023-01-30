import FinanceList from "./components/finance/FinanceList";
import News from "./components/news/News";
import "./App.css";
import Search from "./components/search/Search";
function App() {
  return (
    <div className="App">
      <News />
      <FinanceList />
      <Search />
    </div>
  );
}

export default App;
