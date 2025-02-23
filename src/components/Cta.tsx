import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const Cta = () => {
  const navigate = useNavigate();
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            From Vision to Victory: Turn
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Ideas{" "}
            </span>
            into <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Impact{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          Tired of ideas gathering dust? We turn "what if?" into "what's next?" with razor-sharp tools and tailored strategies that deliver real results.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto" 
            onClick={() => {navigate("/contact"); window.scrollTo(0, 0);}}>
            Request a quote
          </Button>
          <Button
            variant="secondary"
            className="w-full md:w-auto"
            onClick={() => {navigate("/services"); window.scrollTo(0, 0);}}
          >
            View all services
          </Button>
        </div>
      </div>
    </section>
  );
};
