import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { socialMedia } from "@/data";
import { useState } from "react";

const Footer = () => {
  // Contact form submit handler
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
      requirements: (
        form.elements.namedItem("requirements") as HTMLTextAreaElement
      )?.value,
    };

    setLoading(true);
    setSuccess(false);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 2500); // Hide tick after 2.5s
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Grid background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      {/* Contact section in footer */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full max-w-4xl mx-auto mb-16">
        <form
          className="bg-black-100 dark:bg-white/5 rounded-3xl shadow-lg p-8 max-w-md w-full border border-white/10 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="rounded-lg px-4 py-3 bg-white/10 text-white-100 placeholder:text-white-200 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-lg px-4 py-3 bg-white/10 text-white-100 placeholder:text-white-200 focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="rounded-lg px-4 py-3 bg-white/10 text-white-100 placeholder:text-white-200 focus:outline-none"
          />
          <textarea
            name="requirements"
            placeholder="Your Requirements"
            className="rounded-lg px-4 py-3 bg-white/10 text-white-100 placeholder:text-white-200 focus:outline-none min-h-[120px]"
            required
          />
          <button
            type="submit"
            disabled={loading || success}
            className="relative inline-flex h-12 w-full md:w-60 md:mt-5 overflow-hidden rounded-lg p-[1px] focus:outline-none bg-purple text-white font-bold justify-center items-center transition"
          >
            {loading ? (
              <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin inline-block"></span>
            ) : success ? (
              <span className="text-2xl">✔️</span>
            ) : (
              <span className="flex items-center justify-center w-full h-full gap-2">
                Submit <FaLocationArrow className="ml-2" />
              </span>
            )}
          </button>
        </form>
        <div className="flex flex-col items-center justify-center gap-6 max-w-md w-full">
          <h1 className="heading text-center mb-4">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 my-2 text-center">
            Reach out to me today and let's discuss how I can help you achieve
            your goals.
          </p>
          <a href="mailto:build4u25@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 BuildForU
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
