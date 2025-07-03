const Contact = () => {
  return (
    <section id="contact" className="py-20 flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full max-w-4xl">
        <form className="bg-black-100 dark:bg-white/5 rounded-3xl shadow-lg p-8 max-w-md w-full border border-white/10 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg px-4 py-3 bg-white/10 text-white-100 placeholder:text-white-200 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg px-4 py-3 bg-white/10 text-white-100 placeholder:text-white-200 focus:outline-none"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="rounded-lg px-4 py-3 bg-white/10 text-white-100 placeholder:text-white-200 focus:outline-none"
          />
          <textarea
            placeholder="Your Requirements"
            className="rounded-lg px-4 py-3 bg-white/10 text-white-100 placeholder:text-white-200 focus:outline-none min-h-[120px]"
            required
          />
          <button
            type="submit"
            className="bg-purple text-white font-bold py-3 rounded-lg mt-2 hover:bg-purple/80 transition"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col items-center justify-center gap-6 max-w-md w-full">
          <h1 className="heading text-center mb-4">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 my-2 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:build4u25@gmail.com">
            <button
              className="relative inline-flex h-12 w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none"
              type="button"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                Let&apos;s get in touch
                <svg
                  className="ms-2"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
