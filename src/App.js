import "./App.css";
import AutoComplete from "./components/AutoCompleteComponent";

function App() {
  const options = [
    { label: "The Shawshank Redemption", value: 1 },
    { label: "The Godfather", value: 2 },
    { label: "The Dark Knight", value: 3 },
    { label: "Pulp Fiction", value: 4 },
    { label: "Forrest Gump", value: 5 },
    { label: "Inception", value: 6 },
    { label: "The Matrix", value: 7 },
    { label: "Fight Club", value: 8 },
    { label: "The Lord of the Rings: The Return of the King", value: 9 },
    { label: "Interstellar", value: 10 },
  ];
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80">
        <AutoComplete options={options} />
      </div>
    </div>
  );
}

export default App;
