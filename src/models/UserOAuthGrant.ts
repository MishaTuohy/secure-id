import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_oauth_grant')
export class UserOAuthGrant {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  userId: number;

  @Column({ type: 'int' })
  clientId: number;

  @Column({ type: 'varchar' })
  scopes: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
