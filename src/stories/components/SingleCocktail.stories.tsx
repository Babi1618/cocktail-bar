import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SingleCocktail from "./SingleCocktail";
import { withRouter } from "storybook-addon-react-router-v6";

// import { SingleCocktail } from './SingleCocktail';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SingleCocktail",
  component: SingleCocktail,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/cocktail/:id",
      routeParams: { id: "15997" },
    },
  },
} as ComponentMeta<typeof SingleCocktail>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SingleCocktail> = (args) => (
  <SingleCocktail {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  //   primary: true,
  //   label: 'SingleCocktail',
};
