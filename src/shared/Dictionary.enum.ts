
export enum RoutesEnum {
    WORK_TASK = 'work-tasks',
    CATEGORIES = 'categories',
    CREATE = 'create',
    EDIT = 'edit',
}

export enum TaskStatus {
  Pending = 0,
  InProgress = 1,
  Completed = 2
}

export const TASK_STATUS_LABELS: Record<number, string> = {
  [TaskStatus.Pending]: 'Pendiente',
  [TaskStatus.InProgress]: 'En Progreso',
  [TaskStatus.Completed]: 'Completada'
};
