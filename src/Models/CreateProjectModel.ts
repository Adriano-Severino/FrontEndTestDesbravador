export enum ProjectRiskEnum {
  'Baixo risco' = 0,
  'Médio risco' = 1,
  'Alto risco' = 2,
}

  export interface CreateProjectModel {
    ProjectName: string;
    ProjectDescription: string;
    ProjectRiskEnum: ProjectRiskEnum;
  }
  