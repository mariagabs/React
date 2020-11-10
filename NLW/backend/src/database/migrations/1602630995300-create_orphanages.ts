import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602630995300 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // REALIZA ALTERAÇÕES
    // CRIAR TABELA, CRIAR NOVO CAMPO, DELETAR CAMPO

    await queryRunner.createTable(new Table({
      name: 'orphanages',
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
          name: "name",
          type: "varchar"
        },
        {
          name: "latitude",
          type: "decimal",
          scale: 10, // depois da vírgula
          precision: 2 // antes da vírgula
        },
        {
          name: "longitude",
          type: "decimal",
          scale: 10, // depois da vírgula
          precision: 2 // antes da vírgula
        },
        {
          name: "about",
          type: "text"
        },
        {
          name: "instructions",
          type: "text"
        },
        {
          name: "open_on_weekends",
          type: "boolean",
          default: false
        },
        {
          name: "opening_hours",
          type: "varchar"
        }
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DESFAZER O QUE FOI FEITO NO UP

    await queryRunner.dropTable('orphanages');
  }

}
