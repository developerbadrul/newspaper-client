import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";

const AddPublisher = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => console.log(data)

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
                    <FileInput {...register("logo")} id="file-upload" />
                </div>
                <Button className="w-11/12 my-7 mx-auto font-bold"><input type="submit" value="Add Publisher" /></Button>
            </form>
        </div>
    );
};

export default AddPublisher;