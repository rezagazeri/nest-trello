import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { BoardEntity } from '../board/board.entity';
import { UserRO } from './user.dto';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column({
    type: 'text',
    unique: true,
  })
  username: string;

  @Column('text')
  password: string;

  @Column({ type: 'text', default: 'guest' })
  role: string;

  @OneToMany(type => BoardEntity, board => board.author, { cascade: true })
  boards: BoardEntity[];

  @ManyToMany(type => BoardEntity, board => board.stars)
  @JoinTable()
  stars: BoardEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  toResponseObject(showToken: boolean = true): UserRO {
    const { id, created, username, token, password, role, email } = this;
    const responseObject: UserRO = {
      id,
      email,
      created,
      username,
      role,
      password
    };

    if (this.boards) {
      responseObject.boards = this.boards;
    }

    if (this.stars) {
      responseObject.stars = this.stars;
    }

    if (showToken) {
      responseObject.token = token;
    }

    return responseObject;
  }

  private get token(): string {
    const { id, username } = this;

    return jwt.sign(
      {
        id,
        username,
      },
      process.env.SECRET,
      { expiresIn: '7d' },
    );
  }
}
