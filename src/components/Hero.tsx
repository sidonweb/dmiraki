import { Button } from "./ui/button"
import Meteors from "./ui/meteors";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="container flex flex-col relative items-center pb-10 md:py-20 gap-10 overflow-hidden">
      <div className=" pt-10 text-center flex flex-col items-center md:w-3/4 lg:text-start space-y-6 ">
        <main className="text-5xl text-center md:text-7xl font-bold z-10">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r bg-clip-text text-transparent
              from-[#47a3f3] via-purple-500 to-[#47a3f3]
              animate-text tracking-tight">
              Struggling
            </span>{" "}
            to Keep Up in the Digital Race?  We’ll Hand You the {" "}
            <span className="inline bg-gradient-to-r from-[#3cd500]  via-[#eee71d] to-[#3cd500] animate-text text-transparent bg-clip-text">
            Trophy.

            </span>
          </h1>
        </main>

        <p className="text-xl text-center text-muted-foreground md:w-10/12 mx-auto lg:mx-0 z-10">
        making brands shine brighter than a phone screen at 2 AM :)
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 z-10">
          <Button onClick={() => navigate("/contact")} className="w-full">Let's Talk</Button>
        </div>

      </div>
      <Meteors />
    </section>
  );
};
