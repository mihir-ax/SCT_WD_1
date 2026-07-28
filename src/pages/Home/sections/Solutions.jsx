import { Container } from '../../../components/ui/Container';

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-50 dark:bg-slate-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Built for modern engineering teams
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Whether you are a startup or an enterprise, SCT adapts to your workflow seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">For Startups</h4>
              <p className="text-slate-600 dark:text-slate-400">Move fast and break nothing. Deploy our automated pipelines in minutes and scale without worrying about infrastructure.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">For Enterprises</h4>
              <p className="text-slate-600 dark:text-slate-400">Security first. Granular RBAC, audit logs, and compliance reporting built directly into your workflow.</p>
            </div>
          </div>
          <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl h-96 flex items-center justify-center border border-slate-300 dark:border-slate-700 overflow-hidden">
            <span className="text-slate-500 dark:text-slate-400 font-medium">Interactive Dashboard Mockup</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
