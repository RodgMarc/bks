import { Injectable } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tool } from './entities/tool.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tool)
    private repository: Repository<Tool>
  ) {}
  create(createToolDto: CreateToolDto) {
    let ferramenta:Tool = new Tool();

    ferramenta.name = createToolDto.name;
    console.log(ferramenta)
    return this.repository.save(ferramenta);
  }

  findAll() {
    return `This action returns all tools`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tool`;
  }

  update(id: number, updateToolDto: UpdateToolDto) {
    return `This action updates a #${id} tool`;
  }

  remove(id: number) {
    return `This action removes a #${id} tool`;
  }
}
