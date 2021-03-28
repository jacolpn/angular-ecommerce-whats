import { Story, Meta } from '@storybook/angular/types-6-0';

import { SnackbarComponent } from './snackbar.component';

export default {
  title: 'Snackbar',
  component: SnackbarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<SnackbarComponent> = (args: SnackbarComponent) => ({
  component: SnackbarComponent,
  props: args,
});

export const Snackbar = Template.bind({});
Snackbar.args = {
  message: 'Snackbar!!',
  snackVisibility: 'hidden'
};
