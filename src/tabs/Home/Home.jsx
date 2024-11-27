import TaskList from "../../components/TaskList/TaskList";
import css from "./Home.module.css";
import tasks from "../../data/tasks.json";

export default function Home() {
  return (
    <div>
      <h1 className={css.title}>GoIT homework tasks 👩🏻‍🎓</h1>
      <p className={css.text}>
        I created this web application to practice more different performance of
        assigned tasks.
        <br></br> You can look for results my work by clicking the project name
        tabs above.
      </p>
      <p className={css.text}>Below is a list of tasks👇</p>
      <TaskList data={tasks} />
    </div>
  );
}
