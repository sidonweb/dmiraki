import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { MagicCard } from "./ui/magic-card";
import { useTheme } from "./theme-provider";

export const About = () => {
  const {theme} = useTheme()
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <MagicCard className="bg-muted/50 border rounded-none py-12" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </MagicCard>
    </section>
  );
};
