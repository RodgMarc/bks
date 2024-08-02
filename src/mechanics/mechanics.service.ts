import { Injectable } from '@nestjs/common';
import { Mechanic } from './entities/mechanic.entity';

@Injectable()
export class MechanicsService {
  create(createMechanicDto: Mechanic) {
    return 'This action adds a new mechanic';
  }

  findAll() {
    return `This action returns all mechanics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mechanic`;
  }

  update(id: number, updateMechanicDto: Mechanic) {
    return `This action updates a #${id} mechanic`;
  }

  remove(id: number) {
    return `This action removes a #${id} mechanic`;
  }
}
