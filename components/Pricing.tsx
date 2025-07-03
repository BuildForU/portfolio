import { pricing } from "@/data";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <h1 className="heading text-center mb-12">
        Simple, <span className="text-purple">Transparent Pricing</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {pricing.map((plan) => (
          <div
            key={plan.id}
            className="bg-black-100 dark:bg-white/5 rounded-3xl shadow-lg p-8 max-w-xs flex flex-col items-center text-center border border-white/10"
          >
            <h2 className="text-xl font-bold mb-2 text-white-100 dark:text-white">
              {plan.title}
            </h2>
            <p className="text-3xl font-extrabold text-purple mb-2">
              {plan.price}
            </p>
            <p className="text-white-200 dark:text-white/80 text-base mb-4">
              {plan.description}
            </p>
          </div>
        ))}
      </div>
      <p className="text-center text-white-200 dark:text-white/80 mt-8">
        We know budgets can be tight, especially for schools and small
        businesses. That's why we offer affordable packages. Custom pricing
        available for unique needs.
      </p>
    </section>
  );
};

export default Pricing;
