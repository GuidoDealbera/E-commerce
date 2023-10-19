import { useDispatch } from "react-redux";
import { useGetProfileMutation } from "../../Store/Services/api"
import { toast } from "sonner";
import { setProfile } from "../../Store/Features/profileSlice";
import { useNavigate } from "react-router-dom";

export const useUsersQuery = () => {
    const [getProfile] = useGetProfileMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUserProfile = async (token: string | null) => {
        try {
            const response: any = await getProfile(token);
            if(response.error) {
                return toast.error(response.error.message);
            };
            if(response.data) {
                token && localStorage.setItem("accessToken", token)
                dispatch(setProfile(response.data.profile))
                toast.success(response.data.message)
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    return {
        getUserProfile
    }
}