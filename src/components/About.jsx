import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor ");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <>
        <h1>About Class Component</h1>{" "}
        {/* <User name={"Chethan (function)"} location={"Chikkamagaluru"} /> */}
        <UserClass name={"Chethan (class)"} location={"Chikkamagaluru"} />
      </>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       {/* <User name={"Chethan (function)"} location={"Chikkamagaluru"} /> */}
//       <UserClass name={"Chethan (class)"} location={"Chikkamagaluru"} />
//     </>
//   );
// };

export default About;
