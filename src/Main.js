import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";

// All code thanks to the team at project table 3. Anthony, Danner, Hannah, Jeremy, Matt, Nick
class Main extends React.Component {
  render() {
    console.log("Data" + data);
    return (
      //This iterates over the JSON data file
      data.map((beast) => (
        <React.Fragment key ={beast._id}>
          <HornedBeast imageUrl={beast.image_url} title={beast.title} description={beast.description} alt={beast.keyword} />
          {/* This needs to match the JSON Data */}
          {/* <HornedBeast {...beast} /> */}
        
        </React.Fragment>
      ))
    )
  }
}
// <>
//        <HornedBeast title ={"UniWhal"} description ={"A unicorn and a narwhal nuzzling their horns"} imageUrl = {"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"}/>
//        <HornedBeast title ={"Rhino Family"} description ={"Parent rhino with two babies"} imageUrl = {"https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"}/>
//        <HornedBeast title ={"Unicorn Head"} description ={"Someone wearing a very silly unicorn head mask"} imageUrl = {"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"}/>
//       </>
//     );

export default Main