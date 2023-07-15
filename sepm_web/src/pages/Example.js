import React, { useState } from 'react';

const DynamicInputs = () => {
  const [inputs, setInputs] = useState(['']);

  const handleAddInput = () => {
    const newInputs = [...inputs, ''];
    setInputs(newInputs);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const renderInputs = () => {
    return inputs.map((input, index) => (
      <div key={index}>
        <input
          type="text"
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
        <button onClick={() => handleRemoveInput(index)}>Delete</button>
      </div>
    ));
  };

  return (
    <div>
      {renderInputs()}
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
};

export default DynamicInputs;