import { PageContainer } from "@features/layout";
import { IssueList } from "@features/issues";
import { IssueFiltersBar } from "../../features/issues/components/issue-filters-bar";
import type { NextPage } from "next";

const IssuesPage: NextPage = () => {
  return (
    <PageContainer
      title="Issues"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <IssueFiltersBar />
      <IssueList />
    </PageContainer>
  );
};

export default IssuesPage;
