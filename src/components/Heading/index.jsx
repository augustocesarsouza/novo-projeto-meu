import P from "prop-types";
import * as Style from "./styles";

export const Heading = ({ children, colorDark = true, as = "h1", size = "huge", uppercase = false }) => {
  return (
    <Style.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Style.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: P.oneOf(["small", "medium", "big", "huge"]),
  uppercase: P.bool,
};
