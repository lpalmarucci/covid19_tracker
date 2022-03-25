import React from "react";
import Header from "../components/Header";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Normal = Template.bind({});

export const WithSearchbar = Template.bind({});
WithSearchbar.storyName = "Header with search bar";
WithSearchbar.args = {
  drawSearchbar: true,
};
