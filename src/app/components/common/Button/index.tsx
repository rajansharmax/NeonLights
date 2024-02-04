import ButtonWrapper from "./styled";

import buttonHoverShapeBlack from "@/assets/images/icon/button-hover-shape.svg";
import buttonHoverShapeWhite from "@/assets/images/icon/hov_shape_s.svg";
import { Image } from "antd";

const Button = ({ children, ...props }: any) => {
  return (
    <ButtonWrapper type="submit" className="bithu-btn" {...props}>
      {children}
      <Image
        src={buttonHoverShapeWhite.src}
        className="hover-shape shape-left shape-white"
        alt="bithu nft button hover shape"
      />
      <Image
        src={buttonHoverShapeWhite.src}
        className="hover-shape shape-right shape-white"
        alt="bithu nft button hover shape"
      />
      <Image
        src={buttonHoverShapeBlack.src}
        className="hover-shape shape-left shape-black"
        alt="bithu nft button hover shape"
      />
      <Image
        src={buttonHoverShapeBlack.src}
        className="hover-shape shape-right shape-black"
        alt="bithu nft button hover shape"
      />
    </ButtonWrapper>
  );
};

export default Button;
