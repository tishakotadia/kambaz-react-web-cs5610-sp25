import { Button, FormControl, ListGroup } from "react-bootstrap";

export default function TodoForm({
  todo,
  setTodo,
  addTodo,
  updateTodo
}: {
  todo: { id: string; title: string };
  setTodo: (todo: { id: string; title: string }) => void;
  addTodo: (todo: { id: string; title: string }) => void;
  updateTodo: (todo: { id: string; title: string }) => void;
}) {
  return (
    <ListGroup.Item className="d-flex align-items-center">
      <FormControl
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        className="me-2"
      />
      <Button
        onClick={() => updateTodo(todo)}
        id="wd-update-todo-click"
        variant="warning"
        className="me-2"
      >
        Update
      </Button>
      <Button
        onClick={() => addTodo(todo)}
        id="wd-add-todo-click"
        variant="success"
      >
        Add
      </Button>
    </ListGroup.Item>
  );
}
