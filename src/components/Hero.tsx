import { Button } from "./ui/button"
import Meteors from "./ui/meteors";

export const Hero = () => {
  return (
    <section className="container flex flex-col relative items-center py10 md:py-20 gap-10 overflow-hidden">
      <div className=" pt-16 text-center flex flex-col items-center md:w-3/4 lg:text-start space-y-6 ">
        <main className="text-5xl text-center md:text-7xl font-bold z-10">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r bg-clip-text text-transparent
              from-[#47a3f3] via-purple-500 to-[#47a3f3]
              animate-text tracking-tight">
              Skyrocket
            </span>{" "}
            Your ROI with Our Expert {" "}
            <span className="inline bg-gradient-to-r from-[#3cd500]  via-[#eee71d] to-[#3cd500] animate-text text-transparent bg-clip-text">
            Digital Marketing
            </span>
          </h1>
        </main>

        <p className="text-xl text-center text-muted-foreground md:w-10/12 mx-auto lg:mx-0 z-10">
          DMiraki is a full-service digital marketing agency providing best-in-class services to big brands and small-to-medium sized businesses.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 z-10">
          <Button className="w-full">Let's Talk</Button>
        </div>
        
      </div>
<Meteors />
      {/* Hero cards sections */}
      {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden"> */}
        {/* <HeroCards /> */}
        
      {/* </div> */}

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
    </section>
  );
};
