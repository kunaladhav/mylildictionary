import Header from "./components/Header";
import Dictionary from "./components/Dictionary";
import Body from "./components/Body";

import { useState } from "react";

function App() {
  const [searchWord, setSearchWord] = useState();

  const handleSearch = (word) => {
    setSearchWord(word);
  };

  return (
    <div className="App">
      <Header />
      <Body onSearch={handleSearch} />
      <Dictionary word={searchWord} />
    </div>
  );
}

export default App;
