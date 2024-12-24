import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { MagicCard } from "./ui/magic-card";
import { useTheme } from "./theme-provider";

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


export const HowItWorks = () => {
  const {theme} = useTheme()
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How We{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Work?{" "}
        </span>
        Step-by-Step
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Our work process is simple, but it packs a punch:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
};
