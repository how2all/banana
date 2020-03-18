import { Column, Entity, PrimaryGeneratedColumn, Generated } from 'typeorm';
// import { isUUID } from '@nestjs/common/utils/is-uuid';

@Entity()
export class Article {
  @PrimaryGeneratedColumn() // 主键
  id: number;

  @Column()
  @Generated(`uuid`)
  uuid: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}