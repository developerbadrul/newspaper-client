import { FileInput, Label, TextInput, Textarea, Spinner } from "flowbite-react";
import { useForm } from "react-hook-form";
import useAxiousPublic from "../../Hooks/useAxiousPublic";
import useAxiousPrivate from "../../Hooks/useAxiousPrivate";
import Swal from "sweetalert2";
import { useState } from "react";

const AddPublisher = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const axiousPublic = useAxiousPublic();
    const axiousPrivate = useAxiousPrivate();
    const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
    const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

    const [loading, setLoading] = useState(false); // Added loading state

    const onSubmit = async (data) => {
        console.log(data);
        let res;

        try {
            setLoading(true); // Start loading

            if (data.image && data.image.length > 0) {
                const imageFile = new FormData();
                imageFile.append("image", data.image[0]);

                // Only make the axios request if imageFile is valid
                res = await axiousPublic.post(img_hosting_api, imageFile, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });
            }

            let publisherData;

            if (res && res.data.success) {
                publisherData = {
                    name: data.name,
                    address: data.address,
                    logo: res.data.data.display_url,
                    role: "publisher"
                }
            } else {
                publisherData = {
                    name: data.name,
                    address: data.address,
                    role: "publisher"
                }
            }

            const newPublisher = await axiousPrivate.post("/users/publisher", publisherData);
            console.log("after adding new publisher", newPublisher);

            if (newPublisher.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false); // Stop loading
        }
    }

    return (
        <div>
            <h2 className="text-center font-bold text-3xl underline text-cyan-700">Add New Publisher</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="base" value="Publisher Name" />
                    </div>
                    <TextInput {...register("name", { required: true })} id="base" type="text" sizing="md" />
                </div>
                <div>
                    <div className="mb-2 w-full block">
                        <Label htmlFor="comment" value="Publisher Address" />
                    </div>
                    <Textarea {...register("address", { required: true })} id="comment" className="w-full" placeholder="Publisher Address..." required rows={4} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="file-upload" value="Publisher Logo Upload" />
                    </div>
                    <FileInput {...register("image")} id="file-upload" />
                </div>
                {loading ? (
                    <div><Spinner aria-label="Extra large spinner example" size="xl" /></div>
                ) : (
                    <input className="w-11/12 my-7 mx-auto font-bold btn bg-cyan-500 p-3 rounded-md block text-white" type="submit" value="Add Publisher" />
                )}
            </form>
        </div>
    );
};

export default AddPublisher;
