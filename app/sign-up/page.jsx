import { Register } from '@/actions/authServer'
import Head from 'next/head'
import Link from 'next/link'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Create an Account</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-blue-600">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-md shadow-md">
          <div>
            <h2 className="text-2xl font-bold text-center text-blue-600">Create an Account</h2>
          </div>
          <form className="mt-8 space-y-6" action={Register}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-sm text-center">
            <Link href="/sign-in" className="font-medium text-blue-600 hover:text-blue-500">
              Already have an account? <span className=' font-bold'> Sign In </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
