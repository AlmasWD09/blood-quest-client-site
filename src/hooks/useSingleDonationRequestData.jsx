import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import { useParams } from "react-router-dom"


const useSingleDonationRequestData = () => {
  const {id} = useParams();
    const axiosSecure = useAxiosSecure();
  
    const { data: singleBloodRequestData = {},refetch } = useQuery({
      queryKey: ['single-blood-request-data', id],
      queryFn: async () => {
        const { data } = await axiosSecure(`/blood/donation-request/related/api/get/${id}`)
        return data
      },
    })
    return [singleBloodRequestData,refetch]
  }

export default useSingleDonationRequestData;