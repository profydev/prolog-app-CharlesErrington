import { axios } from "./axios";
import type { Issue, IssueLevel } from "./issues.types";
import type { Page } from "@typings/page.types";

const ENDPOINT = "/issue";

export async function getIssues(
  page: number,
  options?: { signal?: AbortSignal; level?: IssueLevel }
) {
  const { data } = await axios.get<Page<Issue>>(ENDPOINT, {
    params: { page, level: options?.level },
    signal: options?.signal,
  });

  console.log("data data data data", data);
  return data;
}
