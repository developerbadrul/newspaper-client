import { Button } from "flowbite-react";
import { IoLogoGoogle } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
const SocialMediaLogin = () => {
    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <Button onClick={handleGoogleSignIn} className="w-full" outline gradientDuoTone="cyanToBlue">
                <IoLogoGoogle className="mr-2" />
                Google Sign In
            </Button>
        </div>
    );
};

export default SocialMediaLogin;