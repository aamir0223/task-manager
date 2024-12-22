import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import { setTasksForUser } from '../../redux/slices/taskSlice';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const filter = useSelector((state: any) => state.tasks.filter);
  const loggedInUser = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    if (loggedInUser) {
      dispatch(setTasksForUser(loggedInUser));
    }
  }, [dispatch, loggedInUser]);

  const filteredTasks = tasks.filter((task: Task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div className="task-list">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task: Task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <div className='fallback'>
          <img src="./no-image.jpg" alt="Task Image" />
        </div>
      )}
    </div>
  );
};

export default TaskList;
