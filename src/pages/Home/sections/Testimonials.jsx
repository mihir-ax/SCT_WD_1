import { Container } from '../../../components/ui/Container';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by developers worldwide
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { quote: "SCT completely transformed how we handle deployments. It's incredibly intuitive.", author: "Sarah Jenkins", role: "CTO, TechNova" },
            { quote: "The clean architecture and speed are unmatched. We saved hundreds of hours.", author: "Mark D.", role: "Lead Engineer, BlueSky" },
            { quote: "Finally, a tool that gets out of your way and just works. Highly recommended.", author: "Elena R.", role: "Product Manager, StartupX" }
          ].map((testimonial, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <p className="text-slate-600 dark:text-slate-300 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white">{testimonial.author}</h5>
                <span className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
