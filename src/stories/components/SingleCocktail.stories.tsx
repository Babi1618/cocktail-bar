import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SingleCocktail from "./SingleCocktail";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/SingleCocktail",
  component: SingleCocktail,
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

const Template: ComponentStory<typeof SingleCocktail> = (args) => (
  <SingleCocktail {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image:
    "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  name: "Margarita",
  id: "11007",
  info: "Cocktail glass",
  glass:
    "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
};
