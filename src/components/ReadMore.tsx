import { MagicCard } from "./ui/magic-card";
import { useTheme } from "./theme-provider";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ReadMoreProps {
  mainTitle: string;
  subtitle: string;
  description: string;
  services: ServiceProps[];
  imageSrc: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionImageSrc: string;
}

const ReadMore = ({
  mainTitle,
  subtitle,
  description,
  services,
  imageSrc,
  sectionTitle,
  sectionSubtitle,
  sectionImageSrc,
}: ReadMoreProps) => {
  const { theme } = useTheme();

  return (
    <>
     <div className="hidden sm:block">
          <nav className="relative top-8 left-12 flex w-fit flex-wrap items-center gap-1 p-1">
            <a href="/" className="inline-flex items-center gap-1.5 text-sm text-stone-800 dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-[18px] w-[18px]"><path d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
            <span className="inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-stone-800 dark:text-white">/</span>
            <a href="/services" className="inline-flex items-center gap-1.5 text-sm text-stone-800 dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary">Services</a>
            <span className="inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-stone-800 dark:text-white">/</span>
            <a href="" className="inline-flex items-center gap-1.5 text-sm text-stone-800 dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary">{mainTitle + " " + subtitle}</a>
          </nav>
        </div>
      <section className="container py-20 flex flex-col md:flex-row gap-8 justify-between">
       
        <img
          src={imageSrc}
          alt="Main section image"
          className="w-[500px] object-contain rounded-lg animate-floating"
        />
        <div className="shadow md:mr-[500px]"></div>
        <MagicCard
          className="bg-muted/50 border rounded-none py-12 w-full md:w-2/3"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {mainTitle}{" "}
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {subtitle}
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  {description}
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
              {sectionTitle}{" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {sectionSubtitle}
              </span>
            </h2>
            <p className="text-muted-foreground text-xl mt-4 mb-8">
              Enhancing audience connections through thoughtful services.
            </p>
            <div className="flex flex-col gap-8">
              {services.map(({ icon, title, description }: ServiceProps) => (
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
            src={sectionImageSrc}
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
            alt="About services"
          />
        </div>
        <div className="shadow"></div>
      </section>
    </>
  );
};

export default ReadMore;
