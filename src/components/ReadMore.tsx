import { MagicCard } from "./ui/magic-card";
import roboto from "../assets/roboto.png"
import { useTheme } from "./theme-provider";
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
    title: "Tailored Digital Marketing Strategies",
    description:
      "We design customized strategies to optimize your brand’s online presence, ensuring your message resonates with your target audience. Our focus is on expanding your current reach, discovering new opportunities, and building lasting relationships with diverse audiences.",
    icon: <ChartIcon />,
  },
  {
    title: "Engaging Social Media Management",
    description:
      "From creating compelling content to managing your social media accounts, we deliver a consistent and professional presence across platforms. Our approach emphasizes authentic engagement, community building, and aligning your brand story with audience expectations.",
    icon: <WalletIcon />,
  },
  {
    title: "Data-Driven Optimization and Growth",
    description:
      "Using advanced analytics and market insights, we continuously refine strategies to ensure measurable growth. Through performance tracking and active audience engagement, we help your brand achieve meaningful impact in today’s competitive digital space.",
    icon: <MagnifierIcon />,
  },
];

function ReadMore() {

    const { theme } = useTheme()
    return (
        <>
        <section className="container py-20 flex flex-col md:flex-row gap-8 justify-between">
            <img
                src={roboto}
                alt=""
                className="w-[500px] object-contain rounded-lg animate-floating"
            />
            <div className="shadow md:mr-[500px]"></div>
            <MagicCard className="bg-muted/50 border rounded-none py-12 w-full md:w-2/3" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <div className="bg-green-0 flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Social Media{" "}
                                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    Marketing & Management
                                </span>
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                We help brands implement digital marketing strategies that are geared to optimize, communicate and advocate. Our strategies help brands, expand their current reach and reach new audiences.
                            </p>
                        </div>

                    </div>
                </div>
            </MagicCard>

        </section>
        <hr className="w-11/12 mx-auto" />
        <section className="container relative py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
          Enhancing{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Audience Connections{" "}
            </span>
            Through Social Media
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
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
        </>
    )
}

export default ReadMore;