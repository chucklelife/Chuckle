import Footer from "@/components/Footer";
import FormSubmit from "@/components/Form/FormSubmit";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="container  mx-auto flex flex-col">
      <Header />
      <div className="flex-grow min-h-full md:min-h-[90vh] mt-6 mb-8">
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

          <FormSubmit />
        </div>
      </div>
      <Footer />
    </div>
  );
}
