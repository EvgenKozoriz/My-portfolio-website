import React from "react";

interface IProps {
    children: React.ReactNode
}

const SectionHeading:React.FC<IProps> = ({children}) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;
