import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild, } from "@headlessui/react";
import useAuth from "../../../hooks/useAuth";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";



const DonateModal = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {id} = useParams()

  const { register, handleSubmit, } = useForm();

  const onSubmit = async(data) => {
    const donationInfo = {
      name : data.name,
      email : data.email,
      status : 'inprogress'
    }

    const response = await axiosSecure.put(`/navbar/pending/requests/update/${id}`, donationInfo);
    if (response.data.modifiedCount > 0) {
        toast.success('Your donation received successfully');
        onClose();
        navigate('/donation-request')
    }
  }


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={onClose}>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <DialogTitle
                    as='h3'
                    className='text-lg font-medium text-center leading-6 text-gray-900'
                  >
                    Donate blood to help others
                  </DialogTitle>
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-3 pt-3'>
                    <div>
                      {/* user name */}
                      <div className="w-full mt-6">
                        <label htmlFor="blood_group" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                          Your name
                        </label>
                        <div>
                          <input
                            type="name"
                            name="name"
                            defaultValue={user?.displayName}
                            readOnly
                            {...register("name", { required: true })}
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Name" />
                        </div>
                      </div>

                      {/* user email */}
                      <div className="w-full mt-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                          Your email
                        </label>

                        <div>
                          <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                            {...register("email", { required: true })}
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                        </div>
                      </div>
                    </div>

                    {/* modal button here.. */}
                    <div className='flex mt-2 justify-between gap-5'>
                      <button
                        type='submit'
                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'>
                        Confirm
                      </button>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                        onClick={onClose}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
// props-type validation
DonateModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.object,
};
export default DonateModal;