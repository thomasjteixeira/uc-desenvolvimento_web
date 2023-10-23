function TaskList(props) {
  return (
      <ul>
          {props.tasks.map((task, index) => (
              <li key={index}>- {task}</li>
          ))}
      </ul>
  );
}

export default TaskList;

// ---------------
// function App() {
//   const tasks = ['Acordar', 'Escovar os dentes', 'Tomar café', 'Ir trabalhar'];
//   return (
//     <div className="App">
//       <TaskList tasks={tasks} />
//     </div>
//   );
// }