import { query } from "express";
import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreatePointsItems1602005446745 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "points_items",
              "columns": [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()'
                },
                {
                  name: 'id_points',
                  type: 'uuid',
                  isNullable: false,
                },
                {
                  name: 'id_items',
                  type: 'uuid',
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

        await queryRunner.createForeignKey('points_items', new TableForeignKey({
            name: 'PointsProvider',
            columnNames: ['id_points'],
            referencedColumnNames: ['id'],
            referencedTableName: 'points',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }))

        await queryRunner.createForeignKey('points_items', new TableForeignKey({
            name: 'ItemsProvider',
            columnNames: ['id_items'],
            referencedColumnNames: ['id'],
            referencedTableName: 'items',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('points_items')
    }

}
