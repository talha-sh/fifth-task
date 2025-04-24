import React, { useState } from "react";

const Image = ({
  src,
  alt = "Image",
  fallback = "https://via.placeholder.com/300x200?text=Image+Unavailable",
  className = "",
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => setImgSrc(fallback);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`object-cover ${className}`}
      {...props}
    />
  );
};

export default Image;
