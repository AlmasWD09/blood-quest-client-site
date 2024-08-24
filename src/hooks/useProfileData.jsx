import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useProfileData = () => {
    const { user} = useAuth()
    const axiosSecure = useAxiosSecure()
  
    const { data: profileData = [],refetch } = useQuery({
      queryKey: ['user-data', user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure(`/user/profile/api/get/${user?.email}`)
        return data
      },
    })
  
    //   Fetch user info using logged in user email
  
    return [profileData,refetch]
  }

export default useProfileData;