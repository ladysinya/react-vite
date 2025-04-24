import * as React from 'react'
import AddressBook from './Fragments/AddressBook';
import AddContact from './Fragments/AddContact';
import { useConfig } from './Contexts/SIContext';
import './Styles/sample-integration.css'

function SampleIntegration() {
    const { config } = useConfig();

    function getFragment() {
        switch (config.fragment) {
            case 'main':
                return <AddressBook />;
            case 'addContact':
                return <AddContact initialValues={config.user} />
            default:
                return <div>Unrecognized fragment: {config.fragment}</div>
        }
    }

    return (
        <div className="sample-integration">
            <s-mkt>
                <div className="container">
                    { getFragment() }
                </div>
            </s-mkt>
        </div>
    );
}

export default SampleIntegration

// -----------------------
declare module 'react' {
  namespace JSX {
      interface IntrinsicElements {
          's-mkt': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
          'sm-fragment': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
          'si-button-bar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}