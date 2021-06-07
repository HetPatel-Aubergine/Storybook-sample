import React from 'react';

import Card from "../components/Card/card";

export default {
  title: 'Card',
  component: Card
};

const Template = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla arcu, tincidunt et mi eget, molestie vulputate metus. In felis urna, tempus sit amet porta ac, suscipit eget nibh.",
};
