import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddPhoto from './features/photos/create';
import PhotoList from './features/photos/list';
import SearchBar from './features/search/search-bar';

function App() {
  return (
    <Provider store={store}>
      <main>
        <h1>Doggiegram</h1>
        <SearchBar />
        <AddPhoto />
        <PhotoList />
      </main>
    </Provider>
  );
}

export default App;
