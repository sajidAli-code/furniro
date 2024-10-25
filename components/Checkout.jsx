'use client';

const Checkout = () => {
  return (
    <div className="container mx-auto py-8 px-4 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Billing Details Section */}
        <div className=" py-20 px-8">
          <h2 className="text-4xl font-semibold mb-6">Billing details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  className="mt-1 p-3 border rounded-lg w-full"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  className="mt-1 p-3 border rounded-lg w-full"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company-name" className="block text-sm font-medium">Company Name (Optional)</label>
              <input
                type="text"
                id="company-name"
                className="mt-1 p-3 border rounded-lg w-full"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label htmlFor="street-address" className="block text-sm font-medium">Street address</label>
              <input
                type="text"
                id="street-address"
                className="mt-1 p-3 border rounded-lg w-full"
                placeholder="Street address"
              />
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className=" py-24">
          <h2 className="text-xl font-semibold mb-6">Product</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Asgaard sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between pt-2">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between pt-4 font-bold text-lg">
              <span>Total</span>
              <span className="text-yellow-600">Rs. 250,000.00</span>
            </div>
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="mb-4">
              <input type="radio" id="bank" name="payment-method" className="mr-2" checked />
              <label htmlFor="bank">Direct Bank Transfer</label>
              <p className="text-sm text-gray-600 mt-2">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
              </p>
            </div>

            <div className="mb-4">
              <input type="radio" id="bank2" name="payment-method" className="mr-2" disabled />
              <label htmlFor="bank2">Cash on Delivery</label>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Your personal data will be used to support your experience throughout this website, to manage access to
              your account, and for other purposes described in our
              <a href="#" className="text-blue-600"> privacy policy</a>.
            </p>
          </div>

          <button className="w-full py-3 mt-6 bg-transparent border border-black rounded-lg text-black hover:bg-black hover:text-white transition-all">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;