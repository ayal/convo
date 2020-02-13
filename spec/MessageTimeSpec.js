import React from 'react'
import { mount } from 'enzyme';
import App from '../src/App';

import Convo from '../src/Convo';
import Room from '../src/Room';
import Users from '../src/Users';
import User from '../src/User';

import Sender from '../src/Sender';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Message from '../src/Message';
import MessageTime from '../src/MessageTime';
import MessageAuthor from '../src/MessageAuthor';
import MessageText from '../src/MessageText';
import exampleData from '../src/exampleData';

describe('Conversation Builder', () => {

 it('App should render Convo component', () => {
  const wrapper = mount(<App data={exampleData} />);
  expect(wrapper.find(Convo).length).toEqual(1);
 })

 it('Convo should render Message component according to data', () => {
  const wrapper = mount(<Convo data={exampleData} />);
  expect(wrapper.find(Message).length).toEqual(3);
 })

 it('Convo should render Room / User components according to data', () => {
  const wrapper = mount(<Convo data={exampleData} />);
  expect(wrapper.find(Room).length).toEqual(1);
  expect(wrapper.find(User).length).toEqual(3);
 })

 it('Convo should render Sender component', () => {
  const wrapper = mount(<Convo data={exampleData} />);
  expect(wrapper.find(Sender).length).toEqual(1);
 })

 it('TextField should render', async () => {
   let wrapper3 = mount(<TextField id="standard" label="Standard" />)
   expect(wrapper3).toBeTruthy();
 });

 it('Sender should send data', async () => {
  let wait = () => new Promise((resolve) => {
   const wrapper = mount(<Sender onSend={(data) => {
    console.log('on send', data);
    resolve(data);
   }} />);

   console.log('after mount');
   //let input = wrapper.find('input');
   //input.instance().value = 'My new value';//input.instance().value = 'My new value';
   wrapper.find("input").at(0).simulate('change', {target: {value: 'My new value1'}});
   wrapper.find('button').at(0).simulate('click');
  })
  let v = await wait();
  expect(v).toEqual('My new value1');
 })


 it('Convo should send data', async () => {
  let wait = () => new Promise((resolve) => {
   window.addEventListener("message", (msg) => {
    resolve(msg);
   }, false);

   const wrapper = mount(<Convo data={exampleData} />);
   let input = wrapper.find('input');
   //input.instance().value = 'My new value';
   wrapper.find("input").at(0).simulate('change', {target: {value: 'My new value1'}});
   wrapper.find('button').at(0).simulate('click');
  })
  let v = await wait();
  expect(v.data).toBeTruthy();
  expect(v.data.type).toEqual('single');
  expect(v.data.message).toEqual('My new value1');
 })

 it('App should receive conversation data and render it', async () => {
  const wrapper = mount(<App />);
  let wait = () => new Promise((resolve) => {
   window.addEventListener("message", (msg) => {
    resolve(msg.data);
   }, false);

   window.postMessage(exampleData, '*');
  });

  let v = await wait();
  wrapper.update();
  expect(wrapper.find(Convo).length).toEqual(1);
  expect(wrapper.find(User).length).toEqual(3);
  expect(wrapper.find(Message).length).toEqual(3);
 })


 it('Message Component should render Author, Text, Time components', () => {
  const wrapper = mount(<Message author="a" time={new Date()} text="lala" />);
  expect(wrapper.find(MessageText).length).toEqual(1);
  expect(wrapper.find(MessageTime).length).toEqual(1);
  expect(wrapper.find(MessageAuthor).length).toEqual(1);
 })

 it('MessageText Component should render text', () => {
  const wrapper = mount(<MessageText text={"love"} />);
  expect(wrapper.text()).toEqual('love');
 })

 it('MessageAuthor Component should render name', () => {
  const wrapper = mount(<MessageAuthor name={"love"} />);
  expect(wrapper.text()).toEqual('love');
 })

 it('Message Time Component should render time correctly', () => {
  const wrapper = mount(<MessageTime date={new Date('10/10/2018 11:44:25')} />);
  expect(wrapper.text()).toEqual('11:44');
 })


});