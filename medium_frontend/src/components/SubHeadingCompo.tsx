import { Link } from "react-router-dom";

interface subHeading {
  subHeading: string;
  buttonText: string;
  to: string;
}

export const SubHeading = ({ subHeading, buttonText, to }: subHeading) => {
  return (
    <div className="font-poppins text-xl text-[#959597]">
      {subHeading}
      <Link className="underline" to={to}>
        {buttonText}
      </Link>
    </div>
  );
};
