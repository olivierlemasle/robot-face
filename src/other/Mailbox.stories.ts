import { Meta, StoryObj } from "@storybook/react";

import Mailbox from "./Mailbox";

const meta: Meta<typeof Mailbox> = {
  component: Mailbox,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NoLetter: Story = {
  args: {
    hasLetters: false,
  },
};

export const WithLetters: Story = {
  args: {
    hasLetters: true,
  },
};
