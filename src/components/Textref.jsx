import { useRef } from "react";

const Textref = () => {
  // Tracking the count
  const heading = useRef(null);
  const countRef = useRef(0);

  // Tracking visibility state
  const boxRef = useRef(null);
  const isVisible = useRef(true);

  const change = () => {
    // Increment counter and update heading text
    countRef.current += 1;
    if (heading.current) {
      heading.current.textContent = countRef.current;
      heading.current.style.color = "red";
    }

    // Toggle visibility
    if (boxRef.current) {
      isVisible.current = !isVisible.current;
      boxRef.current.style.display = isVisible.current ? "block" : "none";
    }
  };

  const newfunctions = {
    backgroundColor: "red",
    padding: "20px",
    width: "300px",
    height: "300px",
    display: "block"
  };

  return (
    <>
      <h1 ref={heading}></h1>
      <button onClick={change}>Change the text</button>
      <div ref={boxRef} style={newfunctions}>
        this box
      </div>
    </>
  );
};

export default Textref;
