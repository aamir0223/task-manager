import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  filter: "all" | "completed" | "pending";
}

const initialState: TaskState = {
  tasks: [],
  filter: "all",
};

const getTasksFromLocalStorage = (userId: string): Task[] => {
  const tasks = localStorage.getItem(`tasks_${userId}`);
  return tasks ? JSON.parse(tasks) : [];
};

// Create the slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Add a new task
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        localStorage.setItem(
          `tasks_${loggedInUser}`,
          JSON.stringify(state.tasks)
        );
      }
    },

    updateTask(state, action: PayloadAction<{ id: string; title: string }>) {
      const { id, title } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = title;
      }
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        localStorage.setItem(
          `tasks_${loggedInUser}`,
          JSON.stringify(state.tasks)
        );
      }
    },

    // Remove a task
    removeTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        localStorage.setItem(
          `tasks_${loggedInUser}`,
          JSON.stringify(state.tasks)
        );
      }
    },

    markTaskComplete(state, action: PayloadAction<string>) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        localStorage.setItem(
          `tasks_${loggedInUser}`,
          JSON.stringify(state.tasks)
        );
      }
    },

    setTaskFilter(state, action: PayloadAction<"all" | "completed" | "pending">) {
      state.filter = action.payload;
    },

    // Set tasks based on user
    setTasksForUser(state, action: PayloadAction<string>) {
      const tasks = getTasksFromLocalStorage(action.payload);
      state.tasks = tasks;
    },

    resetTasks(state) {
      state.tasks = [];
    },
  },
});

export const {
  addTask,
  updateTask,
  removeTask,
  markTaskComplete,
  setTaskFilter,
  setTasksForUser,
  resetTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
