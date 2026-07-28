import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { Check } from 'lucide-react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h3>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Starter</h4>
            <p className="text-slate-500 dark:text-slate-400 mb-6">Perfect for side projects and learning.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">₹0</span>
              <span className="text-slate-500 dark:text-slate-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Up to 3 projects', 'Community support', 'Basic analytics'].map((feature, i) => (
                <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                  <Check className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="secondary" className="w-full">Get Started</Button>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 dark:bg-blue-950 border border-slate-800 dark:border-blue-900 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">Most Popular</div>
            <h4 className="text-2xl font-bold text-white mb-2">Pro</h4>
            <p className="text-slate-400 dark:text-blue-200 mb-6">For professional developers and small teams.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-white">₹2900</span>
              <span className="text-slate-400 dark:text-blue-200">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Unlimited projects', 'Priority email support', 'Advanced analytics', 'Custom domains'].map((feature, i) => (
                <li key={i} className="flex items-center text-slate-200">
                  <Check className="h-5 w-5 text-blue-400 mr-3 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white border-transparent">Subscribe Now</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
