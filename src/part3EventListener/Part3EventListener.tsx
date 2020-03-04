import React, { useEffect } from "react";

const Part3EventListener = () => {
  useEffect(() => {
    const handleResize = () => {
      //   alert("You leaving? Stay with a bit more...");
      console.log("Triggered mouseleave event");
    };

    window.document.addEventListener("mouseleave", handleResize, false);

    return () =>
      window.document.removeEventListener("mouseleave", handleResize);
  }, [window]);

  return (
    <>
      <h1 style={styles.titleStyle}>Event listener</h1>
    </>
  );
};

const styles = {
  titleStyle: {
    textAlign: "center" as "center"
  }
};

export default Part3EventListener;
