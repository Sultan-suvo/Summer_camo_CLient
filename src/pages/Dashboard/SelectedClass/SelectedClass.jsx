const SelectedClass = ({ selectedClasses, onDeleteClass }) => {
    return (
      <div>
        <h2>My Selected Classes:</h2>
        {selectedClasses.map((selectedClass) => (
          <div key={selectedClass._id}>
            <p>Class Name: {selectedClass.name}</p>
            {/* Display other relevant information */}
            <button onClick={() => onDeleteClass(selectedClass)}>Delete</button>
            {/* Add Pay button and other relevant functionality */}
          </div>
        ))}
      </div>
    );
  };
  
  export default SelectedClass;
  