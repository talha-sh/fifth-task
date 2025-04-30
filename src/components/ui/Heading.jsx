import React from "react";

const Heading = ({
  level = 2,
  size = 16,
  className = "",
  children,
  ...props
}) => {
  const sizeClasses = {
    16: "text-[16px] md:text-[18px]", // Base size
    18: "text-[18px] md:text-[20px]", // Medium size
    20: "text-[20px] md:text-[24px]", // Large size
  };

  const baseClasses = `font-sans font-bold text-black ${sizeClasses[size]} ${className}`;

  const headings = {
    1: (props) => (
      <h1 {...props} className={`${baseClasses} text-[20px] md:text-[24px]`} />
    ),
    2: (props) => (
      <h2 {...props} className={`${baseClasses} text-[18px] md:text-[20px]`} />
    ),
    3: (props) => (
      <h3 {...props} className={`${baseClasses} text-[16px] md:text-[18px]`} />
    ),
    4: (props) => <h4 {...props} className={`${baseClasses}`} />,
    5: (props) => <h5 {...props} className={`${baseClasses}`} />,
    6: (props) => <h6 {...props} className={`${baseClasses}`} />,
  };

  const HeadingTag = headings[level] || headings[2];

  return <HeadingTag {...props}>{children}</HeadingTag>;
};

export default Heading;
