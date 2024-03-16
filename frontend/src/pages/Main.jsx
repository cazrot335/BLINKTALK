import React from 'react';
import ShareList from '../components/shareList';

const Main = () => {
 return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '30%' }}>
        <ShareList />
      </div>
      <div style={{ width: '70%' }}>
        {/* Chat area goes here */}
      </div>
    </div>
 );
};

export default Main;

