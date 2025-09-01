import "@testing-library/jest-dom";
import {render, screen, within, fireEvent} from "@testing-library/react";
import React from "react";
import NestedCheckbox from "../components/NestedCheckbox.jsx";

const setup = ()=> render(<NestedCheckbox />);

const getParent = (name)=> screen.getByRole("checkbox", { name: new RegExp(name,"i") });

test("Select All selects and clears everything", ()=>{
  setup();
  const selectAll = screen.getByRole("checkbox", { name:/select all/i });
  fireEvent.click(selectAll); // check all
  const allChildren = screen.getAllByRole("checkbox");
  allChildren.forEach(cb => expect(cb).toBeChecked());
  fireEvent.click(selectAll); // uncheck all
  allChildren.forEach(cb => expect(cb).not.toBeChecked());
});

test("Parent toggles all children", ()=>{
  setup();
  const fruits = getParent("Fruits");
  fireEvent.click(fruits); // check parent
  const childApple = screen.getByRole("checkbox", { name:/Apple/i });
  expect(childApple).toBeChecked();
  fireEvent.click(fruits); // uncheck parent
  expect(childApple).not.toBeChecked();
});

test("Indeterminate state when some children selected", ()=>{
  setup();
  const apple = screen.getByRole("checkbox", { name:/Apple/i });
  fireEvent.click(apple);
  const fruits = getParent("Fruits");
  // can't read .indeterminate via RTL, but parent should not be checked
  expect(fruits).not.toBeChecked();
});

test("Parent becomes checked when all children selected", ()=>{
  setup();
  ["Apple","Banana","Orange"].forEach(n=>{
    fireEvent.click(screen.getByRole("checkbox", { name:new RegExp(n,"i") }));
  });
  const fruits = getParent("Fruits");
  expect(fruits).toBeChecked();
});