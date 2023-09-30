// import { render, fireEvent, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import { store } from "../Redux/store/store";
// import { Provider } from "react-redux";
// import NavBar from "../Components/NavBar/NavBar";

// //test block
// test("show nav and its items", () => {
//   // render the component on virtual dom
//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <NavBar />
//       </Provider>
//     </BrowserRouter>
//   );

//   //select the elements you want to interact with
//   // const counter = screen.getByTestId("counter");
//   // const incrementBtn = screen.getByTestId("increment");

//   //interact with those elements
//   // fireEvent.click(incrementBtn);

//   const navbar = document.getElementById("navBarContainer");
//   const logoLink = document.getElementById("logoLink");
//   const logo = document.getElementById("logo");
//   const linkItem = document.getElementById("linkItem");
//   const buyText = screen.getByText("Buy");
//   const sellText = screen.getByText("Sell");
//   const commercialText = screen.getByText("Commercial");
//   const exploreText = screen.getByText("Explore");
//   const agentsText = screen.getByText("Agents");

//   //assert the expected result
//   expect(navbar).toBeInTheDocument();
//   expect(logoLink).toBeInTheDocument();
//   expect(logo).toBeInTheDocument();
//   // expect(countrySelect).toBeInTheDocument();
//   expect(linkItem).toBeInTheDocument();
//   expect(buyText).toBeInTheDocument();
//   expect(sellText).toBeInTheDocument();
//   expect(commercialText).toBeInTheDocument();
//   expect(exploreText).toBeInTheDocument();
//   expect(agentsText).toBeInTheDocument();
// });

// test("renders navbar selects", () => {
//   const { getByText } = render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <NavBar />
//       </Provider>
//     </BrowserRouter>
//   );
//   const selectComponents = screen.getAllByTestId("countrySelect");
  
//   expect(selectComponents.length).toBeGreaterThan(0);
//   expect(selectComponents.length).toBeLessThanOrEqual(3);
//   selectComponents.forEach((selectComponent) => {
//     expect(selectComponent).toBeInTheDocument();
//   })

  
// });
