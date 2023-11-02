import { EmployeesModelsList } from "./EmployeesModels"

export type ProjectModelsList = ProjectModels[]

export interface ProjectModels {
  projectName: string
  projectDescription: string
  startDate: string
  endDate: any
  projectRiskEnum: number
  statusProjectEnum: number
  employees: EmployeesModelsList
  id: string
}
