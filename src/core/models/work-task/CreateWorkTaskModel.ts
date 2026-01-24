interface CreateWorkTaskModel{
  title: string,
  status: number | null,
  dueDate: Date | null,
  categoryId: number,
}
