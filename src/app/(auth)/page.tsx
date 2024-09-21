import LoginForm from '@/components/auth/LoginForm'

export default function Home() {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="text-center max-w-md w-full">
    //     <h1 className="text-3xl font-bold mb-6">Welcome to Mambax</h1>
    //     <div className="space-y-4">
    //       <Link href="/auth/signup">
    //         <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
    //           Sign Up
    //         </button>
    //       </Link>
    //       <Link href="/auth/login">
    //         <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
    //           Log In
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <LoginForm />
  )
}
