import Image from "next/image";
import { Darker_Grotesque } from "next/font/google";
import Link from "next/link";
const grotesque = Darker_Grotesque({ subsets: ["latin"] });

export default function SocialProof() {
  return (
    <>
      <section className="reveal-element py-20 px-6 md:px-20 bg-cover flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-4 bg-gradient-to-bl from-green-950 to-black">
        <div className="basis-full text-center md:text-center space-y-6">
          <h1 className="w-full md:w-3/5 mx-auto font-semibold text-gray-200 text-5xl leading-none tracking-tighter md:text-6xl">
            F*ck Selling Courses. Real{" "}
            <span className="text-yellow-500">People</span>, Real Results
          </h1>
          <p className="w-full md:mx-auto md:w-2/3 text-gray-300 font-light text-lg">
            Look how many people are making money around the world right now...
          </p>

          <div className="grid grid-cols-12 gap-4 md:w-3/4 mx-auto">
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer">
              <Image
                className="shadow-md"
                src="/images/reviews/review1.jpg"
                alt="review1"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer">
              <Image
                className="shadow-md"
                src="/images/reviews/review2.jpg"
                alt="review1"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer">
              <Image
                className="shadow-md"
                src="/images/reviews/review3.jpg"
                alt="review1"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer">
              <Image
                className="shadow-md"
                src="/images/reviews/review4.jpg"
                alt="review1"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left border-2 border-gray-600 bg-gray-950 shadow-md hover:border-yellow-500 transition-all cursor-pointer">
              <Image
                className="shadow-md"
                src="/images/reviews/review5.jpg"
                alt="review1"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-6 md:col-span-4 self-start rounded-lg p-4 text-left">
              <p className="text-sm md:text-sm font-semibold text-green-300">
                + a lot more guys making $5k+ a month...
              </p>
            </div>
          </div>

          <div className="md:w-1/3 mx-auto space-y-4">
            <Link
              href="https://the-income-lounge.circle.so/checkout/monthly-access"
              className="flex items-center justify-center text-base text-black font-semibold px-6 py-4 bg-green-400 rounded-lg"
            >
              JOIN THE INCOME LOUNGE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
