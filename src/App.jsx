import "./App.css";
import Currency from "./components/Currency";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Currency />
    </div>
  );
}

export default App;
