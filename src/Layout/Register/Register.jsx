import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { IoIosHome } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { getAuth, updateProfile } from "firebase/auth";

const Register = () => {
    const auth = getAuth()
    const { createUserWithPassword } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (registerUserInfo) => {
        createUserWithPassword(registerUserInfo.email, registerUserInfo.password)
            .then(result => {
                updateProfile(auth.currentUser,{
                    displayName: registerUserInfo.name,
                })
                console.log(result.user)
            })
            .catch(err => console.log(err.message))
    };

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    return (
        <div className="my-8">
            <Link to="/"><Button color="failure" className="mx-7 font-bold"> <span className="mr-2 text-xl"><IoIosHome /></span> Go Home</Button>
            </Link>
            <h1 className="text-center text-3xl text-cyan-700 font-bold">
                Registration Please !!!
            </h1>
            <form
                className="flex max-w-md flex-col gap-4 mx-auto my-7"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            {...register("name", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                            placeholder="Enter Your Full Name"
                            shadow
                        />
                        {errors.email && (
                            <p role="alert" className="text-red-700">{errors.name?.message || "Name is required"}</p>
                        )}
                    </div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"}
                        placeholder="Enter Your Email"
                        shadow
                    />
                    {errors.email && (
                        <p role="alert" className="text-red-700">{errors.email?.message || "Email is required"}</p>
                    )}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="file-upload" value="Profile Pic Upload (Optional)" />
                    </div>
                    <FileInput id="file-upload" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput
                        id="password"
                        {...register("password", {
                            required: true,
                            pattern: passwordRegex,
                        })}
                        type="password"
                        required
                        shadow
                    />
                    {errors.password && (
                        <p role="alert" className="text-red-700">
                            Password must contain at least 8 characters, including at least
                            one letter, one number, and one special character (@$!%*?&).
                        </p>
                    )}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="confirmPassword" value="Confirm password" />
                    </div>
                    <TextInput
                        id="confirmPassword"
                        {...register("confirmPassword", {
                            required: true,
                            validate: (value) =>
                                value === watch("password") || "Passwords do not match",
                        })}
                        type="password"
                        required
                        shadow
                    />
                    {errors.confirmPassword && (
                        <p role="alert" className="text-red-700">{errors.confirmPassword.message}</p>
                    )}
                </div>
                <Button type="submit">Register</Button>
                <p>
                    Already Register?{" "}
                    <Link to="/login" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        Please Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
