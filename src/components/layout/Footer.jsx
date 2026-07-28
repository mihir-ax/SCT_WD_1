import { Container } from '../ui/Container';
import { Hexagon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-900 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Hexagon className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold">SCT</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} SCT Technologies Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
