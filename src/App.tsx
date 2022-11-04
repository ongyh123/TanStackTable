import React from 'react';
import './App.css';
import { useReactTable } from '@tanstack/react-table'

function App() {
  const table = useReactTable(Option)

  // ...render your table
}

export default App;
