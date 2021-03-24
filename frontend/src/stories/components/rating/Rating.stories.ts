import { Story, Meta } from '@storybook/angular/types-6-0';

import { RatingComponent } from './rating.component';

export default {
  title: 'Rating',
  component: RatingComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<RatingComponent> = (args: RatingComponent) => ({
  component: RatingComponent,
  props: args,
});

export const Rating = Template.bind({});
Rating.args = {
  rates: [1, 2, 3, 4, 5],
  rate: 1
};
