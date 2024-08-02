import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToolsService } from './tools.service';
import { Tool } from './entities/tool.entity';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Post()
  create(@Body() createToolDto: Tool) {
    console.log(createToolDto);
    return this.toolsService.create(createToolDto);
  }

  @Get()
  findAll() {
    return this.toolsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toolsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToolDto: Tool) {
    return this.toolsService.update(+id, updateToolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toolsService.remove(+id);
  }
}
