export default function Cancel() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-red-50">
        <h1 className="text-4xl font-bold text-red-600">Payment Canceled</h1>
        <p className="mt-4 text-lg">
          Your payment was not completed. If you wish, you can try again or contact our support team for assistance.
        </p>
        <div className="mt-6 space-x-4">
          <a href="/Services/confirmationPage" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Try Again
          </a>
          <a href="/contact" className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Contact Support
          </a>
        </div>
      </div>
    );
  }
  