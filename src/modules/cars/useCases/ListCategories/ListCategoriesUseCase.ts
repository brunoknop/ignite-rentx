import { inject, injectable } from "tsyringe";

import { Category } from "../../entity/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}
  async execute(): Promise<Category[]> {
    const categoriesList = await this.categoriesRepository.list();
    return categoriesList;
  }
}
export { ListCategoriesUseCase };
