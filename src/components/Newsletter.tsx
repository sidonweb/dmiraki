import { MailIcon, MapPin, PhoneCallIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container flex flex-col md:flex-row py-24 sm:py-32">
        <div className="md:w-1/2 mb-4">
          <h3 className="text-start text-4xl md:text-5xl font-bold">
            Dreaming Big? <br />
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Let's build it.
            </span>
          </h3>
          <p className="text-xl text-muted-foreground text-start mt-4 mb-8">
            Have big ideas but unsure where to begin? Let's talk and find the perfect solution for your business.
          </p>
          <ul>
          <a href="tel:+911234567890">
            <li className="flex my-2 flex-row gap-4">
              
              <span><PhoneCallIcon width={20}/></span>
              <span>+91 1234567890</span>
            </li>
          </a>
          <a href="mailto:hello@dmiraki.com">
            <li className="flex my-2 flex-row gap-4">
              <span><MailIcon width={20}/></span>
              <span>hello@dmiraki.com</span>
            </li>
            </a>
            <li className="flex my-2 flex-row gap-4">
              <span><MapPin width={20}/></span>
              <span>Noida, India</span>
            </li>
          </ul>
        </div>

        <form className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2" action="#" method="POST">
          <div className="flex flex-row gap-2">
            <Input
              required
              placeholder="First name"
              className="bg-muted/50 dark:bg-muted/80 rounded-none "
              aria-label="first-name"
            />
            <Input
              placeholder="Last Name"
              className="bg-muted/50 dark:bg-muted/80 rounded-none "
              aria-label="last-name"
            />
          </div>

          <Input
            placeholder="Company name"
            className="bg-muted/50 dark:bg-muted/80 rounded-none "
            aria-label="company-name"
          />
          <div className="flex flex-row gap-2">
            <Input
              required
              placeholder="dmiraki@gmail.com"
              type="email"
              className="bg-muted/50 dark:bg-muted/80 rounded-none "
              aria-label="email"
            />
            <Input
            required
              placeholder="Phone number"
              className="bg-muted/50 dark:bg-muted/80 rounded-none "
              aria-label="phonenumber"
            />
          </div>

          <textarea
            placeholder="Short description of the project"
            required
            className="flex  w-full border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-muted/50 dark:bg-muted/80 rounded-none resize-none"
            rows={4}
            aria-label="projectdescription"
          />
          <Button>Send</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
