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
    console.log('Criando ferramenta');
    const ferramenta: Tool = new Tool();

    ferramenta.name = createToolDto.name;
    ferramenta.category = createToolDto.category;
    ferramenta.serialNumber = createToolDto.serialNumber;
    ferramenta.obs = createToolDto.obs;

    return this.repository.save(ferramenta);
  }

  findAll() {
    console.log('Retornando todas as ferramentas');
    return this.repository.find();
  }

  findOne(id: number) {
    console.log('Retornando ferramenta de id: ' + id);
    return this.repository.findOne({
      where: { id },
    });
  }

  async update(id: number, dto: Tool) {
    console.log('Atualizando ferramenta de id: ' + id);

    // busca a ferramenta no banco de dados
    const tool = await this.repository.findOne({
      where: { id },
    });

    // se a ferramenta não existir, retorna um erro
    if (tool === undefined) {
      return 'Ferramenta não encontrada';
    }

    // verifica se o parametro do dto foi passado e atualiza o valor
    if (dto.name !== undefined) {
      tool.name = dto.name;
    }
    if (dto.category !== undefined) {
      tool.category = dto.category;
    }
    if (dto.serialNumber !== undefined) {
      tool.serialNumber = dto.serialNumber;
    }
    if (dto.obs !== undefined) {
      tool.obs = dto.obs;
    }

    // atualiza a ferramenta no banco de dados
    return this.repository.update(id, tool);
  }

  remove(id: number) {
    console.log('Deletando ferramenta de id: ' + id);
    return this.repository.delete(id);
  }
}
