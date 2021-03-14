// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SquareWhiteComponent } from './square-white.component'

export default {
  title: 'Example/Square',
  component: SquareWhiteComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SquareWhiteComponent> = (args: SquareWhiteComponent) => ({
  component: SquareWhiteComponent,
  props: args,
});

export const Square = Template.bind({});
Square.args = {
  space: false
};
