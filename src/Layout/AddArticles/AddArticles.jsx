import Select from 'react-select';
import { Button, FileInput, Label, TextInput, Textarea } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import useAxiousPublic from '../../Hooks/useAxiousPublic';
import useAxiousPrivate from '../../Hooks/useAxiousPrivate';
import Swal from 'sweetalert2';
import { useState } from 'react';

const options = [
    { value: 'national', label: 'National' },
    { value: 'international', label: 'International' },
    { value: 'sports', label: 'Sports' },
];

const AddArticles = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const axiousPublic = useAxiousPublic();
    const axiousPrivate = useAxiousPrivate();
    const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
    const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            let imgURL = ''; // Default empty URL

            // Check if image is provided
            if (data.image && data.image.length > 0) {
                const imageFile = new FormData();
                imageFile.append("image", data.image[0]);

                // Only make the axios request if imageFile is valid
                const response = await axiousPublic.post(img_hosting_api, imageFile, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });

                if (response.data.success) {
                    imgURL = response.data.data.display_url;
                }
            }

            // Prepare your data object
            const articleData = {
                title: data.title,
                publisher: data.publisher,
                img: imgURL,
                tags: selectedOption?.value || '',
                description: data.description,
            };

            const newArticle = await axiousPrivate.post("/addartical", articleData);
            console.log("after adding new article", newArticle);

            if (newArticle.status === 200) {
                reset();
                setSelectedOption(null);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added to the Articles.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                console.error('Failed to submit article:', newArticle.statusText);
            }
        } catch (error) {
            console.error('Error submitting article:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };

    return (
        <div>
            <form className="flex max-w-md flex-col gap-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="title" value="Article Title" />
                    </div>
                    <TextInput {...register('title', { required: 'This field is required' })} id="title" type="text" required />
                    {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="image" value="Article Image" />
                    </div>
                    <FileInput {...register('image')} id="image" accept="image/*" required />
                    {errors.image && <span className="text-red-500">{errors.image.message}</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="publisher" value="Publisher" />
                    </div>
                    <TextInput {...register('publisher', { required: 'This field is required' })} id="publisher" type="text" required />
                    {errors.publisher && <span className="text-red-500">{errors.publisher.message}</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="tags" value="Tags" />
                    </div>
                    <Select value={selectedOption} onChange={handleChange} options={options} />
                    {errors.tags && <span className="text-red-500">{errors.tags.message}</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="description" value="Description" />
                    </div>
                    <Textarea {...register('description')} id="description" rows="4" required />
                    {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                </div>
                <Button type="submit">
                    Submit Article
                    {loading ? 'Submitting...' : ''}
                </Button>
            </form>
        </div>
    );
};

export default AddArticles;
