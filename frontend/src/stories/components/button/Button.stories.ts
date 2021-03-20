// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component'

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};

export const SecondaryFontBlack = Template.bind({});
SecondaryFontBlack.args = {
  label: 'Button',
  fontBlack: true
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  fontBlack: true
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  fontBlack: true
};
export const Icon = Template.bind({});
Icon.args = {
  label: 'Button',
  fontBlack: true,
  icon: 'fa fa-credit-card'
};
