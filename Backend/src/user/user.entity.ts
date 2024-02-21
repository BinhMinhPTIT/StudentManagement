import {
    AfterInsert,
    AfterRemove,
    AfterUpdate,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';
  import { Student } from '../student/student.entity';
  
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
  
    @Column({ default: true})
    admin: boolean;
  
    @OneToMany(()=> Student, (student) => student.user )
    students: Student[];
  
    @AfterInsert()
    logInsert() {
      console.log('Inserted User with id', this.id);
    }
  
    @AfterUpdate()
    logUpdate() {
      console.log('Updated User with id', this.id);
    }
  
    @AfterRemove()
    logRemove() {
      console.log('Removed User with id', this.id);
    }
  }
  