import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import React from "react";
import Navbar from "../components/Navbar.jsx";

test("hamburger toggles aria-expanded and menu visibility", ()=>{
  render(<Navbar />);
  const button = screen.getByRole("button", { name:/open menu/i });
  const menu = screen.getByRole("menu", { hidden:true });
  expect(button).toHaveAttribute("aria-expanded","false");
  expect(menu.parentElement).toHaveAttribute("hidden");
  fireEvent.click(button);
  expect(button).toHaveAttribute("aria-expanded","true");
  expect(menu.parentElement).not.toHaveAttribute("hidden");
});

test("esc closes the menu", ()=>{
  render(<Navbar />);
  const button = screen.getByRole("button", { name:/open menu/i });
  fireEvent.click(button);
  fireEvent.keyDown(window, {key:"Escape"});
  expect(button).toHaveAttribute("aria-expanded","false");
});