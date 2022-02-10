import { h } from '@stencil/core';

export default {
  title: 'Button',
  args: {
    label: 'Click me!',
  },
};

export const Primary = (args) => {
  return <c-button {...args} />;
};
