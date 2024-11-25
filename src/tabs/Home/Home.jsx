import TaskList from "../../components/TaskList/TaskList";

import tasks from "../../data/tasks.json";

export default function Home() {
  return (
    <div>
      <h1>GoIT homework tasks 👩🏻‍🎓</h1>
      <p>
        I created this web application to practice more different performance of
        assigned tasks.
      </p>
      <p>Below is a list of tasks👇</p>
      <TaskList data={tasks} />
    </div>
  );
}
