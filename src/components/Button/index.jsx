import "./button.css";

function Button({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="button body--big"
    >
      {children}
    </a>
  );
}

export default Button;
