import { useState, useEffect } from "react";

const Dictionary = ({ word }) => {
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    if (word) {
      getWords(word);
    }
  }, [word]);

  async function getWords(searchWord) {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
    );
    const json = await data.json();

    // console.log(json);

    const wordMeanings = json?.[0]?.meanings || [];

    setMeanings(wordMeanings);
  }

  return (
    <div className="dictionary-result card">
      <div className="card-body">
        <h3 className="card-title">Word: {word}</h3>

        {meanings.length > 0 ? (
          meanings.map((meaning, index) => (
            <div key={index} className="part-of-speech">
              <h4>{meaning.partOfSpeech}</h4>
              <ul>
                {meaning.definitions.map((definition, defIndex) => (
                  <li key={defIndex}>{definition.definition}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No definitions found.</p>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
