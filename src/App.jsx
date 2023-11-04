import React, { useEffect, useState } from "react";
import Music from "./components/music";

function App() {
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3070/api/music");
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setMusicData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {musicData.length
        ? musicData.map((music, index) => (
            // <div>
            //     Hello
            // </div>
            <Music
              key={index}
              image={music.image}
              _id={music._id}
              description={music.description}
              title={music.title}
            />
          ))
        : null}
    </div>
  );
}

export default App;
