import React, {useEffect, useState} from 'react';
import Music from './components/music';

function App() {
    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/music');
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                setMusicData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);


    return (
        <div>
            {musicData.map((music, index) => (
                <Music
                    key={index}
                    title={music.title}
                    description={music.description}
                    image={music.image}
                />
            ))}
        </div>
    );
}

export default App;












