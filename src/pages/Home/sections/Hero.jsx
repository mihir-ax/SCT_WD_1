import { ArrowRight, PlayCircle } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-gradient-to-tr from-brand-300 to-brand-100 dark:from-brand-900 dark:to-slate-900 blur-3xl rounded-full" />
      </div>

      <Container className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight mb-6">
          Unify your team's work in one <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">intelligent workspace</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          Connect your tools, automate repetitive tasks, and empower your team to focus on work that actually drives growth. No coding required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="w-full sm:w-auto group">
            Start your free trial
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            <PlayCircle className="mr-2 h-5 w-5 text-slate-500" />
            Watch Demo
          </Button>
        </div>
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          No credit card required. 14-day free trial.
        </p>
      </Container>
    </section>
  );
};
