import { Button } from "flowbite-react";
import { IoLogoGoogle } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import useAxiousPublic from "../../Hooks/useAxiousPublic";
import Swal from "sweetalert2";

const SocialMediaLogin = () => {
    const { googleSignIn } = useAuth();
    const axiousPublic = useAxiousPublic();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email
                }
                console.log(userInfo);
                axiousPublic.post("/users", userInfo)
                    .then(res => console.log(res.data))
               
                    Swal.fire({
                        title: 'User Login Successful.',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        },
    
                    });      
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