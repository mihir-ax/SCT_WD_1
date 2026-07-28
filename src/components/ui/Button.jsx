import { cn } from "../../utils/cn";

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "border-transparent text-white bg-brand-600 hover:bg-brand-700 shadow-sm",
    secondary: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800",
    ghost: "border-transparent text-slate-600 bg-transparent hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
