import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";

// All code thanks to the team at project table 3. Anthony, Danner, Hannah, Jeremy, Matt, Nick
class Main extends React.Component {
  render() {
    console.log("Data" + data);
    return (
      <main>
      {/* This iterates over the JSON data file */}
      {data.map((beast, idx) => (
        <React.Fragment key={beast._id}>
          {/* <HornedBeast image_url={beast.image_url} title={beast.title} description={beast.description} alt={beast.keyword}
            idx={idx}
          /> */}
          {/* This needs to match the JSON Data */}
          <HornedBeast {...beast} />

        </React.Fragment>
      ))}
        </main>
    )
  }
}
export default Main