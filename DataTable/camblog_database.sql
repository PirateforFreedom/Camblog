/*
 Navicat Premium Data Transfer

 Source Server         : mydatabase
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : camblog_database

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 11/04/2019 22:40:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for r_person_follower_t
-- ----------------------------
DROP TABLE IF EXISTS `r_person_follower_t`;
CREATE TABLE `r_person_follower_t`  (
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_follower_pictrue` blob NULL,
  `user_follower_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_school` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_conntry` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_statement` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_major_in` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`user_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for r_person_following_t
-- ----------------------------
DROP TABLE IF EXISTS `r_person_following_t`;
CREATE TABLE `r_person_following_t`  (
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_following_pictrue` blob NULL,
  `user_following_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_school` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_conntry` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_statement` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_major_in` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`user_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for r_person_posts_t
-- ----------------------------
DROP TABLE IF EXISTS `r_person_posts_t`;
CREATE TABLE `r_person_posts_t`  (
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_post_content` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_post_like_num` int(20) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  `user_post_location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_post_like_user` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_post_date` datetime(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of r_person_posts_t
-- ----------------------------
INSERT INTO `r_person_posts_t` VALUES ('tom', '这是第一个tweet', NULL, NULL, NULL, '2019-04-11 15:40:09');
INSERT INTO `r_person_posts_t` VALUES ('tom', '这是第二个tweet', NULL, NULL, NULL, '2019-04-11 15:40:18');
INSERT INTO `r_person_posts_t` VALUES ('jack', 'this is a frist tweet', NULL, NULL, NULL, '2019-04-11 15:41:01');
INSERT INTO `r_person_posts_t` VALUES ('jack', 'this is a two tweet', NULL, NULL, NULL, '2019-04-11 15:41:28');
INSERT INTO `r_person_posts_t` VALUES ('jack', 'this is tree tweet', NULL, NULL, NULL, '2019-04-11 15:41:42');
INSERT INTO `r_person_posts_t` VALUES ('tom', '这是第三个tweet', NULL, NULL, NULL, '2019-04-11 15:42:15');
INSERT INTO `r_person_posts_t` VALUES ('jack', 'this is four tweet', NULL, NULL, NULL, '2019-04-11 15:54:01');
INSERT INTO `r_person_posts_t` VALUES ('tom', '这是第四个tweet', NULL, NULL, NULL, '2019-04-11 15:54:30');
INSERT INTO `r_person_posts_t` VALUES ('tom', '这是第5个tweet', NULL, NULL, NULL, '2019-04-11 16:09:09');
INSERT INTO `r_person_posts_t` VALUES ('tom', '这是第6个tweet', NULL, NULL, NULL, '2019-04-11 16:10:31');
INSERT INTO `r_person_posts_t` VALUES ('tom', '啊所发生的', NULL, NULL, NULL, '2019-04-11 16:11:18');
INSERT INTO `r_person_posts_t` VALUES ('tom', '三大发送到', NULL, NULL, NULL, '2019-04-11 16:11:36');
INSERT INTO `r_person_posts_t` VALUES ('jack', 'this is five tweet', NULL, NULL, NULL, '2019-04-11 16:57:15');
INSERT INTO `r_person_posts_t` VALUES ('tom', '撒地方萨芬', NULL, NULL, NULL, '2019-04-11 21:50:52');
INSERT INTO `r_person_posts_t` VALUES ('jack', 'sdf', NULL, NULL, NULL, '2019-04-11 21:51:29');

-- ----------------------------
-- Table structure for r_person_postsffsum_t
-- ----------------------------
DROP TABLE IF EXISTS `r_person_postsffsum_t`;
CREATE TABLE `r_person_postsffsum_t`  (
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_posts_num` int(11) NULL DEFAULT NULL,
  `user_following_num` int(11) NULL DEFAULT NULL,
  `user_follower_num` int(11) NULL DEFAULT NULL,
  `user_name_tiaoshu` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`user_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of r_person_postsffsum_t
-- ----------------------------
INSERT INTO `r_person_postsffsum_t` VALUES ('jack', 6, NULL, NULL, 15);
INSERT INTO `r_person_postsffsum_t` VALUES ('tom', 9, NULL, NULL, 15);

-- ----------------------------
-- Table structure for r_user_information_t
-- ----------------------------
DROP TABLE IF EXISTS `r_user_information_t`;
CREATE TABLE `r_user_information_t`  (
  `user_id` int(100) NULL DEFAULT NULL,
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_pictrue` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `person_real` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ageing` int(255) NULL DEFAULT NULL,
  `school_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex_id` int(4) NULL DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `statement` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `online` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `major_in` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date_time` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of r_user_information_t
-- ----------------------------
INSERT INTO `r_user_information_t` VALUES (2, 'jack', '/picture/bn.jpg', '123456', 'long', 28, 'SNU', 1, 'us', 'self-respect', '1', 'ee', '2019-04-11 13:38:14');
INSERT INTO `r_user_information_t` VALUES (1, 'tom', '/picture/timg.jpg', '123456', 'jiang', 28, 'SNU', 1, 'china', 'a free man', '1', 'cs', '2019-04-10 09:31:50');

SET FOREIGN_KEY_CHECKS = 1;
