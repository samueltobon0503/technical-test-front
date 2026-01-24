interface WorkTaskModel{
  id: string,
  title: string,
  status: number,
  dueDate: string,
  categoryId: number,
  category: CategoryModel,
  rowVersion: string
}
