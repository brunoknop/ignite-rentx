import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/data-source";
import { Specification } from "../../entity/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }
  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({ name });
    return specification;
  }
  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = await this.repository.create({
      name,
      description,
    });
    await this.repository.save(specification);
  }
  async list(): Promise<Specification[]> {
    const specificationsList = await this.repository.find();
    return specificationsList;
  }
}

export { SpecificationRepository };
