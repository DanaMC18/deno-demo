import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dino } from '../types.ts';


export const DinosaurIndex = () => {
  const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);

  useEffect(() => {
    const fetchDinosaurs = async () => {
      try {
        const response = await fetch(`/api/dinosaurs/`);
        const allDinosaurs = await response.json() as Dino[];
        setDinosaurs(allDinosaurs);
      } catch (error) {
        console.error("Error fetching dinosaurs:", error);
      }
    };
  
    fetchDinosaurs();
  }, [])

  return (
    <main>
      <h1>Welcome to the Dino Index</h1>
      <p>Click on a dinosaur below to learn more.</p>
      {
        dinosaurs.map((dino: Dino) => {
          return (
            <Link
              className="dinosaur"
              key={dino.name}
              to={`/${dino.name.toLowerCase()}`}
            >
              {dino.name}
            </Link>
          )
        })
      }
    </main>
  )
}

export default DinosaurIndex;
