import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import Scene from './Vehicle';
import FallingShapes from './FallingShapes';
import supabase from '../lib/supabase';

// Function to save the score to Supabase
async function saveScore(score) {
  const { data, error } = await supabase
    .from('scores')
    .insert([{ score }]);
  if (error) console.error('Error saving score:', error);
}

function Game() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // This function would be called when a collision is detected or other game over conditions are met
  const handleGameOver = () => {
    setIsGameOver(true);
    saveScore(score); // Save the score when the game ends
  };

  useEffect(() => {
    // Example game over condition
    if (isGameOver) {
      // Perform any additional game over actions if needed
    }
  }, [isGameOver]);

  return (
    <div>
      {isGameOver && <div className="text-center text-red-500">Game Over</div>}
      <Canvas>
        <Physics>
          <Scene />
          <FallingShapes />
        </Physics>
      </Canvas>
      {/* Add any other UI elements or game mechanics here */}
      {/* Example button to trigger game over for testing */}
      <button onClick={handleGameOver} className="absolute bottom-5 left-5 p-2 bg-blue-500 text-white rounded">
        End Game
      </button>
    </div>
  );
}

export default Game;
