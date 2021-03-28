import { Story, Meta } from '@storybook/angular/types-6-0';

import { InputComponent } from './input.component';

export default {
  title: 'Input',
  component: InputComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  component: InputComponent,
  props: args,
});

export const Input = Template.bind({});

export const InputPlaceHolder = Template.bind({});
InputPlaceHolder.args = {
  placeHolder: 'Inserindo placeHolder',
  label: 'Label'
};
