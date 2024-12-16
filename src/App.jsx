import { useState } from 'react'
import Selector from './components/Selector'
import Images from './components/Images'
import './App.css'

function App() {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedSubBreed, setSelectedSubBreed] = useState('');

  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
    setSelectedSubBreed('');
  };

  const handleSubBreedSelect = (subBreed) => {
    setSelectedSubBreed(subBreed);
  };

  return (
    <>
      <div>
        <Selector handleBreedSelect={handleBreedSelect} selectedBreed={selectedBreed}  handleSubBreedSelect={handleSubBreedSelect} selectedSubBreed={selectedSubBreed}/>
      </div>
      <div className="card">
        {selectedBreed && <Images selectedBreed={selectedBreed} selectedSubBreed={selectedSubBreed}/>}
      </div>
    </>
  )
}

export default App
