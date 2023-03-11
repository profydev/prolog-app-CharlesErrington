export enum ProjectLanguage {
  react = "react",
  node = "node",
  python = "python",
}

export enum ProjectStatus {
  stable = "info",
  warning = "warning",
  critical = "error",
}

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

export type Project = {
  id: string;
  name: string;
  language: ProjectLanguage;
  numIssues: number;
  numEvents24h: number;
  status: ProjectStatus;
};
