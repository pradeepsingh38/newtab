import React from 'react';
import { useSelector } from 'react-redux';

const NewTab = () => {
  const data = useSelector(state => state.data);

  const openTab = () => {
    // Set the URL to the specific route of your React application
    const newTabUrl = `${window.location.origin}/new-tab`;
    window.open(newTabUrl, "_blank");
  };

  return (
    <button onClick={openTab}>
      New Tab
    </button>
  );
};

export default NewTab;
