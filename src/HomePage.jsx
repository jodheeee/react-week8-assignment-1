import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import PageWrapper from './PageWrapper';

const MenuList = styled.ul({
  listStyle: 'none',
  padding: '0',
  display: 'flex',
  flexFlow: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '70vh',
});

const MenuItem = styled.li({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1 1',
  borderBottom: '1px #364f6b solid',
  '&:first-of-type': {
    borderTop: '1px #364f6b solid',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#f5f5f5',
  },
  '& a': {
    fontSize: '1.5em',
    color: '#364f6b',
    '&:link': {
      textDecoration: 'none',
    },
    '&:hover': {
      fontWeight: 'bold',
      color: '#3fc1c9',
    },
  },
});

export default function HomePage() {
  return (
    <PageWrapper>
      <h2>Home</h2>
      <MenuList>
        <MenuItem><Link to="/about">About</Link></MenuItem>
        <MenuItem><Link to="/login">Log in</Link></MenuItem>
        <MenuItem><Link to="/restaurants">Restaurants</Link></MenuItem>
        <MenuItem><Link to="/xxx">멸망의 길</Link></MenuItem>
      </MenuList>
    </PageWrapper>
  );
}
