import { Zap, ShieldCheck, BarChart3, Users, Globe2, Sparkles } from 'lucide-react';
import { Container } from '../../../components/ui/Container';

const featureList = [
  {
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    title: "Lightning Fast Automation",
    description: "Build complex workflows in seconds with our drag-and-drop builder. Execute tasks instantly without writing a single line of code."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SOC2 compliance, and granular role-based access control ensure your organization's data remains strictly confidential."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
    title: "Advanced Analytics",
    description: "Gain real-time insights into your team's productivity. Custom dashboards let you track the KPIs that matter most to your business."
  },
  {
    icon: <Users className="h-6 w-6 text-purple-500" />,
    title: "Seamless Collaboration",
    description: "Work together in real-time. Share workspaces, leave context-aware comments, and resolve bottlenecks faster than ever."
  },
  {
    icon: <Globe2 className="h-6 w-6 text-cyan-500" />,
    title: "Global Integrations",
    description: "Connect natively with over 500+ apps including Slack, Jira, Salesforce, and Google Workspace out of the box."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-rose-500" />,
    title: "AI-Powered Suggestions",
    description: "Our proprietary AI analyzes your workflows and automatically suggests optimizations to save your team hours of manual work."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Everything you need to scale
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Stop switching context between a dozen different apps. NexusFlow brings your entire operational stack under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
