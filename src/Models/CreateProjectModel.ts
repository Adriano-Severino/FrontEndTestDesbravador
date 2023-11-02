import { ProjectRiskEnum } from "./ProjectRiskEnum";

export interface CreateProjectModel {
    ProjectName: string;
    ProjectDescription: string;
    ProjectRiskEnum: ProjectRiskEnum;
  }
