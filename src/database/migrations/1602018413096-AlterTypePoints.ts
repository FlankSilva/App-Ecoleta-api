import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AlterTypePoints1602018413096 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('points', 'latitude')
        
        await queryRunner.dropColumn('points', 'longitude')

        await queryRunner.addColumn('points', new TableColumn({
            name: "latitude",
            type: 'decimal',
            isNullable: false,
        }))

        await queryRunner.addColumn('points', new TableColumn({
            name: "longitude",
            type: 'decimal',
            isNullable: false,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('points', 'latitude')
        
        await queryRunner.dropColumn('points', 'longitude')

        await queryRunner.addColumn('points', new TableColumn({
            name: "latitude",
            type: 'int',
            isNullable: false,
        }))

        await queryRunner.addColumn('points', new TableColumn({
            name: "longitude",
            type: 'int',
            isNullable: false,
        }))
    }

}
