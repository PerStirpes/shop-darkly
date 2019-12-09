import React from 'react';
import ProductListing from '../components/ProductListing';

const IndexPage = () => <ProductListing />;

export default IndexPage;

// import React from 'react';
// import ProductListing from '../components/ProductListing';
// import { withLDProvider } from 'launchdarkly-react-client-sdk';

// const IndexPage = () => <ProductListing />;

// // export default IndexPage;

// // https://shoplaunchdarkly.myshopify.com/

// export default withLDProvider({ clientSideID: '5bbb0d6563bbbf387c0386b3' })(
//   IndexPage,
// );
