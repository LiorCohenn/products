import React from 'react';
import styled from 'styled-components';

import { Products } from './features/Products/Products';

const AppWarper = styled.div`
 height: 100vh;
  width: 100vw;
`

function App() {
  return (
    <AppWarper>
        <Products />
    </AppWarper>
  );
}

export default App;
