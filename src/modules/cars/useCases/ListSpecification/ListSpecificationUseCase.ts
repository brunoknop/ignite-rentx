import { inject, injectable } from "tsyringe";

import { Specification } from "../../entity/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository,
  ) {}
  async execute(): Promise<Specification[]> {
    const specificationsList = await this.specificationsRepository.list();
    return specificationsList;
  }
}
export { ListSpecificationUseCase };
