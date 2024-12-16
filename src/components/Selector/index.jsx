import useSWR from "swr";
import { getAllBreeds } from '../../api/dogsBreedsService';
import './Selector.css';

const Selector = ({ handleBreedSelect, handleSubBreedSelect, selectedBreed, selectedSubBreed }) => {

    console.log(selectedBreed, selectedSubBreed);
    const { data, isLoading } = useSWR("breeds", getAllBreeds);

    const handleBreedClick = (e) => handleBreedSelect(e.target.value);
    const handleSubBreedClick = (e) => handleSubBreedSelect(e.target.value);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const dogBreedsList = data.message;
    const dogBreedsArray = Object.keys(data.message);
    const existsSubBreeds = selectedBreed && dogBreedsList[selectedBreed].length > 0;

    return (
        <div className="selector-container">
            <div className="selector">
                <select className="modern-select" onChange={handleBreedClick} defaultValue="">
                    <option disabled value="">Select a breed</option>
                    {dogBreedsArray.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
                <select 
                    className="modern-select" 
                    onChange={handleSubBreedClick} 
                    disabled={!existsSubBreeds} 
                    value={selectedSubBreed || ""}
                >
                    <option disabled value="">Select a subbreed</option>
                    {existsSubBreeds && dogBreedsList[selectedBreed].map((subBreed) => (
                        <option key={subBreed} value={subBreed}>
                            {subBreed}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Selector;