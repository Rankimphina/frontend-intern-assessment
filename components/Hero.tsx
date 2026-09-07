import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[420px] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Professional working at a computer"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex min-h-[420px] items-center justify-center px-5 text-center">
        <div className="max-w-3xl text-white">
          {/* Desktop text */}
          <div className="hidden lg:block">
            <span className="mb-5 inline-block rounded-full bg-white/10 px-6 py-2 text-[10px] font-medium uppercase tracking-wide">
              What We Do
            </span>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Training and Development
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-xs leading-6 text-white/90 sm:text-sm">
              Our comprehensive range of programs and resources is designed to
              enhance skills, broaden knowledge, and propel careers forward in
              today&apos;s ever-evolving landscape.
            </p>

            <a
              href="#consultation"
              className="mt-7 inline-flex rounded-sm bg-[#8a145f] px-6 py-3 text-xs font-medium text-white transition hover:bg-[#6d0f4b] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#8a145f]"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile text */}
          <div className="lg:hidden">
            <span className="mb-5 inline-block rounded-full bg-white/10 px-6 py-2 text-[10px] font-medium uppercase tracking-wide">
              What We Do
            </span>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Learning and Development
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-xs leading-6 text-white/90 sm:text-sm">
              Our comprehensive range of programs and resources is designed to
              enhance skills, broaden knowledge, and propel careers forward in
              today&apos;s ever-evolving landscape.
            </p>

            <a
              href="#consultation"
              className="mt-7 inline-flex rounded-sm bg-[#8a145f] px-6 py-3 text-xs font-medium text-white transition hover:bg-[#6d0f4b] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#8a145f]"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}