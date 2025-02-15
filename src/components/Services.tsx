import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Dominate Search Rankings",
    description:
      "Google's algorithms change like the weather, but our SEO strategy keeps you at the top—more visibility, more clicks, more customers.",
    icon: <ChartIcon />, 
  },
  {
    title: "Convert Scrollers into Buyers",
    description:
      "We create ad campaigns that don't just attract eyeballs—they drive real revenue. Precision targeting meets compelling messaging.",
    icon: <WalletIcon />,
  },
  {
    title: "Spark Viral Conversations",
    description:
      "Your audience is scrolling—let's make them stop. Our social media strategies turn casual followers into brand advocates.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Nurture Leads Like Clockwork",
    description:
      "Forget generic email blasts. We craft personalized email campaigns that build relationships, engage customers, and boost conversions.",
    icon: <ChartIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container relative py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Custom Digital Strategies {" "}
            </span>
            That Drive Real Results
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            No cookie-cutter plans, no fluff—just data-driven strategies designed to grow your business and keep you ahead of the competition.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
