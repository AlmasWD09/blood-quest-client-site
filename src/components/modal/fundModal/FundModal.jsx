import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../../Form/CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHEBLE_KEY);
const FundModal = ({ isOpen, onClose, setIsOpen, refetch }) => {
  const [amount, setAmount] = useState('')

  // amount get
  const handleAmountGet = (e) => {
    setAmount(e.target.value)
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
                    Your donation fund
                  </DialogTitle>
                  <form className='space-y-3 pt-3'>
                    <div>
                      {/* user name */}
                      <div className="w-full mt-6">
                        <label htmlFor="blood_group" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                          Your amount
                        </label>
                        <div>
                          <input
                            onChange={handleAmountGet}
                            type="text"
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Amount" />
                        </div>
                      </div>
                    </div>
                  </form>

                  <hr className='mt-8 ' />

                  <Elements stripe={stripePromise}>
                    {/* checkout form here... */}
                    <CheckoutForm onClose={onClose} amount={amount} setIsOpen={setIsOpen} refetch={refetch}/>
                  </Elements>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FundModal;