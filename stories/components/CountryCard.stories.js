import React from "react";
import CountryCard from "../../components/CountryCard";

export default {
  title: "Components/CountryCard",
  component: CountryCard,
};

const Template = (args) => (
  <CountryCard
    {...args}
    urlData="https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true"
  />
);

export const Normal = Template.bind({});
Normal.args = {
  name: "Algeria",
};
