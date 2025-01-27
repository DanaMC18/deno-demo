import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Dino } from '../types.ts';

const defaultDino: Dino = {
  name: '',
  description: ''
}

export const Dinosaur = () => {
  const [dinosaur, setDinosaur] = useState<Dino>(defaultDino)
  const { selectedDinosaur } = useParams();

  useEffect(() => {
    const fetchDinosaur = async () => {
      try {
        const response = await fetch(`/api/dinosaurs/${selectedDinosaur}`);
        const dino = await response.json() as Dino;
        setDinosaur(dino)
      } catch (error) {
        console.error("Error fetching specific dinosaurs:", error);
      }
    };
  
    fetchDinosaur();
  }, [selectedDinosaur])

  return (
    <div>
      <h1>{dinosaur.name}</h1>
      <p>{dinosaur.description}</p>
      <Link to='/'>🠠 Back to All Dinosaurs</Link>
    </div>
  )
}

export default Dinosaur
