import { FileInput, Label, TextInput, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import useAxiousPublic from "../../Hooks/useAxiousPublic";
import useAxiousPrivate from "../../Hooks/useAxiousPrivate";
import Swal from "sweetalert2";

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

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        console.log(imageFile);
        const res = await axiousPublic.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const publisherData = {
                name: data.name,
                address: data.address,
                logo: res.data.data.display_url,
                role: "publisher"
            }

            const newPublisher = await axiousPrivate.post("/users/publisher", publisherData)
            console.log("after add new publisher", newPublisher);
            if(newPublisher.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(res);
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
                <input className="w-11/12 my-7 mx-auto font-bold btn bg-cyan-500 p-3 rounded-md block text-white" type="submit" value="Add Publisher" />
            </form>
        </div>
    );
};

export default AddPublisher;