import "@logseq/libs";
import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";
import { getAllProjects, getAllLabels } from "./todoistHelpers";

export default async function callSettings() {
  const settings: SettingSchemaDesc[] = [
    {
      key: "apiToken",
      type: "string",
      default: "KtE71bDUeY2OpDBr3LQEgWEHUZPFN1yi",
      title: "API Token",
      description:
        "Please enter your API token and restart Logseq. You can retrieve your API token from your Todoist developer dashboard.",
    },
    {
      key: "",
      type: "heading",
      default: "",
      title: "Sending Tasks",
      description: "",
    },
    {
      key: "sendDefaultProject",
      type: "enum",
      default: "",
      enumChoices: await getAllProjects(),
      enumPicker: "select",
      title: "Default Project",
      description: "Default project to send tasks to",
    },
    {
      key: "sendDefaultLabel",
      type: "enum",
      default: "",
      enumChoices: await getAllLabels(),
      enumPicker: "select",
      title: "Default Label",
      description: "Default label to label tasks",
    },
    {
      key: "sendDefaultDeadline",
      type: "boolean",
      default: false,
      title: "Default Deadline",
      description:
        "If set to true, all tasks sent to Todoist will have the deadline set as TODAY",
    },
    {
      key: "sendAppendUri",
      type: "boolean",
      default: true,
      title: "Append Logseq URI",
      description:
        "If set to true, all tasks sent to Todoist will have the Logseq URI appended.",
    },
    {
      key: "",
      type: "heading",
      default: "",
      title: "Retrieving Tasks",
      description: "",
    },
    {
      key: "retrieveDefaultProject",
      type: "enum",
      default: "",
      enumChoices: await getAllProjects(),
      enumPicker: "select",
      title: "Default Project",
      description: "Default project to retrieve tasks from",
    },
    {
      key: "projectNameAsParentBlk",
      type: "boolean",
      default: false,
      title: "Set Project Name as Parent Block",
      description:
        "If true, tasks will be added under a parent block with their project name.",
    },
    {
      key: "retrieveAppendTodo",
      type: "boolean",
      default: true,
      title: "Append TODO",
      description:
        "If set to true, all retrieved tasks will have a TODO appended.",
    },
    {
      key: "retrieveAppendUrl",
      type: "boolean",
      default: false,
      title: "Append URL",
      description:
        "If set to true, all retrieved tasks will have a Todoist URL appended.",
    },
    {
      key: "retrieveNoTags",
      type: "boolean",
      default: false,
      title: "Do not append metadata as tags",
      description:
          "If set to true, no tags will be added to each retrieved task.",
    },
    {
      key: "retrieveClearTasks",
      type: "boolean",
      default: false,
      title: "Clear Tasks from Todoist",
      description:
        "If set to true, retrieved tasks will be deleted in Todoist.",
    },
    {
      key: "",
      type: "heading",
      default: "",
      title: "Todoist Sync",
      description: "",
    },
    {
      key: "enableTodoistSync",
      type: "boolean",
      default: false,
      title: "Enable Todoist Sync",
      description:
        "If set to true, Todoist Sync will be enabled. The default retrieve project identified above will be used as the synchronising project",
    },
  ];

  logseq.useSettingsSchema(settings);
}
