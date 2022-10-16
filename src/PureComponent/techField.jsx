import React from "react";
// import technology from "./technology";

class techfields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "LOREM",
      isWatched: false,
    };
  }

  toggleResponse = () => {
    this.setState((previousState) => ({
      isWatched: !previousState.isWatched,
    }));
  };

  render() {
    const { title, isWatched } = this.state;
    return (
      <>
        <technology title={title} />
        <p>
          Trending Technology : {" "}
          <strong style={{color:"red"}}>{isWatched ? "React" : "javascript"}</strong>
        </p>
        <button onClick={this.toggleResponse}>Pure-Component</button>
      </>
    );
  }
}

export default techfields;