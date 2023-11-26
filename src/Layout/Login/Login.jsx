import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SocialMediaLogin from "../../components/SocialMediaLogin/SocialMediaLogin";

const Login = () => {
    const { singInWithPassword } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const onSubmit = (logingData) => {
        singInWithPassword(logingData.email, logingData.password)
            .then(result => console.log(result.user))
            .catch(err => console.log(err.message))
    };


    return (
        <div className="my-8">
            <Link to="/"><Button color="failure" className="mx-7 font-bold"> <span className="mr-2 text-xl"><IoIosHome /></span> Go Home</Button>
            </Link>
            <h1 className="text-center text-3xl text-cyan-700 font-bold">
                Please Login
            </h1>
            <form
                className="flex max-w-md flex-col gap-4 mx-auto my-7"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
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
                {/* <div>
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
                        <p role="alert">{errors.confirmPassword.message}</p>
                    )}
                </div> */}
                <Button type="submit">Login</Button>
                <SocialMediaLogin className="w-full"></SocialMediaLogin>
                <p className="font-bold">
                    New User?{" "}
                    <Link to="/register" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        Register First
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
