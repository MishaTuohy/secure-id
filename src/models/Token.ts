import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('token')
export class Token {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'varchar' })
  accessToken: string;

  @Column({ type: 'varchar', nullable: true })
  refreshToken?: string;

  @Column({ type: 'timestamp' })
  expiryDate: Date;

  @Column({ type: 'varchar' })
  tokenType: string;

  @Column({ type: 'boolean', default: false })
  isRevoked: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
