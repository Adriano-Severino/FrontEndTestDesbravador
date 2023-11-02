export type EmployeesModelsList = EmployeesModels[]

export interface EmployeesModels {
  id: string
  nome: string
  sobrenome: string
  email: string
  password: string
  role: number
  projectId?: string
}
