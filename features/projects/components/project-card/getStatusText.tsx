import { ProjectStatus } from "@api/projects.types";

export const getStatusText = (status: ProjectStatus): string => {
  switch (status) {
    case ProjectStatus.stable:
      return "Stable";
    case ProjectStatus.warning:
      return "Warning";
    case ProjectStatus.critical:
      return "Critical";
    default:
      return "";
  }
};
