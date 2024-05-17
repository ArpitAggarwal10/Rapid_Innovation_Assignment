import React, { useState } from 'react';
import Header from './Header';
import styled from 'styled-components';

const TaskPageContainer = styled.div`
  padding: 20px;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  background: #ffffff;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

const TaskTitle = styled.h3`
  margin: 0;
  color: #333333;
`;

const TaskPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
  ]);

  return (
    <TaskPageContainer>
      <Header title="Task Page" />
      <h2>Task List</h2>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskTitle>{task.title}</TaskTitle>
          </TaskItem>
        ))}
      </TaskList>
    </TaskPageContainer>
  );
};

export default TaskPage;