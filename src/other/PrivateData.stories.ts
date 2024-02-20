import { Meta, StoryObj } from "@storybook/react";

import PrivateData from "./PrivateData";

const meta: Meta<typeof PrivateData> = {
  component: PrivateData,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: false,
  },
};
