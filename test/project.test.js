const start = require("../src/start");
const project = require("../src/project");

const target = document.createElement("input");
target.setAttribute("type", "text");
target.value = "Jest-test";
const projects = start.getProjects();

describe("createProject", () => {
  it("Creates a new Project", () => {
    const newProject = projects.projectModule.createProject(target);
    expect(newProject).toEqual('Jest-test');
  });
});

describe("removeProject", () => {
  it("Removes a new Project", () => {
    const resultProjects = project.removeProject(projects, projects[0]);
    expect(resultProjects.length).toBe(projects.length - 1);
  });
});
