import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tool } from './entities/tool.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tool)
    private repository: Repository<Tool>
  ) {}
  
  create(createToolDto: Tool) {
    let ferramenta:Tool = new Tool();

    ferramenta.name = createToolDto.name;
    ferramenta.category = createToolDto.category;
    ferramenta.serialNumber = createToolDto.serialNumber;
    ferramenta.obs = createToolDto.obs;

    console.log(ferramenta)
    return this.repository.save(ferramenta);
  
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tool`;
  }

  update(id: number, updateToolDto: Tool) {
    return `This action updates a #${id} tool`;
  }

  remove(id: number) {
    return `This action removes a #${id} tool`;
  }
}
