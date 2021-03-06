import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpecificationsRepository,
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const specification = await this.specificationsRepository.findByName(name);
    if (specification) {
      throw new Error("Specification already exists");
    }
    this.specificationsRepository.create({ name, description });
  }
}
export { CreateSpecificationUseCase };
