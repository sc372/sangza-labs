const fs = require("fs");
const { inputRequired } = require("./utils");

const authors = JSON.parse(fs.readFileSync("./data/author.json"));

module.exports = (plop) => {
  plop.setGenerator("project post", {
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Project post title?",
        validate: inputRequired("title"),
      },
      {
        type: "list",
        name: "author",
        message: "The author of project post?",
        choices: authors.map((author) => ({
          name: author.id,
          value: author.id,
        })),
      },
      {
        type: "input",
        name: "project",
        message: "project name?",
      },
      {
        type: "confirm",
        name: "draft",
        message: "It's a draft?",
      },
    ],
    actions: (data) => {
      // Get current date
      data.createdDate = new Date().toISOString().split("T")[0];

      // Parse tags as yaml array
      if (data.project) {
        data.project = `\nproject:\n  - ${data.project}`;
      }

      return [
        {
          type: "add",
          path: "../data/project/{{createdDate}}--{{dashCase title}}/index.md",
          templateFile: "templates/project-post-md.template",
        },
      ];
    },
  });
};
