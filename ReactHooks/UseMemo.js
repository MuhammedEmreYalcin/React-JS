// useMemo():  belirli bir ifadenin değerini belleklemek suretiyle optimize etmenize olanak tanır 

import React from 'react';

const users = [
  { id: 'a', name: 'Emre' },
  { id: 'b', name: 'Hasan' },
  { id: 'a', name: 'Hakan' },
  { id: 'b', name: 'Ali' },
  { id: 'a', name: 'Ömer' },
  { id: 'b', name: 'Mustafa' },
];

const App = () => {
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = React.useMemo(
    () =>
      users.filter((user) => {
        console.log('Filter function is running ...');
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default App;