DROP TABLE IF EXISTS `kldns_configs`;
CREATE TABLE `kldns_configs` (
  `k` varchar(150) NOT NULL,
  `v` text,
  PRIMARY KEY (`k`),
  UNIQUE KEY `k` (`k`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `kldns_configs` VALUES ('array_activity', '{"end_time":"2023-10-26","html":"1","p1":"688","v1":"1","p2":"68","v2":"10","p3":"58","v3":"10","p4":"55","v4":"10","p5":"66","v5":"10","p6":"0","v6":"0","p7":"0","v7":"0","p8":"0","v8":"0","p9":"0","v9":"0","p10":"0","v10":"0"}');
INSERT INTO `kldns_configs` VALUES ('array_mail', '{\"host\":\"smtp.qq.com\",\"port\":\"465\",\"encryption\":\"ssl\",\"username\":\"815856515@qq.com\",\"password\":\"jxvizloqrcxkertg\",\"test\":\"123456@qq.com\"}');
INSERT INTO `kldns_configs` VALUES ('array_theme', '{"colour":"#0afffb","index_theme":"0","login_theme":"0","home_theme":"0"}');
INSERT INTO `kldns_configs` VALUES ('array_user', '{"reg":"1","email":"1","point":"88","vip":"7.77","vipgn":"<li>\\u6bcf\\u6761\\u89e3\\u67901\\u79ef\\u5206\\u8d77<\\/li>\\r\\n<li>\\u6bcf\\u6761\\u89e3\\u6790\\u4e00\\u6298\\u8d77<\\/li>\\r\\n<li>\\u8868\\u767d\\u57df\\u540d<strong>new<\\/strong><\\/li>\\r\\n<li>edu\\u57df\\u540d<strong>new<\\/strong><\\/li>\\r\\n<li>\\u89e3\\u6790\\u7a33\\u5b9a <strong>new<\\/strong><\\/li>\\r\\n<li>\\u66f4\\u591a\\u57df\\u540d<strong>new<\\/strong><\\/li>\\r\\n<li>\\u66f4\\u591aikun\\u57df\\u540d<strong>new<\\/strong><\\/li>"}');
INSERT INTO `kldns_configs` VALUES ('array_web', '{\"name\":\"\\u4e8c\\u7ea7\\u57df\\u540d\\u5206\\u53d1\",\"title\":\"\\u4e8c\\u7ea7\\u57df\\u540d\\u5206\\u53d1 - \\u4e8c\\u7ea7\\u57df\\u540d\\u6ce8\\u518c\",\"keywords\":\"\\u5feb\\u4e50\\u4e8c\\u7ea7\\u57df\\u540d\\u5206\\u53d1,\\u514d\\u8d39\\u57df\\u540d,\\u514d\\u8d39\\u4e8c\\u7ea7\\u57df\\u540d,\\u514d\\u8d39\\u5907\\u6848\\u57df\\u540d\",\"description\":\"\\u5feb\\u4e50\\u4e8c\\u7ea7\\u57df\\u540d\\u5206\\u53d1\\u7cfb\\u7edf\\uff0c\\u63d0\\u4f9b\\u514d\\u8d39\\u4e8c\\u7ea7\\u57df\\u540d\\u5206\\u53d1\"}');
INSERT INTO `kldns_configs` VALUES ('html_header', '<div class=\"alert alert-primary\">\r\n本站提供免费二级域名用于测试、学习等，请勿将二级域名用于一切非法用途，一切责任自负！\r\n</div>');
INSERT INTO `kldns_configs` VALUES ('html_home', '本站提供免费二级域名用于测试、学习等，请勿将二级域名用于一切非法用途，一切责任自负！');
INSERT INTO `kldns_configs` VALUES ('index_urls', '征途二级域名|https://xn--epru2e.cf/\r\nQQ交流群|https://qm.qq.com/cgi-bin/qm/qr?k=QEylduOYuCO2Z-IrVOyrrrqF13xEg45B&jump_from=webapi&authKey=XpjjakJ3zHZEr1dER/FUS3B1ZdvbADq8DTPZt6CGHls7fGNiEtMfsKsUsgF9zIpC');
INSERT INTO `kldns_configs` VALUES ('reserve_domain_name', 'www,w,m,3g,4g,qq');
INSERT INTO `kldns_configs` VALUES ('sign_max', '8');
INSERT INTO `kldns_configs` VALUES ('sign_min', '1');
DROP TABLE IF EXISTS `kldns_dns_configs`;
CREATE TABLE `kldns_dns_configs` (
  `dns` varchar(150) NOT NULL,
  `config` varchar(1024) DEFAULT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`dns`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `kldns_activitys`;
CREATE TABLE `kldns_activitys`(
    `id`    int(10) unsigned NOT NULL AUTO_INCREMENT,
    `uid`   int(10) unsigned  NOT NULL,
    `name`  varchar(100) NOT NULL,
    `point` int(11) NOT NULL,
    `time`  timestamp    DEFAULT NULL,
    `ip`    varchar(18)  null,
    PRIMARY KEY (`id`),
    KEY `uid` (`uid`),
    KEY `name` (`name`)
);
DROP TABLE IF EXISTS `kldns_domain_records`;
CREATE TABLE `kldns_domain_records` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(10) unsigned NOT NULL DEFAULT '0',
  `did` int(11) unsigned NOT NULL DEFAULT '0',
  `record_id` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` varchar(32) NOT NULL,
  `value` varchar(255) NOT NULL,
  `line_id` varchar(32) NOT NULL DEFAULT '0',
  `line` varchar(255) DEFAULT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  `checked_at` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `record_id` (`record_id`),
  KEY `did` (`did`),
  KEY `name` (`name`,`type`),
  KEY `checked_at` (`checked_at`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `kldns_domains`;
CREATE TABLE `kldns_domains` (
  `did` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dns` varchar(32) NOT NULL,
  `domain_id` varchar(50) NOT NULL,
  `domain` varchar(50) NOT NULL,
  `groups` varchar(1024) NOT NULL DEFAULT '0',
  `point` int(10) unsigned NOT NULL DEFAULT '0',
  `desc` text,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`did`),
  KEY `domain` (`domain`),
  KEY `domain_id` (`domain_id`),
  KEY `dns` (`dns`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `kldns_user_groups`;
CREATE TABLE `kldns_user_groups` (
  `gid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
INSERT INTO `kldns_user_groups` VALUES ('99', '管理组', '1555212209', '1555212209');
INSERT INTO `kldns_user_groups` VALUES ('100', '默认组', '1555212209', '1555235659');
DROP TABLE IF EXISTS `kldns_user_point_records`;
CREATE TABLE `kldns_user_point_records` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `action` varchar(32) NOT NULL,
  `point` int(11) NOT NULL,
  `rest` int(11) NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `created_at` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `action` (`action`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `kldns_users`;
CREATE TABLE `kldns_users` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `gid` int(10) unsigned NOT NULL DEFAULT '100',
  `status` tinyint(2) unsigned NOT NULL DEFAULT '0' COMMENT '0禁用 1待认证 2已认证',
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `sid` varchar(32) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `point` int(10) unsigned NOT NULL DEFAULT '0',
  `sign_at` int(10) unsigned DEFAULT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `gid` (`gid`),
  KEY `email` (`email`),
  KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;
INSERT INTO `kldns_users` VALUES ('99', '99', '1', 'admin', '$2y$10$v9PHTvnccjua/5FlAf/uFOVPprXxdWjoS54YnjmbQGGk8vDtxk9YS', 'tn38nVWJER1r0uj3oa222roN1E0sPYCDIUZIW30Yz6hR4U3DcHZU09l4gMsZ', '21c4bc5c23819b646aff4bb3196d6de5', null, '0', null, '1555212209', '1555408180');
