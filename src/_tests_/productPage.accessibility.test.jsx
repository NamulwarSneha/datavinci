import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import React from "react";
import ProductPage from "../components/ProductPage.jsx";

test("Product page exposes key landmarks & controls", ()=>{
  render(<ProductPage />);
  expect(screen.getByRole("heading", {name:/manuka honey/i})).toBeInTheDocument();
  expect(screen.getByRole("button", {name:/what is umf and mgo/i})).toBeInTheDocument();
  expect(screen.getByRole("group", {name:/umf scale/i})).toBeInTheDocument();
  expect(screen.getByRole("button", {name:/add to cart/i})).toBeInTheDocument();
});