import { useState } from 'react';
import Layout from './components/Layout';
import FloatingDock from './components/FloatingDock';
import Core from './views/Core';
import Network from './views/Network';
import Vault from './views/Vault';
// Removed Uplink import

export default function App() {
  const [activeTab, setActiveTab] = useState('core');

  const renderContent = () => {
    switch (activeTab) {
      case 'core': return <Core />;
      case 'network': return <Network />;
      case 'vault': return <Vault />;
      // Removed the uplink case
      default: return <Core />;
    }
  };

  return (
    <>
      <Layout>
        {renderContent()}
      </Layout>
      <FloatingDock activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}