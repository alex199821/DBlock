import Wrapper from "../assets/wrappers/SuccessWrapper";
import { IoIosCheckmark } from "react-icons/io";

const Success = () => {
  return (
    <Wrapper>
      <div className="imageContainer">
        <IoIosCheckmark className="checkMarkIcon" />
      </div>
      <p className="successLabel">You are subscribed to updates!</p>
    </Wrapper>
  );
};
export default Success;
