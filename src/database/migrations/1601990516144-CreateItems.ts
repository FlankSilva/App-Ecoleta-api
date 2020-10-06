import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreatePoints1601985710291 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "items",
            "columns": [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
              },
              {
                name: 'image',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'title',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'update_at',
                type: 'timestamp',
                default: 'now()',
              },
            ]
          })
        )
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('items')
    }

}
