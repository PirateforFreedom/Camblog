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

 Date: 25/04/2019 10:53:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for r_person_follower_t
-- ----------------------------
DROP TABLE IF EXISTS `r_person_follower_t`;
CREATE TABLE `r_person_follower_t`  (
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_follower_pictrue` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_school` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_conntry` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_statement` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_major_in` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of r_person_follower_t
-- ----------------------------
INSERT INTO `r_person_follower_t` VALUES ('jack', '/picture/timg.jpg', 'tom', NULL, 'china', 'a free man', NULL, '2019-04-10 09:31:50');
INSERT INTO `r_person_follower_t` VALUES ('tom', '/picture/bn.jpg', 'jack', NULL, 'us', 'self-respect', NULL, '2019-04-11 13:38:14');

-- ----------------------------
-- Table structure for r_person_following_t
-- ----------------------------
DROP TABLE IF EXISTS `r_person_following_t`;
CREATE TABLE `r_person_following_t`  (
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_following_pictrue` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_school` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_conntry` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_statement` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_major_in` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_following_date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of r_person_following_t
-- ----------------------------
INSERT INTO `r_person_following_t` VALUES ('jack', '/picture/timg.jpg', 'tom', NULL, 'china', 'a free man', NULL, '2019-04-10 09:31:50');
INSERT INTO `r_person_following_t` VALUES ('tom', '/picture/bn.jpg', 'jack', NULL, 'us', 'self-respect', NULL, '2019-04-11 13:38:14');

-- ----------------------------
-- Table structure for r_person_posts_comment_t
-- ----------------------------
DROP TABLE IF EXISTS `r_person_posts_comment_t`;
CREATE TABLE `r_person_posts_comment_t`  (
  `user_posts_personnum` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_reply_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_replyer` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_follower_pictrue` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_comment_date` datetime(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of r_person_posts_comment_t
-- ----------------------------
INSERT INTO `r_person_posts_comment_t` VALUES ('jack_2', 'very good start.', 'tom', '/picture/timg.jpg', '2019-04-23 08:48:36');
INSERT INTO `r_person_posts_comment_t` VALUES ('jack_2', 'yes ,i agree above saying', 'tom', '/picture/timg.jpg', '2019-04-23 10:57:25');
INSERT INTO `r_person_posts_comment_t` VALUES ('jack_1', 'very good ', 'tom', '/picture/timg.jpg', '2019-04-23 21:03:46');
INSERT INTO `r_person_posts_comment_t` VALUES ('tom_2', 'welcome to new tweet!', 'jack', '/picture/bn.jpg', '2019-04-24 10:36:24');
INSERT INTO `r_person_posts_comment_t` VALUES ('tom_1', 'thank for you to be hear', 'jack', '/picture/bn.jpg', '2019-04-24 10:37:05');

-- ----------------------------
-- Table structure for r_person_posts_t
-- ----------------------------
DROP TABLE IF EXISTS `r_person_posts_t`;
CREATE TABLE `r_person_posts_t`  (
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_post_content` varchar(20000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_post_like_num` int(10) UNSIGNED NULL DEFAULT 0,
  `user_post_location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_post_like_user` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_post_date` datetime(0) NULL DEFAULT NULL,
  `user_posts_personnum` int(11) UNSIGNED NULL DEFAULT 0,
  `user_post_coment_sum` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_post_comment_tiaoshu` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_post_personsd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of r_person_posts_t
-- ----------------------------
INSERT INTO `r_person_posts_t` VALUES ('tom', '这是第1个tweet', 4, NULL, NULL, '2019-04-22 22:43:57', 1, '1', '1', 'tom_1');
INSERT INTO `r_person_posts_t` VALUES ('tom', '这是第2个tweet', 3, NULL, NULL, '2019-04-22 22:44:23', 2, '1', '1', 'tom_2');
INSERT INTO `r_person_posts_t` VALUES ('jack', 'this is one tweet ', 7, NULL, NULL, '2019-04-22 22:45:15', 1, '1', '1', 'jack_1');
INSERT INTO `r_person_posts_t` VALUES ('jack', 'this is two tweet', 4, NULL, NULL, '2019-04-22 22:45:44', 2, '2', '2', 'jack_2');
INSERT INTO `r_person_posts_t` VALUES ('jack', 'this is three tweet', 8, NULL, NULL, '2019-04-24 10:36:09', 3, NULL, '0', 'jack_3');
INSERT INTO `r_person_posts_t` VALUES ('tom', '这是第3个tweet', 2, NULL, NULL, '2019-04-24 10:44:38', 3, NULL, '0', 'tom_3');

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
INSERT INTO `r_person_postsffsum_t` VALUES ('jack', 3, 1, 1, 5);
INSERT INTO `r_person_postsffsum_t` VALUES ('tom', 3, 1, 1, 6);

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
