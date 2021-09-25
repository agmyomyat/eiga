import { Search } from '@components/meiliSearch';
import React from 'react';
import DetectOtherLogin from '@components/modals/detectOtherLogin';

export default function search() {
   return (
      <div
         style={{
            marginBottom: 100,
         }}
      >
         <Search />
      </div>
   )
}
