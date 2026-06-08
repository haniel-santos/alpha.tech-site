interface Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  size?: "default" | "large";
  className?: string;
}

export default function GradientButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "default",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer";

  const sizes = {
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary/25",
    outline:
      "border border-white/20 text-white hover:border-primary hover:text-primary bg-transparent hover:bg-white/5",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
