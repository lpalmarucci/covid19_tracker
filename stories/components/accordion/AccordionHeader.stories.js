import React from "react";
import AccordionHeader from "../../../components/accordion/AccordionHeader";
import { withReactContext } from "storybook-react-context";
import { AccordionContext } from "../../../context/useAccordion";

export default {
  title: "Components/Accordion/AccordionHeader",
  component: AccordionHeader,
  decorators: [
    withReactContext({
      Context: AccordionContext,
      initialState: { isOpen: false },
    }),
  ],
};

const Template = (args) => <AccordionHeader {...args} />;

export const Close = Template.bind({});
Close.args = {
  isOpen: false,
};

// export const Open = Template.bind({});
// Open.args = {
//   isOpen: true,
// };
