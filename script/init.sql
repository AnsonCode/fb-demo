alter user 'root'@'%' identified with mysql_native_password by '123456';
flush privileges;
select host,user,plugin,authentication_string from mysql.user;

CREATE DATABASE rbac;
-- SHOW DATABASES;
USE rbac;


SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Permission
-- ----------------------------
DROP TABLE IF EXISTS `Permission`;
CREATE TABLE `Permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `operationPath` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `operationId` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Permission_name_key` (`name`),
  UNIQUE KEY `Permission_operationPath_key` (`operationPath`),
  UNIQUE KEY `Permission_operationId_key` (`operationId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of Permission
-- ----------------------------
BEGIN;
INSERT INTO `Permission` (`id`, `name`, `operationPath`, `operationId`) VALUES (1, '创建待做事项', '/Todo/CreateOneTodo', 1429957565743104);
INSERT INTO `Permission` (`id`, `name`, `operationPath`, `operationId`) VALUES (2, '删除待做事项', '/Todo/DeleteOneTodo', 1429957567381504);
COMMIT;

-- ----------------------------
-- Table structure for Role
-- ----------------------------
DROP TABLE IF EXISTS `Role`;
CREATE TABLE `Role` (
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '编码',
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='角色';

-- ----------------------------
-- Records of Role
-- ----------------------------
BEGIN;
INSERT INTO `Role` (`code`, `name`) VALUES ('123', '123');
INSERT INTO `Role` (`code`, `name`) VALUES ('a111', '1111');
INSERT INTO `Role` (`code`, `name`) VALUES ('a111111', '1111');
INSERT INTO `Role` (`code`, `name`) VALUES ('sys', '系统');
COMMIT;

-- ----------------------------
-- Table structure for T
-- ----------------------------
DROP TABLE IF EXISTS `T`;
CREATE TABLE `T` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `des` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of T
-- ----------------------------
BEGIN;
INSERT INTO `T` (`id`, `name`, `des`) VALUES (2, 'sss', 'ssss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (10, 'auth0|637b4ab0c0cb508c49de7cf3', NULL);
INSERT INTO `T` (`id`, `name`, `des`) VALUES (11, 'sss', '111');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (12, 'exshi', 'sdfsdf');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (13, 'exshi', 'sdfsdf');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (14, 'exshi', 'sdfsdf');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (15, 'exshi', 'sdfsdf');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (16, '急急急', '哦哦哦');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (17, 'sere', 'esre');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (18, 'weodf sfdsf', 'dfdsf');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (19, '似懂非懂', '地方');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (20, '学习', '乐然');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (21, '22211122', NULL);
INSERT INTO `T` (`id`, `name`, `des`) VALUES (22, 's\'s\'s', 'sss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (23, 'string', 'string');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (24, 's\'s\'s', 'sss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (25, 'sss', 'sss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (26, 'sss', 'sss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (27, 'sdfsd', 'dfdsf');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (28, 'sss', 'ssd');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (29, 'sss', 'sdf');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (30, 'sss', 'ss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (31, 'sssss', 'ssss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (32, 'sss', 'sss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (33, 'ssss', 'sss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (34, 'ssss', 'sss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (35, 'ssss', 'sss');
INSERT INTO `T` (`id`, `name`, `des`) VALUES (36, 'ssss', 'sss');
COMMIT;

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `uid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of User
-- ----------------------------
BEGIN;
INSERT INTO `User` (`uid`, `name`) VALUES ('12', '22');
COMMIT;

-- ----------------------------
-- Table structure for _PermissionToRole
-- ----------------------------
DROP TABLE IF EXISTS `_PermissionToRole`;
CREATE TABLE `_PermissionToRole` (
  `A` int NOT NULL,
  `B` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  UNIQUE KEY `_PermissionToRole_AB_unique` (`A`,`B`),
  KEY `_PermissionToRole_B_index` (`B`),
  CONSTRAINT `_PermissionToRole_A_fkey` FOREIGN KEY (`A`) REFERENCES `Permission` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_PermissionToRole_B_fkey` FOREIGN KEY (`B`) REFERENCES `Role` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of _PermissionToRole
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for _RoleToUser
-- ----------------------------
DROP TABLE IF EXISTS `_RoleToUser`;
CREATE TABLE `_RoleToUser` (
  `A` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `B` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  UNIQUE KEY `_RoleToUser_AB_unique` (`A`,`B`),
  KEY `_RoleToUser_B_index` (`B`),
  CONSTRAINT `_RoleToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Role` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_RoleToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of _RoleToUser
-- ----------------------------
BEGIN;
INSERT INTO `_RoleToUser` (`A`, `B`) VALUES ('123', '12');
INSERT INTO `_RoleToUser` (`A`, `B`) VALUES ('a111', '12');
INSERT INTO `_RoleToUser` (`A`, `B`) VALUES ('sys', '12');
COMMIT;

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cate` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of post
-- ----------------------------
BEGIN;
INSERT INTO `post` (`id`, `content`, `cate`) VALUES (1, 'learn fireboom', 'cat1');
INSERT INTO `post` (`id`, `content`, `cate`) VALUES (2, 'prepare course', 'cat2');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
