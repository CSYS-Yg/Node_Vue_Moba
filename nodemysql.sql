CREATE TABLE `diary_details` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '日记详情 id',
`entry_time` datetime(30) NULL ON UPDATE CURRENT_TIMESTAMP(30) COMMENT '日记的录入时间',
`training_time` date NULL COMMENT '计划训练的日期',
`training_action_id` int(11) NOT NULL,
PRIMARY KEY (`id`) 
);

CREATE TABLE `training_action` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '训练动作 id',
`action_name` varchar(50) NULL COMMENT '训练动作名字',
`equipment` varchar(50) NULL COMMENT '训练器材或健身房器材',
`muscle_label` varchar(50) NULL COMMENT '能训练到的肌肉标签',
`training_content` varchar(255) NULL COMMENT '训练内容或者步骤',
`training_picture` varchar(255) NULL COMMENT '训练图片地址',
`training_video` varchar(255) NULL COMMENT '训练视频',
`training_notes` varchar(255) NULL COMMENT '训练备注或注意事项'
);

CREATE TABLE `muscle_label` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '肌肉标签 tag',
`muscle_name` varchar(20) NULL COMMENT '肌肉名字'
);

CREATE TABLE `user` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户 id',
`phone_number` int(11) NOT NULL COMMENT '手机号',
`username` varchar(20) NULL COMMENT '用户名',
`avatar_url` varchar(20) NULL COMMENT '头像地址'
);

CREATE TABLE `group_data` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`group` int(10) NULL COMMENT '训练计划的第几组',
`weight` double(10,2) NULL COMMENT '训练重量',
`distance` double(10,2) NULL COMMENT '训练距离',
`frequency` int(10) NULL COMMENT '训练次数'
);


ALTER TABLE `diary_details` ADD CONSTRAINT `动作 id` FOREIGN KEY (`training_action_id`) REFERENCES `training_action` (`id`);

