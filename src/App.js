import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin: 20px auto;
  font-family: 'Arial', sans-serif;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const UserChip = styled.div`
  display: flex;
  align-items: center;
  background-color: #3498db;
  color: #fff;
  margin: 5px;
  padding: 8px;
  border-radius: 20px;
`;

const RemoveButton = styled.button`
  margin-left: 10px;
  cursor: pointer;
  border: none;
  background: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #ecf0f1;
  }
`;

const StyledInput = styled.input`
  flex-grow: 1;
  border: none;
  padding: 8px;
  margin: 5px;
  border-radius: 5px;
`;

const SuggestionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow-y: auto;
  max-height: 150px;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ecf0f1;
  }
`;

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [suggestions, setSuggestions] = useState(['User1', 'User2', 'User3', 'User4', 'User5']);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUserSelect = (user) => {
    if (!selectedUsers.includes(user)) {
      setSelectedUsers([...selectedUsers, user]);
      setInputValue('');
    }
  };

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter((selectedUser) => selectedUser !== user);
    setSelectedUsers(updatedUsers);
  };

  const filteredSuggestions = suggestions.filter(
    (user) => !selectedUsers.includes(user) && user.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="user-selector-container">
      <div className="input-container">
        {selectedUsers.map((user) => (
          <div key={user} className="user-chip">
            {user}
            <button onClick={() => handleRemoveUser(user)}>X</button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type users..."
        />
      </div>
      <ul className="suggestions-list">
        {filteredSuggestions.map((user) => (
          <li key={user} onClick={() => handleUserSelect(user)}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
