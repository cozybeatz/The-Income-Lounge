import Image from "next/image";
import { Darker_Grotesque } from "next/font/google";
import Link from "next/link";
const grotesque = Darker_Grotesque({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <header
        id="header"
        className="reveal-element py-20 px-6 md:px-20 bg-cover flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-4 bg-gradient-to-br from-black to-green-950"
      >
        <div className="basis-full text-center md:text-center space-y-6">
          <div className="flex justify-center">
            <Image
              src="/images/5star.png"
              width={300}
              height={300}
              alt="s star"
            />
          </div>
          <h1 className="w-full md:w-3/5 mx-auto font-semibold text-gray-200 text-5xl leading-none tracking-tighter md:text-6xl">
            Are You <span className="text-yellow-400">Wasting Time</span> On
            Courses & Mentorships. Wait?
          </h1>
          <p className="w-full md:mx-auto md:w-2/3 text-gray-300 font-light text-lg">
            People like you are making $20,0000/month from all over the world
          </p>

          <div className="flex justify-center md:mx-auto">
            <Image
              className="w-10 h-10 object-cover rounded-full border-2 border-gray-600 shadow-md"
              src="/images/jamal.jpg"
              alt="jamal"
              width={100}
              height={100}
            />
            <Image
              className="w-10 h-10 object-cover rounded-full border-2 border-gray-600 shadow-md -ml-2"
              src="/images/moses.jpg"
              alt="moses"
              width={100}
              height={100}
            />
            <Image
              className="w-10 h-10 object-cover rounded-full border-2 border-gray-600 shadow-md -ml-2"
              src="/images/oskar.jpg"
              alt="oskar"
              width={100}
              height={100}
            />
            <Image
              className="w-10 h-10 object-cover rounded-full border-2 border-gray-600 shadow-md -ml-2"
              src="/images/colin.jpg"
              alt="oskar"
              width={100}
              height={100}
            />
            <Image
              className="w-10 h-10 object-cover rounded-full border-2 border-gray-600 shadow-md -ml-2"
              src="/images/mary.jpg"
              alt="oskar"
              width={100}
              height={100}
            />
          </div>

          <div className="grid grid-cols-12 gap-4 md:w-3/4 mx-auto">
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer">
              <p className="text-lg md:text-xl font-semibold text-gray-300">
                5+ Income Streams
              </p>
            </div>

            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer">
              <p className="text-lg md:text-xl font-semibold text-gray-300">
                Accountability
              </p>
            </div>
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer">
              <p className="text-lg md:text-xl font-semibold text-gray-300">
                Successful network
              </p>
            </div>
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer">
              <p className="text-lg md:text-xl font-semibold text-gray-300">
                Tax Havens
              </p>
            </div>
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer">
              <p className="text-lg md:text-xl font-semibold text-gray-300">
                Multiple Proven Blueprints
              </p>
            </div>
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left">
              <p className="text-sm md:text-sm font-semibold text-green-300">
                + a lot more...
              </p>
            </div>
          </div>

          <p
            className={`${grotesque.className} w-full md:mx-auto md:w-2/3 text-gray-300 font-bold text-2xl`}
          >
            PS: You need zero experience for this experience. Master the art of
            making $5k+ a month in 60 days.
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
      </header>
    </>
  );
}
