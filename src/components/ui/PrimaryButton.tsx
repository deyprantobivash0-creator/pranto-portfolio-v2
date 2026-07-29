import "../../styles/buttons.css";
type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function PrimaryButton({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="primary-btn"
    >
      {children}
      <span className="btn-arrow">→</span>
    </a>
  );
}