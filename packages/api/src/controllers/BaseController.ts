import { Connection, Entity, EntityTarget, Repository } from "typeorm";

export class BaseController<T> {
  private repository: Repository<T>;

  constructor(type: EntityTarget<T>, connection: Connection) {
    this.repository = connection.getRepository<T>(type);
  }

  public async getAll() {
    return await this.repository.find();
  }

  public async get(id: number) {
    return await this.repository.findOne(id);
  }

  public async upsert(content: T, id?: number) {
    let contentToSave;
    if (id) {
      contentToSave = await this.repository.findOne(id);
      Object.keys(content).forEach((key) => {
        contentToSave[key] = content[key];
      });
    } else {
      contentToSave = content;
    }
    return await this.repository.save(contentToSave);
  }

  public async remove(id: number) {
    return await this.repository.delete(id);
  }
}
