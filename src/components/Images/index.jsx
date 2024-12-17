import useSWR from "swr";
import { getImagesByBreed } from '../../api/dogsImagesService';

const Images = ({ selectedBreed, selectedSubBreed }) => {
    const { data, error,  isLoading } = useSWR(
        selectedBreed ? selectedBreed : null,
        () => getImagesByBreed(selectedBreed)
    );
    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error loading images</p>
    }

    const images = data.message;
    const imagesFiltered = selectedSubBreed
        ? images.filter((image) => image.includes(selectedSubBreed))
        : images

    return (
        <div>
            <div className="images">
                {imagesFiltered.map((image) => (
                    <img key={image} src={image} alt={selectedBreed} />
                ))}
            </div>
        </div>
    );
}
export default Images;