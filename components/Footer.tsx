import Image from "next/image";

const whatWeDoLinks = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const companyLinks = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solutionLinks = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="bg-[#16000f] text-white">
      {/* CTA */}
      <section className="border-b border-white/20 bg-[#270018]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-5 px-6 py-6 md:flex-row md:items-center md:px-10 lg:px-12">
          <div>
            <p className="mb-2 text-[10px] text-white/70">
              Ready to be a part of something extraordinary?
            </p>

            <h2 className="text-lg font-medium md:text-xl">
              Let&apos;s work together to create a difference
            </h2>
          </div>

          <a
            href="#"
            className="rounded-md bg-[#77104f] px-5 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#8d1760] focus:outline-none focus:ring-2 focus:ring-[#ed3b68] focus:ring-offset-2 focus:ring-offset-[#270018]"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <div className="mx-auto max-w-[1280px] px-6 py-10 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Information */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Tobams Group"
              width={130}
              height={50}
              className="mb-5 h-auto w-[115px]"
            />

            <p className="max-w-[260px] text-[10px] leading-[1.8] text-white/70">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-[#16000f] hover:opacity-80"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-[#16000f] hover:opacity-80"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-[#16000f] hover:opacity-80"
              >
                X
              </a>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="mb-4 text-xs font-semibold">What We Do</h3>

            <ul className="space-y-2">
              {whatWeDoLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[10px] text-white/70 transition hover:text-white focus:outline-none focus:ring-1 focus:ring-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold">Company</h3>

            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[10px] text-white/70 transition hover:text-white focus:outline-none focus:ring-1 focus:ring-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="mb-4 text-xs font-semibold">Solution</h3>

            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[10px] text-white/70 transition hover:text-white focus:outline-none focus:ring-1 focus:ring-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offices & Contact */}
        <div className="mt-10 rounded-md bg-[#260019] px-4 py-5 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Registered Offices */}
            <div className="md:col-span-2">
              <h3 className="mb-3 text-[11px] font-semibold">
                Registered Offices
              </h3>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="mb-1 text-[9px] font-medium text-[#ed3b68]">
                    United Kingdom
                  </p>

                  <p className="text-[9px] leading-[1.6] text-white/70">
                    07451 (Registered by Company House)
                    <br />
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    Kingdom, RM1 4QA
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[9px] font-medium text-[#ed3b68]">
                    Nigeria
                  </p>

                  <p className="text-[9px] leading-[1.6] text-white/70">
                    RC. 1468722 (Registered by the Corporate Affairs
                    Commission)
                    <br />
                    4, Muaz Close, Angwan-Rimi
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-3 text-[11px] font-semibold">
                Contact Information
              </h3>

              <div className="space-y-2 text-[9px] text-white/70">
                <p className="flex items-center gap-2">
                  <span className="text-[#ed3b68]">✉</span>
                  theteam@tobamsgroup.com
                </p>

                <p className="flex items-center gap-2">
                  <span className="text-[#ed3b68]">☎</span>
                  +44788600748
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-5 text-[9px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Copyright © Tobams Group. 2024. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white">
              Terms and Conditions
            </a>

            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}