import { Meta, StoryObj } from "@storybook/react";

import RobotFace from "./RobotFace";

const meta: Meta<typeof RobotFace> = {
  component: RobotFace,
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
