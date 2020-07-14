/*
MySQL Backup
Database: nodemysql
Backup Time: 2020-07-14 18:27:21
*/

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `nodemysql`.`meun`;
CREATE TABLE `meun` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '菜单表 id',
  `parents_id` int(11) DEFAULT NULL COMMENT '父菜单 id',
  `title` varchar(20) DEFAULT NULL COMMENT '标题',
  `iconClass` varchar(30) DEFAULT NULL COMMENT '阿里 icon 的 class',
  `page_url` varchar(40) DEFAULT NULL COMMENT '对应的页面地址',
  `is_show` int(1) DEFAULT '1' COMMENT '是否显示该菜单',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
BEGIN;
LOCK TABLES `nodemysql`.`meun` WRITE;
DELETE FROM `nodemysql`.`meun`;
INSERT INTO `nodemysql`.`meun` (`id`,`parents_id`,`title`,`iconClass`,`page_url`,`is_show`) VALUES (1, NULL, '首页', 'iconcaidancengji', '', 1),(2, NULL, '与行', 'iconrenwubiaoge', '', 1),(3, NULL, '与思', 'iconshikongpengzhuang', NULL, 1),(4, 2, '健身计划', '', NULL, 1),(5, 4, '今日计划', NULL, NULL, 1),(6, 4, '历史完成', NULL, NULL, 1),(7, 4, '图表详情', NULL, NULL, 1),(8, 2, '健身教程', '', NULL, 1),(9, 8, '健身动作', NULL, NULL, 1),(10, 8, '健身器材', NULL, NULL, 1),(11, 8, '健身肌群', NULL, NULL, 1),(12, 3, '所思所想', NULL, NULL, 1),(13, 12, '小想法', NULL, NULL, 1),(14, 12, '健身体会', NULL, NULL, 1);
UNLOCK TABLES;
COMMIT;
