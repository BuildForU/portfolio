import { services } from "@/data";
import { Button as MovingBorderButton } from "@/components/ui/MovingBorders";

const Services = () => {
  return (
    <section id="services" className="py-20">
      <h1 className="heading text-center mb-12">
        What <span className="text-purple">We Offer</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service) => (
          <MovingBorderButton
            key={service.id}
            borderRadius="1rem"
            duration={9000 + service.id * 1000}
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 min-h-[260px] max-w-xs text-center flex-col"
          >
            <h2 className="text-xl font-bold mb-2 text-white-100 dark:text-white">
              {service.title}
            </h2>
            <p className="text-white-200 dark:text-white/80 text-base">
              {service.description}
            </p>
          </MovingBorderButton>
        ))}
      </div>
    </section>
  );
};

export default Services;
