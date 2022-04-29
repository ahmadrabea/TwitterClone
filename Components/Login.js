import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {/* https://devdojo.com/tailwindcss/buttons#_ */}

            <a
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              href="#_"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white p-4 px-6 py-3 font-medium text-white shadow-md transition duration-300 ease-out hover:border-[#1d9bf0]"
            >
              <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#1d9bf0] text-white duration-300 group-hover:translate-x-0">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="ease absolute flex h-full w-full transform items-center justify-center text-white transition-all duration-300 group-hover:translate-x-full">
                Sign in with {provider.name}
              </span>
              <span className="invisible relative">
                Sign in with {provider.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Login
