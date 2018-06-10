import styled from "react-emotion";
import * as React from "react";
import { background, lightGrey } from "./palette";

const ResponsiveView = styled("div")({
  position: "relative",
  backgroundColor: lightGrey,
  gridArea: "content",
  overflow: "hidden",
  borderRadius: 8,
});

const maxWidth = 480;
const maxHeight = 854;

const Wrapper = styled("div")({
  width: "100%",
  height: "100%",
  backgroundColor: background,
  display: "grid",
  gridTemplateColumns: "0fr 1fr 0fr",
  gridTemplateRows: "0fr 1fr 0fr",
  gridTemplateAreas: `". . ." ". content ." ". . ."`,
  [`@media (min-width: ${maxWidth}px)`]: {
    gridTemplateColumns: `1fr ${maxWidth}px 1fr`,
  },
  [`@media (min-height: ${maxHeight}px)`]: {
    gridTemplateRows: `1fr ${maxHeight}px 1fr`,
  },
});

export const Container = ({ children }) => (
  <Wrapper>
    <ResponsiveView>{children}</ResponsiveView>
  </Wrapper>
);
