import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="container  mx-auto flex flex-col">
      <Header />
      <div className="flex-grow min-h-[90vh] mt-6 mb-8">
        <video
          className="md:w-screen md:h-screen object-cover"
          src="/video/video.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="flex flex-col mt-8  items-center gap-6">
          <p className="font-ericaOne text-[24px] text-center">
            Join the waitlist
          </p>

          <form>
            <div className="relative w-[366px]">
              <input
                type="search"
                id="search"
                className="block w-full p-4 ps-4 text-sm text-white border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500  bg-white bg-opacity-15"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="absolute end-4 underline text-pink top-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
