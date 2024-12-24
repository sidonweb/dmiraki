import { About as AboutSection } from "@/components/About";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "@/components/theme-provider";
import experiments from "@/assets/experiments.png"
import chaotic from "../assets/chaotic.png"

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: <MedalIcon />,
        title: "Client-Centric Approach",
        description:
            "We prioritize our clients' needs, ensuring personalized strategies that align with their business goals and deliver measurable results.",
    },
    {
        icon: <MapIcon />,
        title: "Transparent Communication",
        description:
            "Open and honest communication is at the heart of our operations, fostering trust and collaboration throughout every project.",
    },
    {
        icon: <PlaneIcon />,
        title: "Innovative Solutions",
        description:
            "We leverage latest technologies and creative strategies to provide cutting-edge solutions that drive business growth.",
    },
    {
        icon: <GiftIcon />,
        title: "Data-Driven Strategies",
        description:
            "We utilize comprehensive data analysis to inform our decisions, ensuring effective and efficient marketing campaigns.",
    },
];

function About() {
    const { theme } = useTheme()
    return (
        <section className="container pb-24 space-y-8">
            <section className="relative container grid lg:grid-cols-2 place-items-center gap-10">
                <div className="text-center lg:text-start space-y-6">

                    <main className="text-4xl md:text-6xl font-bold">
                        <h1 className="inline">
                            <span className="inline bg-gradient-to-r bg-clip-text text-transparent
 from-[#3cd500]  via-[#eee71d] to-[#3cd500]
animate-text tracking-tight">
                                What drives us?
                            </span>
                        </h1>
                    </main>

                    <p className="text-base md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                        We stand firm in our belief that digital should not be a distraction; instead, it should act as an enabler of human potential.
                    </p>


                </div>

                {/* Hero Image sections */}
                <div className="z-10">
                    <img
                        src={chaotic}
                        alt="Hero Image"
                        className="w-[200px] lg:w-[600px] mx-auto"
                    />
                </div>

                {/* Shadow effect */}
                <div className="shadow"></div>
            </section>
            <AboutSection />
            <section className="container grid grid-cols-1 md:grid-cols-2  text-center py-24 sm:py-32">
                <div className="relative flex flex-col justify-center items-center">
                    <h2 className="text-3xl md:text-4xl font-bold ">
                        How We{" "}
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            Work?{" "}
                        </span>
                    </h2>
                    <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                        Our work process is simple, but it packs a punch:
                    </p>
                    <img
                        src={experiments}
                        alt=""
                        className="w-[400px] mb-10 md:mb-0 object-contain rounded-lg"
                    />
                    <div className="shadow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map(({ icon, title, description }: FeatureProps) => (
                        <MagicCard
                            key={title}
                            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                            className="rounded-none"
                        >
                            <CardHeader>
                                <CardTitle className="grid gap-4 place-items-center">
                                    {icon}
                                    {title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>{description}</CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>
        </section>
    )
}

export default About;