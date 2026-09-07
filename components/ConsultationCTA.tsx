export default function ConsultationCTA() {
  return (
    <section
      id="consultation"
      className="px-5 py-6 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-[1150px] rounded-md bg-[#6f1255] px-6 py-8 text-center sm:px-10 sm:py-10">
        <p className="text-[10px] font-medium text-white sm:text-xs">
          Want to accelerate professional growth and development at your
          organisation?
        </p>

        <p className="mt-1 text-[10px] text-white sm:text-xs">
          See how we can help.
        </p>

        <a
          href="#consultation"
          className="mt-4 inline-flex items-center justify-center rounded-sm bg-white px-5 py-2.5 text-[9px] font-medium text-[#6f1255] transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6f1255]"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}