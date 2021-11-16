import React from 'react';
import renderer from 'react-test-renderer';
import { AuthContext } from '../../../pages/App';
import Header from './index'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from '@mui/material/Button';
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
describe('The Header component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(  
      <AuthContext.Provider value={{auth: true,setAuth: () => {}}}>
        <Router>
          <Header />
        </Router>
      </AuthContext.Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('should call the onPress function passed when pressed', () => {
    const onLogoutClick = jest.fn();
    const header = mount(
      <AuthContext.Provider value={{auth: true,setAuth: () => {}}}>
        <Router>
          <Header onLogoutClick={onLogoutClick} />
        </Router>
      </AuthContext.Provider>
    );
    const button = header.find(Button).find('button#logout-btn');
    console.log(button);
    button.simulate('click')
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1)
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login')
  });
})