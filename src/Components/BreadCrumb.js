import { Link, useLocation } from "react-router-dom";
import styles from "../Styles/Breadcrumb.module.css";

const routeNameMap = {
  "": "Home",
  "about": "About",
  "products": "Products",
  "services": "Services",
  "WebDevelopment": "Web Development",
  "MobileAppSection": "Mobile App",
  "ProjectsFlip": "E-Commerce",
  "Software": "Software Development",
  "GraphicDesign": "Graphic Design",
  "DigitalMarketing": "Digital Marketing",
  "OtherServices": "Other Services",
  "CloudIT": "Cloud IT",
  "career": "Career",
  "gallery": "Gallery",
  "contact": "Contact",
  "ImageCardSection": "Gallery"
};

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className={styles.breadcrumb}>
      <Link to="/">Home</Link>

      {paths.map((path, index) => {
        const routeTo = "/" + paths.slice(0, index + 1).join("/");
        const isLast = index === paths.length - 1;
        const label = routeNameMap[path] || path;

        return (
          <span key={index}>
            {" > "}
            {isLast ? (
              <span className={styles.active}>{label}</span>
            ) : (
              <Link to={routeTo}>{label}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
