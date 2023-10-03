import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header/Header";
import data from "./Data/data.js";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <main>
      <Header />
      {cards}
    </main>
  );
}

export default App;
