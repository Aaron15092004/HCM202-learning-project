import { Link } from "react-router-dom";

const BackHomeButton = ({
  className = "",
  label = "Trang chủ",
  to = "/",
  variant = "floating",
}) => {
  const variantClass = `hcm-back-home-btn--${variant}`;
  const classes = ["hcm-back-home-btn", variantClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link to={to} className={classes} aria-label={label}>
      <i className="bi bi-house-door-fill" aria-hidden="true"></i>
      <span className="hcm-back-home-btn__text">{label}</span>
    </Link>
  );
};

export default BackHomeButton;
