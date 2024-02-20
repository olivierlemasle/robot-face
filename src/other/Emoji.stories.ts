import { Meta, StoryObj } from "@storybook/react";

import Emoji from "./Emoji";

const meta: Meta<typeof Emoji> = {
  component: Emoji,
  argTypes: {
    emotion: {
      options: ["disappointed", "neutral", "excited"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    emotion: "neutral",
  },
};
