import { Story, Meta } from '@storybook/angular/types-6-0';
import { RadioButtonComponent } from './radio-button.component';

export default {
  title: 'RadioButton',
  component: RadioButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<RadioButtonComponent> = (args: RadioButtonComponent) => ({
  component: RadioButtonComponent,
  props: args,
});

export const RadioButton = Template.bind({});
RadioButton.args = {
    options: [
        { label: 'One', value: 'One' },
        { label: 'Two', value: 'Two' },
        { label: 'Three', value: 'Three' }
    ]
};
