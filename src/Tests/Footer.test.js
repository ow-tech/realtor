// import { render, screen } from "@testing-library/react";
// import FooterComponent from "../Components/Footer/FooterComponent";
// import { BrowserRouter } from "react-router-dom";
// import { store } from "../Redux/store/store";
// import { Provider } from "react-redux";
// // import { toHaveAttribute } from "@testing-library/jest-dom";
// import "@testing-library/jest-dom/extend-expect";

// // expect.extend({ toHaveAttribute });

// const FooterComp = () => {
//   return (
//     <BrowserRouter>
//       <Provider store={store}>
//         <FooterComponent />
//       </Provider>
//     </BrowserRouter>
//   );
// };

// test("should render Footer Component", () => {
//   render(<FooterComp />);

//   const footer = document.getElementById("footer-container");
//   expect(footer).toBeInTheDocument();
// });

// const headingNames = ["Company", "Discover", "Mobile Apps", "Social Media"];

// const companyLabels = ["About us", "Team", "Career", "Contact Us", "Newsroom"];

// const companyLabelsHref = [
//   "/aboutus",
//   "/team",
//   "/career",
//   "/contactus",
//   "/newsroom",
// ];

// test("should render Footer Component with correct headers", () => {
//   render(<FooterComp />);

//   headingNames.forEach((name) => {
//     const nameElement = screen.getByText(name);
//     expect(nameElement).toBeInTheDocument();
//   });
// });

// test("should render Company Component with correct labels and links", () => {
//   render(<FooterComp />);

//   const firstComponent = document.querySelector(
//     "#footer-container > div > div > div > #footer-company-section"
//   );
//   const labelElements = firstComponent.getElementsByClassName(
//     "company-footer-label"
//   );
//   const labels = Array.from(labelElements).map(
//     (labelElement) => labelElement.textContent
//   );

//   expect(labels).toEqual(companyLabels);

//   Array.from(labelElements).forEach((labelElement, index) => {
//     expect(labelElement).toHaveAttribute("href", companyLabelsHref[index]);
//   });
// });
