import { Image } from "react-bootstrap";
import { Link as NavLink } from "react-router-dom";

const LogoName = () => {
  return (
    <div className="d-inline-flex align-items-center me-auto">
      <NavLink to="/">
        <Image src="my-logo.png" alt="fit in touch logo" className="my-logo" />
      </NavLink>
      <p className="ms-3" style={{ color: "#8db1bb" }}>
        Fit in touch
      </p>
    </div>
  );
};
export default LogoName;
