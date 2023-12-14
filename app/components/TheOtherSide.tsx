import Image from "next/image";
import { Darker_Grotesque } from "next/font/google";
import Link from "next/link";
const grotesque = Darker_Grotesque({ subsets: ["latin"] });

export default function TheOtherSide() {
  return (
    <>
      <section className="reveal-element py-20 px-6 md:px-20 bg-cover flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-4">
        <div className="basis-full text-center md:text-center space-y-6">
          <h1 className="w-full md:w-3/5 mx-auto font-semibold text-gray-200 text-5xl leading-none tracking-tighter md:text-6xl">
            I{"'"}m waiting for you at the other side
          </h1>
          <p className="w-full md:mx-auto md:w-2/3 text-gray-300 font-light text-lg">
            Inside <span className="text-yellow-500">The Income Lounge</span>,
            you get....
          </p>

          <div className="grid grid-cols-12 gap-4 md:w-3/4 mx-auto">
            <div className="col-span-12 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer ">
              <p className="text-lg md:text-xl font-semibold text-gray-300 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                <span>All Things Agency</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer ">
              <p className="text-lg md:text-xl font-semibold text-gray-300 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                <span>Lead generation agency</span>
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer ">
              <p className="text-lg md:text-xl font-semibold text-gray-300 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                <span>Social Media Growth</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer ">
              <p className="text-lg md:text-xl font-semibold text-gray-300 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                <span>Accountability</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer ">
              <p className="text-lg md:text-xl font-semibold text-gray-300 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                <span>Like-minded Network</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer ">
              <p className="text-lg md:text-xl font-semibold text-gray-300 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                <span>Social media Marketing agency</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer ">
              <p className="text-lg md:text-xl font-semibold text-gray-300 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                <span>Tax Havens and offshore residencies</span>
              </p>
            </div>
          </div>

          <p
            className={`${grotesque.className} w-full md:mx-auto md:w-2/3 text-gray-300 font-semibold text-xl`}
          >
            You can pick a skill and begin selling your skill within{" "}
            <span className="text-green-500">30 days</span> <br></br>
            Within a few months you can already be making money from your very
            own online business No need to ever take another course, join
            another program or anything like that EVER again!
          </p>

          <div className="md:w-1/3 mx-auto space-y-4">
            <Link
              href="https://the-income-lounge.circle.so/checkout/monthly-access"
              className="flex items-center justify-center text-base text-black font-semibold px-6 py-4 bg-green-400 rounded-lg"
            >
              GET LIFETIME ACCESS -50% OFF
            </Link>

            <div className="flex justify-center mt-10">
              <Image
                className=""
                src="/images/payments/payments.png"
                alt="jamal"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
