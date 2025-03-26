DROP TABLE IF EXISTS `kldns_activitys`;
CREATE TABLE `kldns_activitys`(
     `id`    int(10) unsigned NOT NULL AUTO_INCREMENT,
     `uid`   int(10)          NOT NULL,
     `name`  varchar(100) NOT NULL,
     `point` int(11) NOT NULL,
     `time`  timestamp    DEFAULT NULL,
     `ip`    varchar(18)  null,
     PRIMARY KEY (`id`),
     KEY `uid` (`uid`),
     KEY `name` (`name`)
);
INSERT INTO `kldns_configs` VALUES ('array_theme', '{"colour":"#0afffb","index_theme":"0","login_theme":"0","home_theme":"0"}');
INSERT INTO `kldns_configs` VALUES ('array_activity', '{"end_time":"2023-10-26","html":"1","p1":"688","v1":"1","p2":"68","v2":"10","p3":"58","v3":"10","p4":"55","v4":"10","p5":"66","v5":"10","p6":"0","v6":"0","p7":"0","v7":"0","p8":"0","v8":"0","p9":"0","v9":"0","p10":"0","v10":"0"}');
ALTER TABLE `kldns_users`
    ADD sign_at int(10) unsigned DEFAULT NULL after point;
