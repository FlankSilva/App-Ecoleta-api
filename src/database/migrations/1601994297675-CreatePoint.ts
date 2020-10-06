import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreatePoint1601994297675 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "points",
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
                name: 'name',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'email',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'whatsapp',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'latitude',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'longitude',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'city',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'uf',
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
        await queryRunner.dropTable('points')
    }

}
