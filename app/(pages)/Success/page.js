export default function Success() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-green-50">
        <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
        <p className="mt-4 text-lg">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>
        <a href="/" className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Go to Homepage
        </a>
      </div>
    );
  }
  