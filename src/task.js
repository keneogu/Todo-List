class Todo {
	constructor(title, date, description, priority, project) {
	  this.title = title;
	  this.date = date;
	  this.description = description;
	  this.priority = priority;
	  this.project = project;
	  this.id = Date.now().toString();
	  this.status = false;
	}
  
	updateTodo(title, date, description, priority) {
	  this.title = title;
	  this.date = date;
	  this.description = description;
	  this.priority = priority;
	  return this;
	}
  }

  function removeTodo(projects, project, todoId) {
  project.todos = project.todos.filter((x) => x.id !== todoId);
  localStorage.toDoProjects = JSON.stringify(projects);
}