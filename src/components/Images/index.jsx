import useSWR from "swr";
import { getImagesByBreed } from '../../api/dogsImagesService';

const Images = ({ selectedBreed, selectedSubBreed }) => {
    const { data, isLoading } = useSWR(
        selectedBreed ? selectedBreed : null,
        () => getImagesByBreed(selectedBreed)
    );
    if (isLoading) {
        return <p>Loading...</p>
    }

    const images = data.message;
    const imagesFiltered = selectedSubBreed
        ? images.filter((image) => image.includes(selectedSubBreed))
        : images

    return (
        <div>
            <div className="images">
                {imagesFiltered.map((image) => (
                    <img key={image} src={image} alt="dog" />
                ))}
            </div>
        </div>
    );
}
export default Images;