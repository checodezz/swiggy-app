import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h1>About Class Component</h1>{" "}
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
