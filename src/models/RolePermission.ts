import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('role_permission')
export class RolePermission {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  roleId: number;

  @Column({ type: 'int' })
  permissionId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
