import React from "react";
import { useScrollToBottom } from "use-scroll-to-bottom";
import "./DogsExample.css";

export default function DogsExample() {
  const [images, setImages] = React.useState([]);

  const loadImages = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/3");
    const data = await response.json();
    setImages(i => [...new Set([...i, ...data.message])]);
  };

  const [setBottomRef, isBottom] = useScrollToBottom();

  React.useEffect(() => {
    if (isBottom) {
      loadImages();
    }
  }, [isBottom]);

  return (
    <div className="dogs-container">
      {images.map(image => (
        <figure key={image}>
          <img src={image} alt="dog" />
        </figure>
      ))}
      <figure ref={setBottomRef}>Loading...</figure>
    </div>
  );
}
