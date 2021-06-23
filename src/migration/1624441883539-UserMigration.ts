import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration1624441883539 implements MigrationInterface {
    name = "UserMigration1624441883539";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TABLE `book` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
        );
        await queryRunner.query(
            "CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `book`");
    }
}
