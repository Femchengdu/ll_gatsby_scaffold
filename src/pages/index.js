import * as React from "react";

const Index = () => {
  return (
    <div>
      <figure>
        {" "}
        <img alt="" src={process.env.SAMPLE_MEDIA_URL} />{" "}
      </figure>
      <p>Hello world</p>;
    </div>
  );
};

export default Index;
