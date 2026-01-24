interface UpdateWorkTaskModel{
  id: string,
  title: string,
  status: number | null,
  dueDate: Date | null,
  categoryId: number,
  rowVersion: string
}
