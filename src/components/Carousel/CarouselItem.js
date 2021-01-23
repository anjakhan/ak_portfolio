import React from "react";

export default function CarouselItem(props) {
  const { img, className } = props;
  return (
    <div>
      <img src={img} alt="slide" className={className} />
    </div>
  );
}