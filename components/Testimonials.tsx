import Image from "next/image";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CloudHub NG",
    avatar: "/images/aisha-yusuf.png",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    avatar: "/images/john-davies.png",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    avatar: "/images/chinonso-nwankwo.png",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Sarah Williams",
    role: "CEO, Growth Partners",
    avatar: "/images/aisha-yusuf.png",
    text: "The team was professional, responsive and delivered exactly what we needed. Their approach to development and training made a real difference.",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-16"
    >
      <div className="mx-auto max-w-[1150px]">
        <h2
          id="testimonials-heading"
          className="text-center text-2xl font-medium text-[#171717] sm:text-3xl"
        >
          Testimonials
        </h2>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-md border-l-2 border-[#ed3c69] bg-white px-4 py-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name} profile`}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[9px] font-semibold text-[#222] sm:text-[10px]">
                    {testimonial.name}
                  </h3>

                  <p className="text-[7px] text-[#777] sm:text-[8px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[9px] leading-4 text-[#444] sm:text-[10px] sm:leading-5">
                {testimonial.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            aria-label="Previous testimonials"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ed3c69] text-[#ed3c69] transition hover:bg-[#ed3c69] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ed3c69]"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next testimonials"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ed3c69] text-[#ed3c69] transition hover:bg-[#ed3c69] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ed3c69]"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}