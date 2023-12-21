import { Button, FileInput, Label, TextInput, Spinner } from "flowbite-react";
import { IoIosHome } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { getAuth, updateProfile } from "firebase/auth";
import SocialMediaLogin from "../../components/SocialMediaLogin/SocialMediaLogin";
import useAxiousPublic from "../../Hooks/useAxiousPublic";
import Swal from "sweetalert2";
import { useState } from "react";

const Register = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false)
    const { createUserWithPassword } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const axiousPublic = useAxiousPublic();

    const onSubmit = async (registerUserInfo) => {
        setLoading(true);

        try {
            const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
            const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

            const imageFile = { image: registerUserInfo?.image[0] };
            const res = await axiousPublic.post(img_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            await createUserWithPassword(registerUserInfo.email, registerUserInfo.password);

            updateProfile(auth.currentUser, {
                displayName: registerUserInfo.name,
            });

            const userInfo = {
                name: registerUserInfo.name,
                email: registerUserInfo.email,
                pic: res.data.data.display_url,
            };

            const registrationResult = await axiousPublic.post("/users", userInfo);

            if (registrationResult.data.insertedId) {
                navigate(location?.state ? location.state : "/");
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('Error during registration:', error);
            // Handle the error (e.g., display an error message to the user)
            Swal.fire({
                icon: 'error',
                title: 'Registration Error',
                text: 'There was an error during registration. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="my-8">
            <Link to="/">
                <Button color="failure" className="mx-7 font-bold">
                    <span className="mr-2 text-xl"><IoIosHome /></span> Go Home
                </Button>
            </Link>
            <h1 className="text-center text-3xl text-cyan-700 font-bold">
                Registration Please !!!
            </h1>
            <form
                className="flex max-w-md flex-col gap-4 mx-auto my-7"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <div className="mb-2 block">
                    <Label htmlFor="file-upload" value="Profile Pic Upload" />
                </div>
                <FileInput id="file-upload" {...register("image", { required: true })} />
                {errors.image && (
                    <p role="alert" className="text-red-700">{errors.image?.message || "Image is required"}</p>
                )}
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
                <Button type="submit" disabled={loading}>
                    {loading ? <Spinner aria-label="Registering..." size="lg" /> : 'Register'}
                </Button>
                <SocialMediaLogin />
                <p className="font-bold">
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
