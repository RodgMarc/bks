import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    if (tool === null) {
      throw new HttpException(
        'Ferramenta não encontrada',
        HttpStatus.BAD_REQUEST,
      );
    }

    console.log(tool);

    // verifica se o parametro do dto foi passado e atualiza o valor
    if (dto.name !== null) {
      tool.name = dto.name;
    }
    if (dto.category !== null) {
      tool.category = dto.category;
    }
    if (dto.serialNumber !== null) {
      tool.serialNumber = dto.serialNumber;
    }
    if (dto.obs !== null) {
      tool.obs = dto.obs;
    }

    // atualiza a ferramenta no banco de dados
    await this.repository.update(id, tool);

    // busca a ferramenta atualizada
    const updatedTool = await this.repository.findOne({
      where: { id },
    });

    // retorna a ferramenta atualizada
    return updatedTool;
  }

  async remove(id: number) {
    // busca a ferramenta no banco de dados
    const tool = await this.repository.findOne({
      where: { id },
    });

    // se a ferramenta não existir, retorna um erro
    if (tool === null) {
      throw new HttpException(
        'Ferramenta não encontrada',
        HttpStatus.BAD_REQUEST,
      );
    }

    this.repository.delete(id);
    return 'Ferramenta de id: ' + id + ' deletada com sucesso';
  }
}
