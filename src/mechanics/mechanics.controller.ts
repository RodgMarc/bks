import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MechanicsService } from './mechanics.service';
import { Mechanic } from './entities/mechanic.entity';

@Controller('mechanics')
export class MechanicsController {
  constructor(private readonly mechanicsService: MechanicsService) {}

  @Post()
  create(@Body() createMechanicDto: Mechanic) {
    return this.mechanicsService.create(createMechanicDto);
  }

  @Get()
  findAll() {
    return this.mechanicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mechanicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMechanicDto: Mechanic) {
    return this.mechanicsService.update(+id, updateMechanicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechanicsService.remove(+id);
  }
}
