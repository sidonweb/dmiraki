import {
    // Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image1 from "../assets/reflecting.png";
import image2 from "../assets/looking-ahead.png";
import image3 from "../assets/plantsback.png"
import image4 from "../assets/sitting.png"
import image5 from "../assets/bueno.png"
import image6 from "../assets/experiments.png"
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "@/components/theme-provider";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "../components/ui/button";

interface ServicesProps {
    title: string;
    description: string;
    image: string;
    readmore: string
}

const services: ServicesProps[] = [
    {
        title: "Social Media Marketing & Management",
        description:
            "We help brands implement digital marketing strategies that are geared to optimize, communicate and advocate. Our strategies help brands, expand their current reach and reach new audiences. ",
        image: image1,
        readmore: "services/social-media-marketing-and-management"
    },
    {
        title: "Branding & Designing",
        description:
            "Branding is more than just a logo—it's the essence of your business. Whether launching or rebranding, we create designs that connect with your audience, telling your story and showing why you're the solution they've been seeking.",
        image: image2,
        readmore: "services/branding-and-designing"
    },
    {
        title: "Profitable Performance Marketing",
        description:
            "In the fast-paced world of digital marketing, we constantly explore new strategies and insights to create innovative campaigns that boost your desktop and mobile advertising performance.",
        image: image,
        readmore: "services/profitable-performance-marketing"
    },
    {
        title: "Web Design & Development",
        description:
            "We focus on website development for B2B and organisations, with a focus on improving usability, increasing enquiries and making you stand out.",
        image: image4,
        readmore: "services/web-design-and-development"
    },
    {
        title: "Content Creation",
        description:
            "We create unique, engaging content that builds brand awareness, loyalty, and advocacy. From copywriting and photography to social and video, we believe great storytelling starts with great content.",
        image: image5,
        readmore: "services/content-creation"
    },
    {
        title: "UI & UX Design",
        description:
            "Our designs must not only look beautiful, but they must also function beautifully. A great design not only entices you to touch, but it must be intuitive and simple to understand.",
        image: image6,
        readmore: "services/ui-and-ux-design"
    },
];

function Services() {
    const { theme } = useTheme()
    return (
        <section className="container pb-24 space-y-8">
            <section className="relative container grid lg:grid-cols-2 place-items-center gap-10">



                <div className="text-center lg:text-start space-y-6">
                    <div className="hidden sm:block">
                        <nav className="absolute top-8 left-6 flex flex-wrap items-center gap-1 p-1">
                            <a href="/" className="inline-flex items-center gap-1.5 text-sm text-stone-800 dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-[18px] w-[18px]"><path d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                            <span className="inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-stone-800 dark:text-white">/</span>
                            <a href="/services" className="inline-flex items-center gap-1.5 text-sm text-stone-800 dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary">Services</a>
                        </nav>
                    </div>
                    <main className="text-4xl md:text-6xl font-bold">
                        <h1 className="inline">
                            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                                What we do?
                            </span>
                        </h1>
                    </main>

                    <p className="text-base md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                        Explore DMiraki today and unlock the potential to elevate your brand. Whether it's a dynamic website, captivating visuals, or strategic marketing, we're here to bring your vision to life and drive real success in the digital world.
                    </p>


                </div>

                {/* Hero Image sections */}
                <div className="z-10">
                    <img
                        src={image3}
                        alt="Hero Image"
                        className="w-[200px] lg:w-[600px] mx-auto"
                    />
                </div>

                {/* Shadow effect */}
                <div className="shadow"></div>
            </section>
            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(({ title, description, image, readmore }: ServicesProps) => (
                    <MagicCard key={title} className="bg-muted/50 border rounded-none" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                        </CardHeader>

                        <CardContent>{description}</CardContent>
                        <CardContent>
                            <div className="gap-2">
                                <a
                                    rel="noreferrer noopener"
                                    href={readmore}
                                    className={`pl-0 ${buttonVariants({ variant: "link" })}`}
                                >
                                    <ArrowTopRightIcon className="mr-2 w-5 h-5" />
                                    Read more
                                </a>
                            </div>
                        </CardContent>

                        <CardFooter>
                            <img
                                src={image}
                                alt="About feature"
                                className="w-[200px]  mx-auto"
                            />
                        </CardFooter>
                    </MagicCard>
                ))}
            </div>

        </section>
    )
}

export default Services;