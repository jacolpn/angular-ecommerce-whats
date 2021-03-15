// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SquareWhiteComponent } from './square-white.component'

export default {
  title: 'Square White',
  component: SquareWhiteComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SquareWhiteComponent> = (args: SquareWhiteComponent) => ({
  component: SquareWhiteComponent,
  props: args,
});

export const SquareWhite = Template.bind({});
SquareWhite.args = {
  space: false
};
