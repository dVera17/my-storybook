import type { Meta, StoryObj } from "@storybook/react";
import MyLabel from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "inline-radio",
    },
    fontColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
    size: "normal",
    allCaps: false,
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    size: "normal",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    size: "normal",
    allCaps: false,
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color Label",
    size: "normal",
    allCaps: false,
    fontColor: "#5517ac",
  },
};
