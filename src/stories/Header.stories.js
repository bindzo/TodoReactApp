import React from 'react';
import Header from '../../components/shared/Header'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import {AuthContext} from '../../pages/App'

export default {
  component: Header,
  title: 'Shared/Header',
  argTypes: {
    auth: { control: 'object' },
  },
};

const Template = args => (
  <AuthContext.Provider value={args}>
    <Router>
      <Header />
    </Router>
  </AuthContext.Provider>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  auth: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};