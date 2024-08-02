import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tool } from './entities/tool.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tool)
    private repository: Repository<Tool>,
  ) {}

  create(createToolDto: Tool) {
    let ferramenta: Tool = new Tool();

    ferramenta.name = createToolDto.name;
    ferramenta.category = createToolDto.category;
    ferramenta.serialNumber = createToolDto.serialNumber;
    ferramenta.obs = createToolDto.obs;

    console.log(ferramenta);
    return this.repository.save(ferramenta);
  }

  findAll() {
    console.log('Retornando todas as ferramentas');
    return this.repository.find();
  }

  findOne(id: number) {
    console.log('Retornando de id: ' + id);
    return this.repository.findOne({
      where: { id },
    });
  }

  update(id: number, updateToolDto: Tool) {
    return this.repository.update(id, updateToolDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
