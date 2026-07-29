type SecondaryButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function SecondaryButton({
  href,
  children,
}: SecondaryButtonProps) {
  return (
    <a
      href={href}
      className="secondary-btn"
    >
      {children}
    </a>
  );
}