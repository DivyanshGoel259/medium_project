interface headingProps {
  heading: string;
}
export const Heading = ({ heading }: headingProps) => {
  return <div className="font-poppins md:text-5xl text-4xl font-bold">{heading}</div>;
};
