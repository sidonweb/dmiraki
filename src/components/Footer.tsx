import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            DMiraki
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>
        </div>

        

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Services</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/services/social-media-marketing-and-management"
              className="opacity-60 hover:opacity-100"
            >
              Social Media
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/services/branding-and-designing"
              className="opacity-60 hover:opacity-100"
            >
              Branding
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/services/profitable-performance-marketing"
              className="opacity-60 hover:opacity-100"
            >
              Marketing
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/services/web-design-and-development"
              className="opacity-60 hover:opacity-100"
            >
              Web Development
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/services/content-creation"
              className="opacity-60 hover:opacity-100"
            >
              Content Creation
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/services/ui-and-ux-design"
              className="opacity-60 hover:opacity-100"
            >
              UI/UX Design
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Legal</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Terms & Conditions
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Privacy Policy
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Disclaimer
            </a>
          </div>
        </div>
        
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 DMiraki. All rights reserved.
        </h3>
      </section>
    </footer>
  );
};
