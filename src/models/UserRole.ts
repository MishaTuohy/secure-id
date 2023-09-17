import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_role')
export class UserRole {
  @PrimaryGeneratedColumn('increment')
  userRoleId: number;

  @Column({ type: 'int' })
  userId: number;

  @Column({ type: 'int' })
  roleId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
