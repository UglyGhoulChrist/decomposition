import FinanceList from "./components/finance/FinanceList";
import News from "./components/news/News";
import "./App.css";
import Search from "./components/search/Search";
import BottomSection from "./components/bottom/Bottom";
function App() {
  return (
    <main className="App">
      <News />
      <FinanceList />
      <Search />
      <BottomSection />
    </main>
  );
}

export default App;
