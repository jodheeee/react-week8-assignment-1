import React from 'react';

import { Link } from 'react-router-dom';

import Title from '../layouts/Title';
import List from '../layouts/List';
import Item from '../layouts/Item';

export default function HomePage() {
  return (
    <div>
      <Title>
        Home
      </Title>
      <List>
        <Item>
          <Link to="/about">About</Link>
        </Item>
        <Item>
          <Link to="/login">Log in</Link>
        </Item>
        <Item>
          <Link to="/restaurants">Restaurants</Link>
        </Item>
        <Item>
          <Link to="/xxx">멸망의 길</Link>
        </Item>
      </List>
    </div>
  );
}
