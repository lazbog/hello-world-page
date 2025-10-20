interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ children, className = '' }: HeadingProps) {
  return (
    <h1 className={`text-4xl font-bold text-gray-900 ${className}`}>
      {children}
    </h1>
  );
}