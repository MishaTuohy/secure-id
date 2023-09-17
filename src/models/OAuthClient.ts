import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('oauth_client')
export class OAuthClient {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  clientName: string;

  @Column({ type: 'varchar', length: 255 })
  clientSecret: string;

  @Column({ type: 'varchar', length: 255 })
  redirectUri: string;

  @Column({ type: 'varchar', length: 255 })
  scopes: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
