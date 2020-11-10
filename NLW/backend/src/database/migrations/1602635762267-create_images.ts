import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602635762267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'image',
            columns: [
            {
                name: "id",
                type: "integer",
                unsigned: true, // sempre positivo
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment" // auto increment
            },
            {
                name: 'path',
                type: 'varchar'
            },
            {
                name: 'orphanage_id',
                type: 'integer'
            }
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', // se o id mudar, ele muda automaticamente, assim o orfanato não perde as imagens com ele relacionadas
                    onDelete: 'CASCADE', // deleta as imagens caso o orfanato seja deletado
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('image');
    }

}
