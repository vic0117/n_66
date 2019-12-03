-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2019 年 12 月 03 日 03:36
-- 伺服器版本： 10.4.6-MariaDB
-- PHP 版本： 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `n_66`
--

-- --------------------------------------------------------

--
-- 資料表結構 `comments_list`
--

CREATE TABLE `comments_list` (
  `c_id` int(11) NOT NULL,
  `u_id` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL DEFAULT 'avatar.png',
  `last_name_zh` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `trip_country` text NOT NULL,
  `trip_name` text NOT NULL,
  `trip_start_date` varchar(255) NOT NULL,
  `trip_end_date` varchar(255) NOT NULL,
  `rating` varchar(255) NOT NULL,
  `reviews` text NOT NULL,
  `likedAmount` varchar(255) NOT NULL DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `comments_list`
--

INSERT INTO `comments_list` (`c_id`, `u_id`, `avatar`, `last_name_zh`, `gender`, `trip_country`, `trip_name`, `trip_start_date`, `trip_end_date`, `rating`, `reviews`, `likedAmount`) VALUES
(1, '85', 'landscape-1510031987-02.jpg', '李', '小姐', '芬蘭', '芬蘭家庭度假', '2019/10/24', '2019/11/08', '5', '我們在Hossa享受了三種顏色的一周：白色的凍湖，綠色的森林以及藍天。正溫度允許每天長時間散步，白天在篝火旁夕陽西下，而夜晚則可從桑拿浴室欣賞日落全景。謝謝所有人，讓這次旅行變得獨一無二！', '[90,86,69,79,93]'),
(2, '82', 'avatar.png', '李', '先生', '瑞典', '冬季的斯德哥爾摩', '2019/11/04', '2019/11/23', '4', '難忘的旅程。\n我們得到了很好的經驗和回憶，非常值得參加的行程。', '[78,90,69,87]'),
(3, '81', 'avatar.png', '葉', '先生', '冰島', '韋斯特曼群島', '2019/11/10', '2019/11/21', '5', '美麗的風景和山峰的壯麗景色。露營地同樣美麗。\n專業的教練教導我們如何適應韋斯特曼群島多變的天氣。\n', '[86,69]'),
(4, '83', '12647525_1073340822686906_246115417249213800_n.jpg', '蔡', '先生', '格陵蘭', '迪斯科灣', '2019/10/02', '2019/10/12', '5', '新鮮的空氣、迷人的野生動物，非常出色的行程，完全符合期待的旅程。', '[90,69]'),
(5, '84', 'maxresdefault3.jpg', '新垣', '小姐', '加拿大', '洛磯山脈', '2019/09/13', '2020/09/28', '2', '加拿大西部非常漂亮，風景優美且適合遠足。\n但對於某些酒店的選擇以及實際價格與實際價格之間的差異，我們感到非常失望。\n\n', '[69,93]'),
(6, '91', 'avatar.png', '林', '女士', '挪威', '特羅姆瑟', '2019/11/03', '2019/11/18', '5', '美麗的旅行，宏偉的景點，巨大的森林，翡翠的湖泊，完美的天氣，美麗的散步，八人一組非常友好。大自然愛好者和照片的理想目的地。', '[78,69]'),
(7, '91', 'avatar.png', '林', '女士', '冰島', '韋斯特曼群島', '2019/09/27', '2019/10/11', '5', '強烈推薦這次旅行！還想再來', '[78,86,93]'),
(8, '89', '11401426_993191877365812_4562722220968744779_n.jpg', '柯', '先生', '芬蘭', '芬蘭家庭度假', '2019/11/12', '2019/11/29', '5', '多虧了66N，我們為18歲大的孩子們度過了美好的旅程。\n一個完美的團隊確保了住宿質量（帶停車位，每次都放置在城市中）。我們從卡爾加里開始到溫哥華。我們發現了美麗的風景。我們享受旅行的節奏，這使我們能夠花時間放鬆一下。\n唯一的缺點：路線的建議缺乏獨創性', '[78,90,69]'),
(9, '78', 'avatar.png', '王', '先生', '瑞典', '冬季的斯德哥爾摩', '2019/11/04', '2019/11/23', '5', '第一次的瑞典之旅讓我大開眼界。\n親切的導遊、專業的教練、美麗的異國風情，讓我下次還想參加一次。', '[78,84,97,69,79]'),
(10, '69', 'avatar.png	', '曾', '先生', '挪威', '特羅姆瑟', '2019/11/18', '2019/11/03', '5', '非常專業的嚮導，令人難忘的特羅姆瑟之旅美麗的風景！非常符合我們的期待。', '[86,69,79,93,87]'),
(11, '79', '下載.jpg', '陳', '先生', '瑞典', '探險瑞典', '2019/04/01', '2019/04/08', '5', '這個旅程真的是個探險！在大自然中短暫停留，尋找瑞典野生動植物！', '[84,86,69]'),
(12, '88', 'avatar.png', '黃', '女士', '加拿大', '魁北克的針葉林,獨木舟,水上飛機', '2019/06/27', '2019/07/08', '4', '真的是很好玩的行程！真的很充實。魁北克的森林真的很漂亮，第一次與野生動物那麼近距離的接觸。', '[78,97]'),
(13, '92', 'mobile01-4120b37b876343eabb9cae6bca6cbd3e.jpg', '陳', '先生', '芬蘭', '芬蘭家庭度假', '2019/05/04', '2019/05/13', '5', '真的很適合家庭旅遊！專業的旅遊安排，大人小孩都可以玩得很盡興', '[78,84,97,86,69,79,87]'),
(14, '93', 'avatar.png', '林', '小姐', '瑞典', '冬季的斯德哥爾摩', '2019/11/04', '2019/11/23', '5', '冬季的斯德哥爾摩真的很美麗！還想再去一次', '[78,69,86,93,87]'),
(16, '90', '16426112_10208236329135961_1365857810509636772_n.jpg', '林', '先生', '芬蘭', '芬蘭家庭度假', '2019/10/04', '2019/10/21', '5', '芬蘭家庭度假真的老少閒宜，多樣的活動、專業的導遊，真的是難忘的回憶', '[90,86,87]'),
(17, '97', 'download.jpeg', '小松', '小姐', '芬蘭', '拉普蘭大道口', '2019/08/04', '2019/08/19', '4', '遠離和拋開城市的喧囂，放鬆的躺在被森林包圍的北極冰湖中享受着周圍的寂靜，觀賞天空中震撼的北極光之舞，美麗的北極光也會倒影在湖水中，彷彿就漂浮在北極光中，體驗時可將相機交給導遊，導遊可為你拍攝，這將是你一生中最難忘的一次體驗。', '[86,85,91]'),
(19, '86', 'avatar.png', '陳', '先生', '南極洲', '航行到白色大陸', '2019/01/05', '2019/01/31', '5', '南極的氣候真的十分嚴峻，還好導遊出發前有一再提醒我們該帶的裝備，真的是個非常專業的旅程。', '[]'),
(28, '85', 'landscape-1510031987-02.jpg', '李', '小姐', '加拿大', '魁北克的針葉林,獨木舟,水上飛機', '2019/06/27', '2019/07/04', '4', '每個地區的氣候因其森林、針葉林、苔原植被覆蓋不同而有所差異。魁北克南部擁有非常鮮明的四季特徵，溫度也隨四季的變換而不同。魁北克多樣的氣候也造就了當地人民熱情洋溢、活力四射的性格。非常推薦\n', '[85,88]'),
(29, '79', '下載.jpg', '陳', '先生', '加拿大', '洛磯山脈', '2019/03/10', '2019/03/18', '4', '', '[]'),
(30, '88', '20190101_EN_CP_9.jpg', '金', '女士', '格陵蘭', '迪斯科灣', '2019/06/02', '2019/06/12', '5', '西格陵蘭是格陵蘭最重要的旅遊區，它有全世界最壯麗的冰山，有伊努特人的文化，北極地區的野生動物，極地小鎮與各種戶外活動，是一個值得旅遊的地區。', '[86,93,69]'),
(31, '86', 'avatar.png', '陳', '先生', '瑞典', '探險瑞典', '2020/04/01', '2020/04/08', '4', '', '[93,87,69]'),
(32, '93', 'avatar.png', '林', '小姐', '格陵蘭', '迪斯科灣', '2020/06/02', '2020/06/12', '5', '這一航次的行程與內容相當物超所值，根據瀚世去過南北極十餘次經驗，這是最物超所值的一艘船。', '[]'),
(33, '87', 'avatar.png', '李', '先生', '南極洲', '航行到白色大陸', '2020/01/05', '2020/01/31', '4', '幾乎恆定的一天使我們能夠充分享受賞鯨，虎鯨，企鵝殖民地和各種海豹家庭的樂趣。這是我們必須絕對保護的野生生物的天堂，我們擔心在通過過程中不要污染。', '[91]'),
(36, '91', 'avatar.png', '林', '女士', '挪威', '看見峽灣', '2020/10/01', '2020/10/08', '4', '這裡堪稱挪威的世外桃源，真正的挪威人有條件的話夏天都會選擇在這裡度假。去過的人都無不評價，絕對不虛此行。', '[]');

-- --------------------------------------------------------

--
-- 資料表結構 `coupon_list`
--

CREATE TABLE `coupon_list` (
  `c_id` int(11) NOT NULL,
  `u_id` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL COMMENT '類型',
  `discount` varchar(255) NOT NULL COMMENT '折扣',
  `valid_date` varchar(255) NOT NULL COMMENT '到期日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `coupon_list`
--

INSERT INTO `coupon_list` (`c_id`, `u_id`, `type`, `discount`, `valid_date`) VALUES
(91, '78', '多活動', '85', '2020/02/27'),
(93, '85', '獨木舟', '85', '2020/02/28'),
(95, '81', '動物觀察', '85', '2020/02/28'),
(96, '83', '獨木舟', '85', '2020/02/28'),
(97, '84', '動物觀察', '85', '2020/02/28'),
(98, '91', '北極光', '85', '2020/02/28'),
(99, '91', '動物觀察', '85', '2020/02/28'),
(100, '89', '獨木舟', '85', '2020/02/28'),
(104, '79', '動物觀察', '85', '2020/02/28'),
(105, '88', '獨木舟', '85', '2020/02/28'),
(106, '92', '獨木舟', '85', '2020/02/28'),
(107, '93', '多活動', '85', '2020/02/28'),
(108, '93', '獨木舟', '85', '2020/02/28'),
(110, '94', '多活動', '85', '2020/02/28'),
(111, '78', '獨木舟', '85', '2020/02/28'),
(113, '90', '獨木舟', '85', '2020/02/29'),
(114, '97', '動物觀察', '85', '2020/02/29'),
(116, '86', '郵輪和帆船', '85', '2020/02/29'),
(123, '69', '多活動', '85', '2020/03/01'),
(124, '85', '獨木舟', '85', '2020/03/01'),
(125, '79', '動物觀察', '85', '2020/03/01'),
(126, '88', '獨木舟', '85', '2020/03/01'),
(127, '86', '動物觀察', '85', '2020/03/01'),
(130, '87', '郵輪和帆船', '85', '2020/03/01'),
(132, '91', '駕車遊覽', '85', '2020/03/02'),
(133, '82', '動物觀察', '85', '2020/03/03');

-- --------------------------------------------------------

--
-- 資料表結構 `members_list`
--

CREATE TABLE `members_list` (
  `u_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name_zh` varchar(255) DEFAULT '',
  `last_name_zh` varchar(255) DEFAULT '',
  `first_name_en` varchar(255) DEFAULT '',
  `last_name_en` varchar(255) DEFAULT '',
  `gender` varchar(255) DEFAULT '',
  `bday_year` varchar(255) DEFAULT '',
  `bday_month` varchar(255) DEFAULT '',
  `bday_date` varchar(255) DEFAULT '',
  `passport` varchar(255) DEFAULT '',
  `zip_code` varchar(255) DEFAULT '',
  `address` varchar(255) DEFAULT '',
  `tel` varchar(255) DEFAULT '',
  `avatar` varchar(255) DEFAULT 'avatar.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `members_list`
--

INSERT INTO `members_list` (`u_id`, `email`, `password`, `first_name_zh`, `last_name_zh`, `first_name_en`, `last_name_en`, `gender`, `bday_year`, `bday_month`, `bday_date`, `passport`, `zip_code`, `address`, `tel`, `avatar`) VALUES
(69, 'jordantseng1024@gmail.com', '12345', '奕澂', '曾', 'yi-cheng', 'tseng', '先生', '1992', '10', '24', '', '', '中山區', '0928232059', 'avatar.png'),
(77, 'admin@gmail.com', '12345', '', '', '', '', '', '', '', '', '', '', '', '', 'avatar.png'),
(78, 'test1@gmail.com', '12345', '小明', '王', '', '', '先生', '', '', '', '', '', '士林區', '', 'avatar.png'),
(79, 'test2@gmail.com', '12345', '小華', '陳', '', '', '先生', '', '', '', '', '', '士林區', '', '下載.jpg'),
(81, 'test3@gmail.com', '12345', '大雄', '葉', '', '', '先生', '', '', '', '', '', '新北市', '', 'avatar.png'),
(82, 'xionwork@gmail.com', '12345', '明昇', '李', '', '', '先生', '', '', '', '', '10556', '台北市松山區八德路二段346巷3弄2號', '', 'avatar.png'),
(83, 'test5@gmail.com', '12345', '孟叡', '蔡', '', '', '先生', '', '', '', '', '', '板橋市', '', '12647525_1073340822686906_246115417249213800_n.jpg'),
(84, 'yui@gmail.com', '12345', '結衣', '新垣', '', '', '小姐', '', '', '', '', '', '東京都', '', 'maxresdefault3.jpg'),
(85, 'test7@gmail.com', '12345', '小花', '李', '', '', '小姐', '', '', '', '', '', '士林區', '', 'landscape-1510031987-02.jpg'),
(86, 'test8@gmail.com', '12345', '大樹', '陳', '', '', '先生', '', '5', '4', '', '', '萬華區', '', 'avatar.png'),
(87, 'test9@gmail.com', '123456', '小龍', '李', '', '', '先生', '', '7', '9', '', '', '信義區', '', 'avatar.png'),
(88, 'jennie@gmail.com', '12345', '珍妮', '金', '', '', '女士', '', '1', '8', '', '', '北投區', '', '20190101_EN_CP_9.jpg'),
(89, 'test11@gmail.com', '12345', '力維', '柯', '', '', '先生', '', '', '', '', '', '嘉義市', '', '11401426_993191877365812_4562722220968744779_n.jpg'),
(90, 'test12@gmail.com', '12345', '政瀚', '林', '', '', '先生', '', '', '', '', '', '信義區', '', '16426112_10208236329135961_1365857810509636772_n.jpg'),
(91, 'test13@gmail.com', '12345', '小芳', '林', '', '', '女士', '', '', '', '', '', '北投區', '', 'avatar.png'),
(92, 'test14@gmail.com', '12345', '聰明', '陳', '', '', '先生', '', '', '', '', '', '大安區', '', 'mobile01-4120b37b876343eabb9cae6bca6cbd3e.jpg'),
(93, 'test15@gmail.com', '123456', '雅筑', '林', '', '', '小姐', '', '9', '7', '', '', '新北市', '', 'avatar.png'),
(97, 'nana@gmail.com', '12345', '菜奈', '小松', '', '', '小姐', '', '', '', '', '', '東京都', '', 'download.jpeg');

-- --------------------------------------------------------

--
-- 資料表結構 `order_list`
--

CREATE TABLE `order_list` (
  `order_id` int(11) NOT NULL,
  `u_id` varchar(255) NOT NULL,
  `order_trip` text NOT NULL,
  `order_product` text NOT NULL,
  `order_status` text NOT NULL,
  `order_total_price` int(11) NOT NULL,
  `create_at` varchar(255) DEFAULT NULL,
  `arrival_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `order_list`
--

INSERT INTO `order_list` (`order_id`, `u_id`, `order_trip`, `order_product`, `order_status`, `order_total_price`, `create_at`, `arrival_date`) VALUES
(201, '78', '[{\"sid\":\"1\",\"trip_name\":\"冬季的斯德哥爾摩\",\"trip_angency\":\"雄獅旅行社\",\"trip_price\":\"19000\",\"trip_img\":\"sotckholm.jpg\",\"trip_country\":\"瑞典\",\"trip_duration\":5,\"trip_start_date\":\"2019/11/04\",\"trip_end_date\":\"2019/11/23\",\"trip_type\":\"多活動\",\"trip_amount\":1,\"code\":1574867485073,\"id\":201}]', '[]', '已送達', 19060, '2019/11/27', '2019/11/30'),
(203, '85', '[{\"sid\":\"3\",\"trip_name\":\"芬蘭家庭度假\",\"trip_angency\":\"東南旅行社\",\"trip_price\":\"60000\",\"trip_img\":\"randonnee-en-finlande-730.jpg\",\"trip_country\":\"芬蘭\",\"trip_duration\":9,\"trip_start_date\":\"2020/05/04\",\"trip_end_date\":\"2020/05/13\",\"trip_type\":\"獨木舟\",\"trip_amount\":1,\"code\":1574905073348,\"id\":203,\"commented\":1}]', '[]', '已送達', 60030, '2019/11/28', '2019/12/01'),
(204, '82', '[{\"sid\":\"1\",\"trip_name\":\"冬季的斯德哥爾摩\",\"trip_angency\":\"雄獅旅行社\",\"trip_price\":\"19000\",\"trip_img\":\"sotckholm.jpg\",\"trip_country\":\"瑞典\",\"trip_duration\":5,\"trip_start_date\":\"2019/11/04\",\"trip_end_date\":\"2019/11/23\",\"trip_type\":\"多活動\",\"trip_amount\":1,\"code\":1574905451401,\"id\":204,\"commented\":1}]', '[]', '已送達', 19030, '2019/11/28', '2019/12/01'),
(205, '81', '[{\"sid\":\"4\",\"trip_name\":\"韋斯特曼群島\",\"trip_angency\":\"酷吉旅行社\",\"trip_price\":\"28200\",\"trip_img\":\"cote-islandaises-1283.jpg\",\"trip_country\":\"冰島\",\"trip_duration\":6,\"trip_start_date\":\"2020/6/10\",\"trip_end_date\":\"2020/6/16\",\"trip_type\":\"動物觀察\",\"trip_amount\":1,\"code\":1574906026858,\"id\":205,\"commented\":1}]', '[]', '已送達', 28230, '2019/11/28', '2019/12/01'),
(206, '83', '[{\"sid\":\"5\",\"trip_name\":\"迪斯科灣\",\"trip_angency\":\"可樂旅遊\",\"trip_price\":\"99999\",\"trip_img\":\"voyage-voilier-croisiere-au-groenland-2355.jpg\",\"trip_country\":\"格陵蘭\",\"trip_duration\":10,\"trip_start_date\":\"2020/06/02\",\"trip_end_date\":\"2020/06/12\",\"trip_type\":\"獨木舟\",\"trip_amount\":1,\"code\":1574906370610,\"id\":206,\"commented\":1}]', '[]', '已送達', 100029, '2019/11/28', '2019/12/01'),
(207, '84', '[{\"sid\":\"6\",\"trip_name\":\"洛磯山脈\",\"trip_angency\":\"燦星旅遊\",\"trip_price\":\"90000\",\"trip_img\":\"randonnee-dans-louest-canadien-834.jpg\",\"trip_country\":\"加拿大\",\"trip_duration\":8,\"trip_start_date\":\"2020/03/10\",\"trip_end_date\":\"2020/03/18\",\"trip_type\":\"動物觀察\",\"trip_amount\":1,\"code\":1574906688576,\"id\":207,\"commented\":1}]', '[]', '已送達', 90030, '2019/11/28', '2019/12/01'),
(208, '91', '[{\"sid\":\"2\",\"trip_name\":\"特羅姆瑟\",\"trip_angency\":\"雄獅旅行社\",\"trip_price\":\"28200\",\"trip_img\":\"aurores-boreales-en-laponie-norvegienne-1155.jpg\",\"trip_country\":\"挪威\",\"trip_duration\":5,\"trip_start_date\":\"2019/11/18\",\"trip_end_date\":\"2019/11/03\",\"trip_type\":\"北極光\",\"trip_amount\":1,\"code\":1574906957822,\"id\":208,\"commented\":1}]', '[]', '已送達', 28230, '2019/11/28', '2019/12/01'),
(209, '91', '[{\"sid\":\"4\",\"trip_name\":\"韋斯特曼群島\",\"trip_angency\":\"酷吉旅行社\",\"trip_price\":\"28200\",\"trip_img\":\"cote-islandaises-1283.jpg\",\"trip_country\":\"冰島\",\"trip_duration\":6,\"trip_start_date\":\"2020/6/10\",\"trip_end_date\":\"2020/6/16\",\"trip_type\":\"動物觀察\",\"trip_amount\":1,\"code\":1574907131859,\"id\":209,\"commented\":1}]', '[]', '已送達', 28230, '2019/11/28', '2019/12/01'),
(210, '89', '[{\"sid\":\"3\",\"trip_name\":\"芬蘭家庭度假\",\"trip_angency\":\"東南旅行社\",\"trip_price\":\"60000\",\"trip_img\":\"randonnee-en-finlande-730.jpg\",\"trip_country\":\"芬蘭\",\"trip_duration\":9,\"trip_start_date\":\"2020/05/04\",\"trip_end_date\":\"2020/05/13\",\"trip_type\":\"獨木舟\",\"trip_amount\":1,\"code\":1574907390740,\"id\":210,\"commented\":1}]', '[]', '已送達', 60030, '2019/11/28', '2019/12/01'),
(214, '69', '[]', '[{\"product_id\":2,\"product_name\":\"Land Lock 別墅帳\",\"product_brand\":\"snow peak\",\"product_file_name\":\"LandLock\",\"product_img\":\"TP-671R_BIG.JPG\",\"product_size\":\"405 X 625cm\",\"product_category\":\"獨木舟\",\"product_class\":\"帳篷\",\"product_weight\":\"22kg(含配件)\",\"product_price\":\" 47900\",\"product_amount\":1,\"commented\":0,\"code\":1574912936136,\"id\":214}]', '已送達', 47930, '2019/11/28', '2019/12/01'),
(215, '79', '[{\"sid\":9,\"trip_name\":\"探險瑞典\",\"trip_angency\":\"雄獅旅行社\",\"trip_price\":50000,\"trip_img\":\"qijwije.jpg\",\"trip_country\":\"瑞典\",\"trip_duration\":7,\"trip_start_date\":\"2020/04/01\",\"trip_end_date\":\"2020/04/08\",\"trip_type\":\"動物觀察\",\"trip_amount\":1,\"code\":1574913860175,\"id\":215,\"commented\":1}]', '[]', '已送達', 50030, '2019/11/28', '2019/12/01'),
(216, '88', '[{\"sid\":8,\"trip_name\":\"魁北克的針葉林,獨木舟,水上飛機\",\"trip_angency\":\"酷吉旅行社\",\"trip_price\":97000,\"trip_img\":\"groupe-de-canoes-sur-la-riviere-au-quebec-1595.jpg\",\"trip_country\":\"加拿大\",\"trip_duration\":11,\"trip_start_date\":\"2020/06/27\",\"trip_end_date\":\"2020/07/08\",\"trip_type\":\"獨木舟\",\"trip_amount\":1,\"code\":1574914142087,\"id\":216,\"commented\":1}]', '[]', '已送達', 97030, '2019/11/28', '2019/12/01'),
(217, '92', '[{\"sid\":3,\"trip_name\":\"芬蘭家庭度假\",\"trip_angency\":\"東南旅行社\",\"trip_price\":60000,\"trip_img\":\"qlwqmw.jpg\",\"trip_country\":\"芬蘭\",\"trip_duration\":9,\"trip_start_date\":\"2020/05/04\",\"trip_end_date\":\"2020/05/13\",\"trip_type\":\"獨木舟\",\"trip_amount\":1,\"code\":1574914513741,\"id\":217,\"commented\":1}]', '[]', '已送達', 60030, '2019/11/28', '2019/12/01'),
(218, '93', '[{\"sid\":1,\"trip_name\":\"冬季的斯德哥爾摩\",\"trip_angency\":\"雄獅旅行社\",\"trip_price\":19000,\"trip_img\":\"sotckholm.jpg\",\"trip_country\":\"瑞典\",\"trip_duration\":5,\"trip_start_date\":\"2019/11/04\",\"trip_end_date\":\"2019/11/23\",\"trip_type\":\"多活動\",\"trip_amount\":1,\"code\":1574914682643,\"id\":218,\"commented\":1},{\"sid\":5,\"trip_name\":\"迪斯科灣\",\"trip_angency\":\"可樂旅遊\",\"trip_price\":99999,\"trip_img\":\"voyage-voilier-croisiere-au-groenland-2355.jpg\",\"trip_country\":\"格陵蘭\",\"trip_duration\":10,\"trip_start_date\":\"2020/06/02\",\"trip_end_date\":\"2020/06/12\",\"trip_type\":\"獨木舟\",\"trip_amount\":1,\"code\":1574915287702,\"id\":218,\"commented\":1}]', '[]', '已送達', 119029, '2019/11/28', '2019/12/01'),
(224, '90', '[{\"sid\":3,\"trip_name\":\"芬蘭家庭度假\",\"trip_angency\":\"東南旅行社\",\"trip_price\":60000,\"trip_img\":\"qlwqmw.jpg\",\"trip_country\":\"芬蘭\",\"trip_duration\":9,\"trip_start_date\":\"2020/05/04\",\"trip_end_date\":\"2020/05/13\",\"trip_type\":\"獨木舟\",\"trip_amount\":1,\"code\":1575119475613,\"id\":224,\"commented\":1}]', '[]', '已送達', 86280, '2019/11/30', '2019/12/03'),
(225, '97', '[{\"sid\":10,\"trip_name\":\"拉普蘭大道口\",\"trip_angency\":\"東南旅行社\",\"trip_price\":79000,\"trip_img\":\"huhuw.jpg\",\"trip_country\":\"芬蘭\",\"trip_duration\":15,\"trip_start_date\":\"2020/08/04\",\"trip_end_date\":\"2020/08/19\",\"trip_type\":\"動物觀察\",\"trip_amount\":1,\"code\":1575120643372,\"id\":225,\"commented\":1}]', '[]', '已送達', 79030, '2019/11/30', '2019/12/03'),
(227, '86', '[{\"sid\":12,\"trip_name\":\"航行到白色大陸\",\"trip_angency\":\"極限旅行\",\"trip_price\":250000,\"trip_img\":\"qwjieo.jpg\",\"trip_country\":\"南極洲\",\"trip_duration\":26,\"trip_start_date\":\"2020/01/05\",\"trip_end_date\":\"2020/01/31\",\"trip_type\":\"郵輪和帆船\",\"trip_amount\":1,\"code\":1575121418661,\"id\":227,\"commented\":1}]', '[]', '已送達', 250030, '2019/11/30', '2019/12/03'),
(233, '69', '[{\"sid\":2,\"trip_name\":\"特羅姆瑟\",\"trip_angency\":\"雄獅旅行社\",\"trip_price\":28200,\"trip_img\":\"aurores-boreales-en-laponie-norvegienne-1155.jpg\",\"trip_country\":\"挪威\",\"trip_duration\":5,\"trip_start_date\":\"2019/11/03\",\"trip_end_date\":\"2019/11/18\",\"trip_type\":\"北極光\",\"trip_amount\":1,\"code\":1575183992305,\"id\":233,\"commented\":1}]', '[]', '已送達', 28260, '2019/12/01', '2019/12/04'),
(234, '69', '[{\"sid\":1,\"trip_name\":\"冬季的斯德哥爾摩\",\"trip_angency\":\"雄獅旅行社\",\"trip_price\":19000,\"trip_img\":\"sotckholm.jpg\",\"trip_country\":\"瑞典\",\"trip_duration\":5,\"trip_start_date\":\"2019/11/04\",\"trip_end_date\":\"2019/11/23\",\"trip_type\":\"多活動\",\"trip_amount\":1,\"code\":1575189070050,\"id\":234,\"commented\":1}]', '[]', '已送達', 19060, '2019/12/01', '2019/12/04'),
(235, '85', '[{\"sid\":8,\"trip_name\":\"魁北克的針葉林,獨木舟,水上飛機\",\"trip_angency\":\"酷吉旅行社\",\"trip_price\":97000,\"trip_img\":\"groupe-de-canoes-sur-la-riviere-au-quebec-1595.jpg\",\"trip_country\":\"加拿大\",\"trip_duration\":11,\"trip_start_date\":\"2020/06/27\",\"trip_end_date\":\"2020/07/08\",\"trip_type\":\"獨木舟\",\"trip_amount\":1,\"code\":1575189691482,\"id\":235,\"commented\":1}]', '[]', '已送達', 97100, '2019/12/01', '2019/12/04'),
(236, '79', '[{\"sid\":6,\"trip_name\":\"洛磯山脈\",\"trip_angency\":\"燦星旅遊\",\"trip_price\":90000,\"trip_img\":\"randonnee-dans-louest-canadien-834.jpg\",\"trip_country\":\"加拿大\",\"trip_duration\":8,\"trip_start_date\":\"2020/03/10\",\"trip_end_date\":\"2020/03/18\",\"trip_type\":\"動物觀察\",\"trip_amount\":1,\"code\":1575190035838,\"id\":236,\"commented\":1}]', '[]', '已送達', 90060, '2019/12/01', '2019/12/04'),
(237, '88', '[{\"sid\":5,\"trip_name\":\"迪斯科灣\",\"trip_angency\":\"可樂旅遊\",\"trip_price\":99999,\"trip_img\":\"voyage-voilier-croisiere-au-groenland-2355.jpg\",\"trip_country\":\"格陵蘭\",\"trip_duration\":10,\"trip_start_date\":\"2020/06/02\",\"trip_end_date\":\"2020/06/12\",\"trip_type\":\"獨木舟\",\"trip_amount\":1,\"code\":1575200835228,\"id\":237,\"commented\":1}]', '[]', '已送達', 100059, '2019/12/01', '2019/12/04'),
(238, '86', '[{\"sid\":9,\"trip_name\":\"探險瑞典\",\"trip_angency\":\"雄獅旅行社\",\"trip_price\":50000,\"trip_img\":\"qijwije.jpg\",\"trip_country\":\"瑞典\",\"trip_duration\":7,\"trip_start_date\":\"2020/04/01\",\"trip_end_date\":\"2020/04/08\",\"trip_type\":\"動物觀察\",\"trip_amount\":2,\"code\":1575201650073,\"id\":238,\"commented\":1}]', '[]', '已送達', 100060, '2019/12/01', '2019/12/04'),
(239, '87', '[{\"sid\":12,\"trip_name\":\"航行到白色大陸\",\"trip_angency\":\"極限旅行\",\"trip_price\":250000,\"trip_img\":\"qwjieo.jpg\",\"trip_country\":\"南極洲\",\"trip_duration\":26,\"trip_start_date\":\"2020/01/05\",\"trip_end_date\":\"2020/01/31\",\"trip_type\":\"郵輪和帆船\",\"trip_amount\":1,\"code\":1575202946067,\"id\":239,\"commented\":1}]', '[]', '已送達', 250060, '2019/12/01', '2019/12/04'),
(241, '91', '[{\"sid\":15,\"trip_name\":\"看見峽灣\",\"trip_angency\":\"探險旅行社\",\"trip_price\":41000,\"trip_img\":\"qo12o1.jpg\",\"trip_country\":\"挪威\",\"trip_duration\":8,\"trip_start_date\":\"2020/10/01\",\"trip_end_date\":\"2020/10/08\",\"trip_type\":\"駕車遊覽\",\"trip_amount\":1,\"code\":1575296160426,\"id\":241,\"commented\":1}]', '[]', '已送達', 41060, '2019/12/02', '2019/12/05'),
(242, '82', '[{\"sid\":10,\"trip_name\":\"拉普蘭大道口\",\"trip_angency\":\"東南旅行社\",\"trip_price\":79000,\"trip_img\":\"huhuw.jpg\",\"trip_country\":\"芬蘭\",\"trip_duration\":15,\"trip_start_date\":\"2020/08/04\",\"trip_end_date\":\"2020/08/19\",\"trip_type\":\"動物觀察\",\"trip_amount\":1,\"code\":1575336100419,\"id\":242,\"commented\":0}]', '[]', '已送達', 79060, '2019/12/03', '2019/12/06');

-- --------------------------------------------------------

--
-- 資料表結構 `product_list`
--

CREATE TABLE `product_list` (
  `product_id` int(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` varchar(255) NOT NULL,
  `product_category` varchar(255) NOT NULL,
  `product_class` varchar(255) NOT NULL,
  `product_file_name` varchar(255) DEFAULT NULL,
  `product_pictures` varchar(255) DEFAULT NULL,
  `product_quantity` varchar(255) NOT NULL,
  `product_size` varchar(255) DEFAULT NULL,
  `product_weight` varchar(255) NOT NULL,
  `product_material` varchar(255) DEFAULT NULL,
  `product_capacity` varchar(255) DEFAULT NULL,
  `product_power` varchar(255) DEFAULT NULL,
  `product_intro` varchar(255) DEFAULT NULL,
  `product_brand` varchar(255) NOT NULL,
  `product_router` varchar(255) NOT NULL DEFAULT 'products'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product_list`
--

INSERT INTO `product_list` (`product_id`, `product_name`, `product_price`, `product_category`, `product_class`, `product_file_name`, `product_pictures`, `product_quantity`, `product_size`, `product_weight`, `product_material`, `product_capacity`, `product_power`, `product_intro`, `product_brand`, `product_router`) VALUES
(1, '拱形客廳帳', '21250', '動物觀察', '帳篷', 'Entry2RomElfield', '[\"TP-880_BIG.JPG\",\"TP-880_1.JPG\",\"TP-880_feature2.jpg\",\"TP-880_feature3.jpg\",\"TP-880_feature5.jpg\"]', '30', '210X600cm', '15.5kg', '外帳本體/75D滌綸牛津布、遮光加工PU塗層最低耐水壓1,800mm、鐵氟龍撥水加工。頂布/75D滌綸牛津布、遮光加工PU塗層最低耐水壓1,800mm、鐵氟龍撥水加工。雪裙/滌塔夫、PU塗層。內帳/68D滌塔夫。底部/210D滌塔夫、PU塗層最低耐水壓1,800mm。營柱/A6061（φ16mm+φ14.5mm）', NULL, NULL, '[\"構造簡單，具備了初入露營者的必要功能外，價格也平價讓人容易入手，並且新推出將房間與客廳為一體的設計\",\"客廳部分配置雪裙，可有效防止強風或是雨水灌入\",\"帳篷內部寬大高度也足夠，不管晴天雨天都能在帳篷內舒適的露營生活。\",\"以四根拱形營柱加上一根脊柱的簡單構造設計，方便搭設。\",\"內帳以懸掛的方式搭設，快速簡單\"]', 'SnowPeak', 'products'),
(2, 'Land Lock 別墅帳', ' 29998', '動物觀察', '帳篷', 'LandLock', '[\"TP-671R_BIG.JPG\",\"TP-671R_1.JPG\"]', '30', '405X625cm', '22kg(含配件)', '本體/150D聚酯纖維牛津布、遮光加PU塗層最低耐水壓3,000mm(頂部)、抗UV加工、鐵氟龍撥水加工；150D聚酯纖維牛津布、PU塗層最低耐水壓1,800mm (側壁)、抗UV加工、鐵氟龍撥水加工；營柱/鋁合金A6061(φ19mm)；內帳材質：側邊帳面/68D滌塔夫；底布/210D聚酯纖維牛津布、PU塗層最低耐水壓1,800mm', NULL, NULL, '[\"All-In-One型式的大型別墅帳，不吊掛內帳時也可以當作集會室使用，對稱的營柱設計不僅容易搭設，以營繩固定後可確保帳篷各面向均勻受力，結實穩定的住紮在營地上。\"]', 'SnowPeak', 'products'),
(25, 'GP瓦斯營燈', ' 6200', '動物觀察', '燈具', 'GigaPowerBFLantern', '[\"GL-300A_BIG.JPG\",\"GL-300A_1.JPG\",\"GL-300A_2.JPG\",\"GL-300A_3.JPG\",\"GL-300A_4.JPG\"]', '30', 'φ130×235(h)mm', '1.025kg', '不鏽鋼、鋁、黃銅、耐熱玻璃', NULL, '相當於170W', '[\"構造簡單，具備了初入露營者的必要功能外，價格也平價讓人容易入手，並且新推出將房間與客廳為一體的設計\",\"客廳部分配置雪裙，可有效防止強風或是雨水灌入\",\"帳篷內部寬大高度也足夠，不管晴天雨天都能在帳篷內舒適的露營生活。\",\"以四根拱形營柱加上一根脊柱的簡單構造設計，方便搭設。\",\"內帳以懸掛的方式搭設，快速簡單\"]', 'SnowPeak', 'products'),
(26, '日式單人睡墊組', '15030', '動物觀察', '日式睡墊組', 'GrandOfuton', '[\"BD-050_BIG.JPG\",\"BD-050_2.JPG\",\"BD-050_3.JPG\",\"BD-050_4.JPG\"]', '30', '1100×1800mm', '4.6kg', '棉被正面材質、收納袋/高密度尼絲紡；棉被背面材質/法蘭絨；棉被中層材質/可水洗羽絨1000g(鴨絨80%、羽毛20%)、睡墊正面材質/75D聚酯纖維；睡墊背面材質/75D聚酯纖維防滑加工；睡墊中層材質/熱塑性聚氨酯發泡體；睡墊充氣閥/ABS樹脂', NULL, NULL, '[\"兩側與下側有可內翻的反摺處，在翻身時也不容易產生空隙。\",\"接近頭部的部分可配合季節或喜好往上翻摺。\",\"頸部有羽絨套防止冷空氣從肩膀入侵。\",\"會與帳篷底部接觸的反摺處(咖啡色的部分)不是用羽絨布，改以化學纖維製成。\"]', 'SnowPeak', 'products'),
(27, '鬥魚單人充氣式獨木舟', '8160', '獨木舟', '獨木舟', 'AquaMarinaBettaHM', '[\"AquaMarinaBettaHM.jpg\",\"41rho+I3ahL._AC_SL1000_.jpg\",\"51BdzZfQw9L._AC_SL1000_.jpg\",\"51IDb-O1pML._AC_SL1000_.jpg\",\"51m+z4wrBbL._AC_SL1000_.jpg\",\"51mgLZ2YjBL._AC_SL1000_.jpg\",\"51TZrr1zRBL._AC_SL1000_.jpg\",\"511-YrJdxeL._AC_SL1000_.jpg\"]', '30', '312x83cm', '9kg', 'PVC', '最大載重量: 95kg', NULL, '[\"豎直型充氣夾板和高強度夾網船底結構，既藤減少水中阻力又結實可靠，提供足夠的PVC硬度及穩定性\"]', 'AquaMarina', 'products'),
(28, 'Sony RX-100', '13980', '北極光', '相機', 'SonyDSCRX-100', '[\"600x400_04.jpg\",\"600x400_05.jpg\",\"600x400_06.jpg\",\"600x400_07.jpg\",\"600x400_08.jpg\",\"600x400_09.jpg\",\"600x400_10.jpg\",\"600x400_01.jpg\",\"600x400_02.jpg\",\"600x400_03.jpg\"]', '30', '101.6x58.1x 35.9mm', '240g', '鏡頭種類: 卡爾蔡司 Vario-Sonnar T*，6 群 7 枚 (4 枚非球狀鏡片，包括 AA 鏡片)', NULL, NULL, '[\"Cyber-shot RX100集出色畫質與輕巧外型於一身的高階數位相機，採用大尺寸影像感光元件與自訂控制轉盤的明亮大光圈鏡頭，具備極為敏銳的感光度、夢幻的淺景深效果、精準的成像能力，以及如同單眼相機一般的操作方式，讓您能透過前所未見的方式，表現您所見到的世界。睜開您的雙眼，迎接無限的創意可能！\"]', 'Sony', 'products'),
(52, 'LivingShell 客廳帳', '29900', '動物觀察', '帳篷', 'LandBreezeLivingShell', '[\"TP-623R_BIG.JPG\",\"TP-623R_1.JPG\",\"TP-623R_2.JPG\",\"d10438812d484c4d82e2c4870bd8f0fb.jpg\",\"c2ab79960c084b4c8a417662ef25d0c1.jpg\",\"3330efabd3404a6a927a0bfac4bdb61c.jpg\"]', '30', '445x210cm', '13.2kg', '本體/75D滌塔夫、70D尼絲紡、遮光加工PU塗層最低耐水壓3,000mm(頂部)、PU塗層最低耐水壓1,800mm(側壁)、抗UV加工、鐵氟龍撥水加工；雪裙/210D滌塔夫、PU塗層；營柱/A6061(φ16mm、φ19mm)', NULL, NULL, '[\"能不能設計成客廳帳可以直接連接寢室帳? 這樣可以提升實用性吧! 雖然隧道有很高的包覆性，但有時會忘記攜帶。新設計讓連接性提高，實現露營提倡的精神 - 創造人與自然的聯結、創造人與人的聯結。\"]', 'SnowPeak', 'products'),
(53, '象牙白大地帳', '29999', '動物觀察', '帳篷', 'SpearheadPro', '[\"TP-455_BIG.JPG\",\"TP-455_1.JPG\",\"TP-455_2.JPG\",\"spearhead5.JPG\",\"spearhead4.JPG\"]', '30', '680x600cm', '16kg', '帳篷本體／210D聚酯纖維牛津布、PU塗層最低耐水壓1,800mm、鐵氟龍撥水加工、抗UV加工；長營柱短營柱 / A7001鋁合金（φ11mm）、中央營柱／A6061鋁合金（φ34mm）', NULL, NULL, '[\"能不能設計成客廳帳可以直接連接寢室帳? 這樣可以提升實用性吧! 雖然隧道有很高的包覆性，但有時會忘記攜帶。新設計讓連接性提高，實現露營提倡的精神 - 創造人與自然的聯結、創造人與人的聯結。\"]', 'SnowPeak', 'products'),
(54, '卡式瓦斯爐', '3280', '動物觀察', '爐具', 'HomeCampBurner', '[\"GS-600KH_BIG.JPG\",\"GS-600KH_1.JPG\",\"GS-600KH_2.JPG\",\"GS-600KH_3.JPG\",\"GS-600KH_4.JPG\",\"img_product_01.jpg\"]', '30', '346×301×108mm', '1.5kg', '不鏽鋼、鋼鐵、鋁合金、樹脂、橡膠', NULL, '2300kcal/h', '[\"全新設計的單口爐，前所未有的結構設計，實現乾淨簡單的瓶狀外型。不占空間的它，再家好收納。外出好攜帶。\"]', 'SnowPeak', 'products'),
(55, '營燈柱', '2030', '動物觀察', '燈具', 'PileDriver', '[\"LT-004_BIG.JPG\",\"LT-004_1.JPG\",\"7-5-1_a.jpg\",\"7-5-1_c.jpg\"]', '30', '240cm', '1.7kg', '鋼', NULL, '2300kcal/h', '[\"市面上雖有不少懸掛營燈的工具，但Snow peak的營燈柱是最簡約且耐用的。以3段結構組成，每段可上下滑動調整高度，頂端具有吊掛勾設計，插入地面往下輕敲即可完成設置。\"]', 'SnowPeak', 'products'),
(56, '登山背包V30綠', '8100', '動物觀察', '背包', 'Backpack', '[\"MB-122FG_BIG.JPG\",\"MB-122FG_1.JPG\",\"MB-122FG_2.JPG\",\"MB-122FG_3.JPG\",\"MB-122FG_4.JPG\"]', '30', '100x60cm', '920g', '表面／750D尼龍、內面／210D尼龍、緩衝材：EVA', NULL, NULL, '[\"獨家的收納設計，可將登山繩收納於背包本體與肩膀背帶間的間隙。\"]', 'SnowPeak', 'products'),
(57, '軍事風露營睡袋', '5900', '動物觀察', '睡袋', 'BDD-050OD', '[\"BDD-050OD_BIG.JPG\",\"BDD-050OD_1.JPG\",\"BDD-050OD_2.JPG\",\"BDD-050OD_3.JPG\"]', '30', '200×75cm', '2.1kg', '正面/70D防撕尼龍布、背面/70D尼龍滌塔夫、中層/中空 PE', NULL, NULL, '[\"軍事風露營睡袋，考慮到要長時間連續使用， 採用較不會因濕氣而降低保溫能力的化學纖維材質。在各種環境中盡可能提升睡眠的舒適感。\"]', 'SnowPeak', 'products'),
(58, '雙人獨木舟VT-412', '19500', '獨木舟', '充氣獨木舟', 'VT-412', '[\"1573210711.jpg\",\"1573208869.jpg\",\"1573207819.jpg\",\"1573205796.jpg\",\"1573203233.jpg\",\"1573202886.jpg\"]', '30', '412×83cm', '16kg', 'PVC', NULL, NULL, '[\"Betta VT 甲板，改善在開闊水域條件下的競賽。PVC型錐形搖桿設計河落針V皮划艇是一款出色的海上旅遊皮划艇，融合了硬質自動排水系統會在惡劣的條件下打開，在平靜或寒冷的環境中關閉，可以划槳到三級以下的水域，在開闊水域時具有改善的易處理性。\"]', 'SnowPeak', 'products'),
(59, '盧美爾瓦斯燭燈', '2100', '北極光', '燈具', 'CM-5588JM000', '[\"20150608134240705_2.jpg\",\"20150608134240690_2.jpg\",\"20150608134240560_2.jpg\",\"20150608134240560_2.jpg\"]', '30', '7.3x18.3cm', '210g', '鋼、塑膠、耐熱玻璃', NULL, NULL, '[\"不用燈蕊的瓦斯蠋燈可調整火焰高低(最小火焰約3cm、最大火焰約6cm)瓦斯消耗量:約6～8g/h使用時間:約28-38小時(230g瓦斯罐）\"]', 'ColeMan', 'products'),
(60, '3人座充氣皮艇', '10999', '獨木舟', '獨木舟', 'ITIWIT', '[\"ef01ee74-b830-4be0-b90c-6773e97806f7_8387563.jpg\",\"e7c3b34f44014145b1afdcdb9577c3de_8387563.jpg\",\"a36dee1f315f410bb3bb736cba026000_8387563.jpg\",\"791df494d0e34f1bbe78415420309e77_8387563.jpg\",\"4789cd3cc925460fb628174c68e3299a_8387563.jpg\"]', '30', '382x108cm', '17kg', '100.0% 聚酯纖維 內層布料 : 100.0% 聚氯乙烯(pvc）- 不含鄰苯二甲酸鹽', NULL, NULL, '[\"這款有3個較高座位的充氣式獨木舟，可提供划槳時的舒適度。穩固牢靠，適合家庭出遊時使用。\"]', 'ITIWIT', 'products'),
(61, '航海浮力背心', '2499', '獨木舟', '浮力背心', 'DINGHY500', '[\"Dinghy50050N.jpg\",\"Dinghy50050N2.jpg\",\"Dinghy50050N3.jpg\",\"Dinghy50050N4.jpg\",\"Dinghy50050N5.jpg\"]', '30', '175/96A', '1.2kg', '100.0% 聚酯纖維', NULL, NULL, '[\"採用人體工學剪裁（3D結構）設計，這款浮力背心能隨著身體的動作移動。寬版前側口袋可放置必需品！\"]', 'ITIWIT', 'products');

-- --------------------------------------------------------

--
-- 資料表結構 `trip_list`
--

CREATE TABLE `trip_list` (
  `sid` int(255) NOT NULL,
  `trip_name` varchar(255) DEFAULT NULL,
  `trip_place` varchar(255) DEFAULT NULL,
  `trip_type` varchar(255) DEFAULT NULL,
  `trip_month` varchar(255) DEFAULT NULL,
  `trip_difficulty` varchar(255) DEFAULT NULL,
  `trip_days` int(11) DEFAULT NULL,
  `trip_price` int(255) DEFAULT NULL,
  `trip_angency` varchar(255) DEFAULT NULL,
  `trip_start` varchar(255) DEFAULT NULL,
  `trip_end` varchar(255) DEFAULT NULL,
  `trip_menu_img` varchar(255) DEFAULT NULL,
  `trip_menu_imgcover` varchar(255) DEFAULT NULL,
  `trip_menu_content` varchar(255) DEFAULT NULL,
  `trip_desnav_img` varchar(255) DEFAULT NULL,
  `trip_desnav_img2` varchar(255) DEFAULT NULL,
  `trip_des2_carousel_img` varchar(255) DEFAULT NULL,
  `trip_des1left_img` varchar(255) DEFAULT NULL,
  `trip_des1left_content` varchar(255) DEFAULT NULL,
  `trip_des1right_img` varchar(255) DEFAULT NULL,
  `trip_des1right_content` varchar(255) DEFAULT NULL,
  `trip_des2_budget1` varchar(255) DEFAULT NULL,
  `trip_des2_budget2` varchar(255) DEFAULT NULL,
  `trip_des2_content1_1` varchar(255) DEFAULT NULL,
  `trip_des2_content1_2` varchar(255) DEFAULT NULL,
  `trip_des2_content1_3` varchar(255) DEFAULT NULL,
  `trip_des2_content2_1` varchar(255) DEFAULT NULL,
  `trip_des2_content2_2` varchar(255) DEFAULT NULL,
  `trip_des2_content2_3` varchar(255) DEFAULT NULL,
  `trip_des2_content2_4` varchar(255) DEFAULT NULL,
  `trip_des2_content2_5` varchar(255) DEFAULT NULL,
  `trip_des2_content2_6` varchar(255) DEFAULT NULL,
  `trip_des2_content2_7` varchar(255) DEFAULT NULL,
  `trip_des2_content2_8` varchar(255) DEFAULT NULL,
  `trip_des2_content2_9` varchar(255) DEFAULT NULL,
  `trip_des2_content2_10` varchar(255) DEFAULT NULL,
  `trip_des2_content2_11` varchar(255) DEFAULT NULL,
  `trip_des2_content2_12` varchar(255) DEFAULT NULL,
  `trip_des2_content3_1` varchar(255) DEFAULT NULL,
  `trip_des2_content3_2` varchar(255) DEFAULT NULL,
  `trip_des2_content3_3` varchar(255) DEFAULT NULL,
  `trip_des2_content3_4` varchar(255) DEFAULT NULL,
  `trip_des2_content3_5` varchar(255) DEFAULT NULL,
  `trip_des2_content3_6` varchar(255) DEFAULT NULL,
  `trip_router` varchar(255) NOT NULL DEFAULT 'trips'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `trip_list`
--

INSERT INTO `trip_list` (`sid`, `trip_name`, `trip_place`, `trip_type`, `trip_month`, `trip_difficulty`, `trip_days`, `trip_price`, `trip_angency`, `trip_start`, `trip_end`, `trip_menu_img`, `trip_menu_imgcover`, `trip_menu_content`, `trip_desnav_img`, `trip_desnav_img2`, `trip_des2_carousel_img`, `trip_des1left_img`, `trip_des1left_content`, `trip_des1right_img`, `trip_des1right_content`, `trip_des2_budget1`, `trip_des2_budget2`, `trip_des2_content1_1`, `trip_des2_content1_2`, `trip_des2_content1_3`, `trip_des2_content2_1`, `trip_des2_content2_2`, `trip_des2_content2_3`, `trip_des2_content2_4`, `trip_des2_content2_5`, `trip_des2_content2_6`, `trip_des2_content2_7`, `trip_des2_content2_8`, `trip_des2_content2_9`, `trip_des2_content2_10`, `trip_des2_content2_11`, `trip_des2_content2_12`, `trip_des2_content3_1`, `trip_des2_content3_2`, `trip_des2_content3_3`, `trip_des2_content3_4`, `trip_des2_content3_5`, `trip_des2_content3_6`, `trip_router`) VALUES
(1, '冬季的斯德哥爾摩', '瑞典', '多活動', '二月', '非常簡單', 5, 19000, '雄獅旅行社', '2019/11/04', '2019/11/23', 'sotckholm.jpg', 'carte-voyage-suede-1197.jpg', '[\"舒適的市中心住宿\",\"斯德哥爾摩的冬季活動\",\"斯堪地那維亞的特色建築\"]', 'snowcity.jpg', 'suede.svg', '[\"marche-sur-la-glace-de-stockholm-1220.jpg\",\"sotckholm-lhiver-1221.jpg\",\"stockholm-sous-les-aurores-boreales-1219.jpg\"]', 'carte-voyage-suede-1089.jpg', '[\"舒適的市中心住宿\",\"斯堪的納維亞首都的和平現代\",\"斯德哥爾摩的冬季活動\"]', 'voyage-hiver-en-suede-218.jpg', '享受這個令人驚訝的瑞典首都及其群島的謹慎魅力。您將有機會練習體育活動，例如雪鞋行走，越野滑雪或滑冰。活動100％瑞典語，這要歸功於遍布該地區的眾多冰凍湖泊。然後，您可以在舒適的咖啡廳放鬆，喝杯熱咖啡，肉桂糕點和其他甜點。', '2人以下：三星級酒店590歐元起', '其他可能的標準住宿', '[\"巴黎/斯德哥爾摩（定期航班)\",\"航空税\",\"三星級酒店雙人房\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"挪威/芬蘭/瑞典/冰島/法羅群島旅行的碳補償5€\",\"可選活動（需提前預訂）\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"景點和博物館的入口\"]', '斯德哥爾摩', '從法國起飛的航班-抵達阿蘭達國際機場，然後免費轉移至您的住宿。如果您有時間，請在下午首先進入城市。斯德哥爾摩擁有豐富的文化多樣性。您可以參觀市政廳，大教堂或Djurgården小島，該島是瓦薩博物館和Skansen（世界上最古老的露天博物館）的所在地。', '可選活動-斯德哥爾摩', '瑞典首都的訪問。多虧了Stockholmskortet通票（全天60歐元），您可以免費乘坐城市，博物館和旅遊景點。ABBA博物館剛剛開放，以懷念該團體。 漫步在美麗的Gamla Stan區的老城區：鵝卵石街道，哥特式教堂和時尚酒吧的融合。您還可以租用自行車：一種與眾不同的探索城市的方式。', '斯德哥爾摩自由活動日-可選活動', '-斯德哥爾摩的雪鞋行走在\r\n首都附近，在令人窒息的荒野中，在新鮮的雪，冰凍的湖泊和麋鹿的踪跡中成群結隊。\r\n包括：設備（球拍，登山杖，綁腿，背包，額葉）/篝火/ Fika /午餐/接送/指導\r\n價格：130歐元/成人-110歐元/學生-90歐元/兒童- 15歲', '斯德哥爾摩自由活動', '運動日或休閒日，斯德哥爾摩不會讓您無聊的時間。', '返程回國', '免費接送至阿蘭達國際機場。', NULL, NULL, '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。在斯德哥爾摩，您將擁有完全的自由和自治。在可選的活動中，您會得到一本英語指南。可供12歲以上的兒童使用。', '登機前您在機場會獲得高級的產品。晚餐還會送上開胃酒。', '住宿位於斯德哥爾摩市中心的三星級酒店，含早餐。紅船Malaren宿舍或雙人客艙以及共用或私人衛生設施。', '瑞典沒有加入歐元區。貨幣：瑞典克朗。1歐元= 10.40瑞典克朗（2018年10月）', '瑞典看自己想不想給小費都可以。', 'trips'),
(2, '特羅姆瑟', '挪威', '北極光', '十二月', '簡單', 5, 28200, '雄獅旅行社', '2019/11/18', '2019/11/03', 'aurores-boreales-en-laponie-norvegienne-1155.jpg', 'carte-voyage-norvege-593.jpg', '[\"冬季的特羅姆瑟\",\"北極圈外的風景\",\"冬季活動和北極圈\"]', 'aurore-boreale-en-islande-121.jpg', 'norvege.svg', '[\"aurores-boreales-en-laponie-norvegienne-1155 (1).jpg\",\"coucher-de-soleil-hivernal-en-norvege-1156.jpg\",\"cathedrale-de-tromso-1153.jpg\"]', 'carte-voyage-norvege-1060.jpg', '[\"冬季的特羅姆瑟\",\"北極圈外的風景\",\"冬季活動和北極圈\"]', 'iles-lofoten-norvege-du-nord-223.jpg', '享受挪威北部首都特羅姆瑟（Tromsø）的魅力。許多白天或晚上的遊覽都是可能的。短暫停留時，讓自己被冬天的風景和對北極光的觀察所吸引。如果想完全沉浸在大自然的中間，可以在Lavvu（薩米斯的傳統帳篷）中過夜。', '2人以下：840€起/人', '在聖誕節/新年期間，由於目的地的空氣供應有限，請提供額外的預算，最低為500€/人。', '[\"往返航班奧斯陸\",\"航空税\",\"三星級酒店雙人房\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"挪威/芬蘭/瑞典/冰島/法羅群島旅行的碳補償5€\",\"可選活動（需提前預訂）\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"景點和博物館的入口\"]', '特羅姆瑟', '經由奧斯陸的巴黎/特羅姆瑟航班。免費乘坐巴士或出租車從機場到您的住宿。在北極首都享用晚餐和過夜。', 'Tromsø：可選的遊覽', '在您入住期間，您可以探索周邊地區或享受Tromsø小鎮的魅力，這個小鎮在冬天非常熱鬧。這個城市到處都是博物館，例如極地博物館，可追溯北極探險者的歷史。我們建議您繞行前往北極大教堂或乘坐Fjellheisen纜車前往Storsteinen山（海拔420米），在那裡您可以欣賞到城市，水路和周圍群山的全景。', 'Tromsø：可選的遊覽', '海上野生動物園', 'Tromsø：可選的遊覽', '遊覽取決於天氣狀況。關於北極光觀察之旅，儘管特羅姆瑟地區是一個特權觀察的地方，這種現像是自然的，但不能保證。', '返程回國', '免費乘坐巴士或出租車從市中心到機場。', NULL, NULL, '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。完全自由和自治，您將在特羅姆瑟過得愉快。\r\n\r\n請注意，在挪威，公路旅行通常會在渡輪上安排渡輪通道，因此請檢查渡輪的出發時間。在挪威，我們行駛緩慢。在冬季，由於下雪條件，某些道路可能會封閉。\r\n我們還邀請您保持警惕，並在旅行中告知氣象情況。', '在您的自由旅途中，北緯66°會追踪路線並妥善保管組織。提前預訂航班，住宿和可選活動，您可以放心旅行。', '-三星級或四星級酒店：標準雙人/雙床間。斯堪的納維亞自助早餐。特羅姆瑟（Tromsø）的一些酒店都位於市中心，大部分為斯堪的納維亞的連鎖酒店，擁有現代化的舒適設施。', '匯率：1歐元等於9.7挪威克朗（12/2018）', '無', 'trips'),
(3, '芬蘭家庭度假', '芬蘭', '獨木舟', '五月', '非常簡單', 9, 60000, '東南旅行社', '2020/05/04', '2020/05/13', 'qlwqmw.jpg', '672.jpg', '[\"在大自然的中心活動一周\",\"與棕熊互動\",\"沉浸在當地的一個夜晚\"]', 'randonnee-en-finlande-730.jpg', 'finlande.svg', '[\"canoe-en-finlande-lete-729.jpg\",\"hotel-de-finlande-a-hossa-960.jpg\",\"randonnee-ete-famille-enfant-747.jpg\"]', 'carte-voyage-finlande-892.jpg', '[\"在大自然的中心活動一周\",\"與棕熊互動\",\"沉浸在當地的一個夜晚\"]', 'q3fwq.jpg', '您可以乘獨木舟探索北方的森林，也可以被我們可愛的雪橇犬拖曳。在森林的露營中度過一個夜晚，在爐邊野餐，探索捕獸的生活。從您的觀察站觀看那個地方的主人棕熊。各種經歷，充滿情感的日子，非常適合與家人見面！', '2人以下：三星級酒店590歐元起', '其他可能的標準住宿', '[\"航空税\",\"三星級酒店雙人房\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"酒水\",\"個人開支\",\"桑拿：每人10歐元/ 1小時30桑拿房私有化：60歐元\",\"獨木舟/皮艇租賃：每人每天15歐元/半天10歐元\",\"在湖上租船：每人每天25歐元/半天15歐元\",\"租用機動船：每人每天30歐元/半天20歐元\",\"租自行車：每人每天20歐元/半天15歐元\",\"床墊和睡袋的租金：每晚10€\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"觀察棕熊：成年人為100歐元，未滿18歲的成年人為60歐元注意：由於狩獵的開始，對棕熊的觀察自8月12日離開開始。\"]', '庫薩默航班', '到達後，我們沿著公路前往Hossa國家公園門口的Hossa村（約1小時），輕鬆地在我們的旅館定居。', '尤爾瑪-奧爾基峽谷遠足', '經過短暫的調動，我們今天步行到Julmä-Ölkky峽谷，在這些峽谷中進行壯觀的徒步旅行，這是在湖泊和周圍的針葉林上名副其實的眺望樓。我們點燃了第一個篝火，準備午餐野餐。在一天結束時回到旅館。', 'Hossanjoki河上的獨木舟', '乘獨木舟乘獨木舟出發，進行為期2天的非凡家庭冒險。這種輕鬆的旅程將帶我們到由小河相連的平靜湖水。第一天將帶我們前往著名的Värikallio懸崖，在那裡您可以看到可以追溯到公元前4000年的洞穴壁畫，描繪了過去的狩獵場景。然後這條河將帶我們到公園的東部。馴鹿和麋鹿數量眾多，頻繁的停留會讓我們觀察，沐浴或採摘野生漿果作為晚餐。在營地帳篷裡的夜晚將是一個分享的時刻。', '休息日和觀察熊', '這一天將是一個與家人一起享受我們多元化活動基地提供的眾多活動的機會。可能的活動包括山地自行車，遠足或劃獨木舟，游泳，釣魚或與家人在Hossanjarvi湖岸邊放鬆身心。下午晚些時候，我們將在旅館迎接最後一位斯堪的納維亞偉大的捕食者，即泰加羚羊的主人。您還將被要求在一個飛地前往鄰國俄羅斯進行（可選）看熊的夜晚，該鄰國俄羅斯的熊比例是歐洲最高的。您將在專門為觀察大河天皇而配備的小木屋中的look望台上度過一個夜晚。', '返程回國', '免費接送至機場。', NULL, NULL, '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。在可選的活動中，您會得到一本英語指南。可供12歲以上的兒童使用。', '登機前您在機場會獲得高級的產品。晚餐還會送上開胃酒。', '含早餐。紅船Malaren宿舍或雙人客艙以及共用或私人衛生設施。', '芬蘭的貨幣單位是歐元。', '這是一種常見而非強制性的做法。根據旅行結束時的滿意度，通常會給您的嚮導和當地團隊小費。必鬚根據國家的生活水平和旅行時間進行調整。這是您對收到的服務表示讚賞的手勢。\r\n對於芬蘭，為期8天的課程每位參與者10至20歐元，為期2週的課程20至30歐元（可能與嚮導，駕駛員有關）。', 'trips'),
(4, '韋斯特曼群島', '冰島', '動物觀察', '六月', '簡單', 6, 28200, '酷吉旅行社', '2020/6/10', '2020/6/16', 'cote-islandaises-1283.jpg', 'carte-voyage-islande-644.jpg', '[\"經典行程的另一種旅行\",\"鳥類和其他動物的天堂\",\"遙遠的西部峽灣\"]', 'ojfoiwjioj.jpg', 'islande.svg', '[\"on-the-road-in-iceland-1280.jpg\",\"guillemot-en-islande-1281.jpg\",\"voyage-en-islande-kerlingarfjoll-1282.jpg\"]', 'qwe12e.jpg', '[\"經典行程的另一種旅行\",\"鳥類和其他動物的天堂\",\"遙遠的西部峽灣\"]', 'champ-de-lupin-islande-108.jpg', '從海洋西部到Kjölurthe石沙漠的4x4旅程。這次旅行將帶您在冰島西部和韋斯特曼群島之間的海洋和山脈之間，在喧鬧的懸崖峭壁上遇到地球上最重要的海鳥殖民地。在韋斯特曼納湖（Vestmannaeyjar），埃爾德費爾火山（Eldfell）火山出現將近40年，將您帶到永遠的小島。旅行結束時，在Kjolur沙漠中的通道會給旅行帶來更多礦物風味。一個美麗的發現！', '容納2位旅客：從2020€/人每晚在農場和旅館（衛生共享）的雙人間中含早餐。 ', NULL, '[\"凱夫拉維克的A / R航班，每人1件托運行李限額，含稅\",\"航空税\",\"租用4x4貓9天。G（鈴木Vitara或類似車型），無限里程，包括CDW保險，提供第二個駕駛員選件\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"挪威/芬蘭/瑞典/冰島/法羅群島旅行的碳補償5€\",\"可選活動（需提前預訂）\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"雷克雅未克和一些旅遊景點的停車費（到目前為止，辛格韋德利，塞利亞蘭瀑布和斯卡夫塔費爾：750至900冰島克朗\"]', '凱夫拉維克/雷克雅未克', '抵達凱夫拉維克。在機場接您的車。如果您選擇了“帳篷下”選項，請前往我們基地的雷克雅未克東部，我們的團隊成員將為您提供露營工具，並可以回答您的問題。為您的日子加油，晚上在鎮上加油。', '雷克雅未克/ Arnarstapi', '在現Snaefellsnes半島南海岸及其宏偉的玄武岩器官懸崖，並以其特有的火山為主體，而儒勒·凡爾納（Jules Verne）在著名的小說《前往地球中心的旅程》中將其永久化。它是成千上萬隻鳥類的家園，如黑腳Kittiwakes，北極燕鷗，北富爾瑪和北塘鵝。', 'Arnarstapi / stykkisholmur', '您可以繼續在這個崇高的半島上探索海灘，海洋，熔岩田，鳥崖，並在Snaefellsjökull的背景下發現。參觀瓦特希爾火山熔岩洞穴。', 'Stykkisholmur / Brjanslaekur / Latrabjarg', '於09:00出發，乘渡輪Baldur穿越Breidafjordur到達Vestfirdir“西北峽灣”半島（約3小時）。然後，您將開車前往長12公里，高510米的Latrabjarg懸崖，您會發現在這些懸崖上築巢的許多鳥類。您將觀察到數量驚人的海雀僧侶，海雀科的鳥和“小企鵝”。', '霍爾瑪維克/布朗杜斯', '向南行駛，然後向東到達金發果。遊覽瓦特尼斯半島的機會，可以看到海豹殖民地和Hvitserkur拱門。', '海拉/ Vestmannaeyjar /凱夫拉維克', '您可以乘船到Landeyjarhöfn，在30分鐘內到達Vestmann群島的Heimaey島。發現覆蓋著灰燼的“北部龐貝古城”，埃爾德費爾火山和赫爾加費爾火山的舊部分。觀鳥在懸崖上。一天結束時返回您的住宿地點，前往機場或雷克雅未克。如果您可以選擇在帳篷下存放露營工具包，請在我們的基地存放，並在鎮上進行小型遊覽。', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。完全自由和自治，您將在特羅姆瑟過得愉快。\r\n\r\n請注意，在挪威，公路旅行通常會在渡輪上安排渡輪通道，因此請檢查渡輪的出發時間。在挪威，我們行駛緩慢。在冬季，由於下雪條件，某些道路可能會封閉。\r\n我們還邀請您保持警惕，並在旅行中告知氣象情況。', '在您的自由旅途中，北緯66°會追踪路線並妥善保管組織。提前預訂航班，住宿和可選活動，您可以放心旅行。', '-三星級或四星級酒店：標準雙人/雙床間。斯堪的納維亞自助早餐。特羅姆瑟（Tromsø）的一些酒店都位於市中心，大部分為斯堪的納維亞的連鎖酒店，擁有現代化的舒適設施。', '匯率：1歐元等於9.7挪威克朗（12/2018）', '無', 'trips'),
(5, '迪斯科灣', '格陵蘭', '獨木舟', '六月', '簡單', 10, 99999, '可樂旅遊', '2020/06/02', '2020/06/12', 'voyage-voilier-croisiere-au-groenland-2355.jpg', 'carte-voyage-groenland-1164.jpg', '[\"體驗在冰上滑行\",\"獨木舟,划艇,帆船交替\",\"在冰山和鯨魚中間划艇\"]', 'jjqwuh.jpg', 'groenland.svg', '[\"croisiere-en-voilier-en-antarctique-2378.jpg\",\"kayak-de-mer-arctique-au-groenland-2354.jpg\",\"ville-dilulissat-au-groenland-932.jpg\"]', 'qqqwees.jpg', '[\"體驗在冰上滑行\",\"獨木舟,划艇,帆船交替\",\"在冰山和鯨魚中間划艇\"]', 'match-foot-entre-enfants-au-groenland-523.jpg', '所有人揚帆起航，我們踏上了獨特而獨特的皮划艇之旅，從一個浮動的大本營遠足，發現了迪斯科灣的偏僻地點。\r\n\r\n瞄準那些希望將格陵蘭島皮划艇和徒步旅行的積極發現與帆船的舒適性相結合的旅行者，此行是探索這個海灣的獨特方式的唯一途徑，該海灣凝聚了格陵蘭島的所有魅力。', '2人以下：三星級酒店590歐元起', '其他可能的標準住宿', '[\"與帆船有關的活動設備（冰川行走和皮划艇設備）\",\"航空税\",\"船上全膳，包括晚餐時的非酒精飲料和葡萄酒\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"船艙可舒適地容納3人，因此如果船是完整的，則有可能將您的船艙共享給三個人。可以將機艙私有化，費用為1500歐元（如果您是兩人，則為750歐元/人）。\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"景點和博物館的入口\"]', '伊盧利薩特-卡西吉安圭特', '看到從天空看到的格陵蘭風景，您的到來已經非同尋常！您會在Ilulissat漁村找到LifeSong帆船。一名船員將在您抵達時等您，將您帶到船上。船員吃飽之後，我們稱重錨，向南，朝著Qasigiannguit小村莊走去。令人難忘的第一天，在冰與巨大的冰山之間蜿蜒曲折。', 'Qasigiannguit-Akunaaq', '在遠離冰層的寧靜夜晚之後，我們發現了Qasigiannguit村。想像一下色彩繽紛的房子，鱈魚在風中乾燥，雪橇犬在休息，幼犬在苔蘚中嬉戲，小型漁船返回海港……格陵蘭的氛圍得到保證！\r\n然後，我們駛向Disko灣南部的Akunnaaq村。', 'Akunnaaq到Aasiaat，皮划艇', '許多島嶼之間的冰山和槳。在小島上野餐，最好的鯨魚和冰觀景台！\r\n船將等待著我們，彷彿被魔法錨定在亞西亞特附近的一條小溪中。我們會很高興地發現船的舒適性，高溫和美味佳餚。\r\n包括：設備（球拍，登山杖，綁腿，背包，額葉）/篝火/ Fika /午餐/接送/指導\r\n價格：130歐元/成人-110歐元/學生-90歐元/兒童- 15歲', 'Aasiaat-Kronprinsens', '一天的開始是在周圍的群山中漫步。4小時的航行將帶我們到Disko灣以西的Kronprinsens群島。\r\n然後，我們去發現這些島嶼中一個被遺棄的村莊，並沿著幾步走來，欣賞四面八方的冰山的壯麗景色。', 'Kronprinsens-Qeqertarsuaq', '早晨，我們乘皮划艇在島嶼上穿行，並穿過天然運河。幸運的是，我們可以繞過滯留在海岸附近的冰巨人之一。驅車一會兒即可到達迪斯科島的主要村莊Qeqertarsuaq。接近Qeqertarsuaq，我們將更好地區分格陵蘭這些獨特懸崖的岩層和o石顏色。\r\n在一天結束時，我們下船去發現這個小鎮的氛圍，它的教堂和海灣的景色。', 'Pakitsoq-阿塔阿', '到達Ataa村的距離並不長，但是根據冰的密度，它可能會變成迷宮！這個寧靜的天堂理想地位於鱒魚豐富的湖上和山腳下。這是保羅·埃米爾·維克多（Paul-ÉmileVictor）在1958年拍攝的電影“海豹之人”中介紹的居民的日常生活。', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。在可選的活動中，您會得到一本英語指南。可供12歲以上的兒童使用。', '登機前您在機場會獲得高級的產品。晚餐還會送上開胃酒。', 'LifeSong是專門為巡航設計的獨特模型。它的4個帶有浴室的客艙，寬敞的轎車，兩個駕駛艙使LifeSong成為探險航行的理想帆船。', '在格陵蘭，貨幣為丹麥克朗。您可以在法國兌換貨幣。注意，格陵蘭島的生活十分昂貴，紀念品的價格很快就會漲到50歐元以上。2019年3月，1歐元= 7.45丹麥克朗。期望200丹麥克朗的鈔票可兌換1000丹麥克朗（用於個人支出，紀念品，...）。在格陵蘭島，您可以用信用卡支付所有費用，但是當您離開伊盧利薩特（Ilulissat）時，將沒有任何機會使用它！', '我們建議船員每人20至50歐元。但是，重要的是要考慮到，根據您對工作的滿意程度和當地團隊的關注程度，必須給小費', 'trips'),
(6, '洛磯山脈', '加拿大', '動物觀察', '十二月', '簡單', 8, 90000, '燦星旅遊', '2020/03/10', '2020/03/18', 'randonnee-dans-louest-canadien-834.jpg', 'carte-voyage-groenland-1164.jpg', '[\"通往壯觀岩石的多樣路線\",\"我們精選的最美麗的遠足\",\"加拿大西部的野生動物\"]', 'uuvhd.jpg', 'canada.svg', '[\"lac-canada-ouest-836.jpg\",\"voyage-groupe-au-canada-833.jpg\",\"randonnee-dans-les-rocheuses-au-canada-837.jpg\"]', 'carte-voyage-canada-991.jpg', '[\"通往壯觀岩石的多樣路線\",\"我們精選的最美麗的遠足\",\"加拿大西部的野生動物\"]', 'ours-bruns-au-canada-843.jpg', '翠綠色的湖泊，巨大的森林，白雪皚皚的山峰，冰川，瀑布和峽谷，...加拿大西部地區的壯麗氣息和野生美景給人留下深刻的印象。我們徒步探索該地區最美麗的公園。認識野生和未受破壞的自然的絕好機會：我們處在灰熊，黑熊，麋鹿和歐洲盤羊的自然棲息地。', '2人以下：840€起/人', '在聖誕節/新年期間，由於目的地的空氣供應有限，請提供額外的預算，最低為500€/人。', '[\"往返溫哥華和卡爾加里\",\"航空税\",\"全膳，溫哥華和卡爾加里的午餐和晚餐除外\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"前往落基山脈的碳補償：每人15歐元\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"溫哥華和卡爾加里的午餐和晚餐（每餐約20至45加元）\"]', '溫哥華-惠斯勒', '早晨免費參觀溫哥華，這座充滿魅力的國際大都會。然後我們離開正北。我們沿著濱海路，俯瞰峽灣，著名的“海天高速公路”，直達惠斯勒。我們的營地安裝了兩個晚上。', '惠斯勒-加里波第公園', '惠斯勒以其獨特的山區環境，沿海岸山脈而聞名，並因承辦了2010年奧運會和殘奧會冬季奧運會的一部分而聞名，我們享受這種特殊的自然環境，可以進行一日徒步旅行。 。方向加里波第公園，巨大的省級公園，提供美麗的山脈風光和未受破壞的曠野。', '惠斯勒-威爾斯·格雷', '我們將壯麗的山脈風光穿越不列顛哥倫比亞省的高地。我們穿過乾旱的山谷和遠西的風景，直到到達Hat Creek Ranch，該站點追溯了1860年代淘金熱所吸引的旅行者的歷史。火山和冰雪留下了自己的烙印，並以非同尋常的方式塑造了山脈和山谷。我們的營地安裝了兩個晚上。', '威爾斯灰色省立公園', '我們發現了這個亞高山地區，讓人聯想到法國阿爾卑斯山。韋爾斯格雷省立公園（Wells Gray Provincial Park）綽號“瀑佈公園”，是最壯觀的自然保護區之一。整日，美麗的步道將使您發現幾個美麗的瀑布：Spahats，Mouls，Dawson和最後的Helmcken瀑布。對於許多人來說，這些是加拿大西部最美麗的瀑布。高流量，非凡的自然環境和交通便利性吸引了所有花時間停在那裡的遊客。如果天氣允許，在格林山的頂部享用午餐，從塔頂可以欣賞到壯麗的景色。下午結束時返回營地。\r\n', '碧玉-硫磺天際線', '我們到達Miette溫泉，這是在Sulphur Skyline山脊上進行壯觀遠足的起點。步道盡頭的陡峭攀登值得一遊，可欣賞到周圍群山的360度全景。遠足後，有可能（可選）在米耶特溫泉的三個天然溫泉池中放鬆身心。回到營地。', '賈斯珀-瑪琳湖', '繼續探索賈斯珀公園，我們將前往瑪琳湖，該湖位於一個古老冰川谷的空地中。我們在公園的這一部分徒步旅行，穿過禿頭山的峽谷，化石，瀑布和開滿鮮花的高山草甸。（可選）僅徒步半天並乘船遊覽加拿大最著名的景點之一，精神島，只能乘船到達。', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。完全自由和自治，您將在特羅姆瑟過得愉快。\r\n\r\n請注意，在挪威，公路旅行通常會在渡輪上安排渡輪通道，因此請檢查渡輪的出發時間。在挪威，我們行駛緩慢。在冬季，由於下雪條件，某些道路可能會封閉。\r\n我們還邀請您保持警惕，並在旅行中告知氣象情況。', '在您的自由旅途中，北緯66°會追踪路線並妥善保管組織。提前預訂航班，住宿和可選活動，您可以放心旅行。', '在溫哥華過夜，在路易絲湖過夜，將是旅館（帶共用浴室的四床房），而卡爾加里的最後一晚將在旅館中。在其餘的逗留期間，我們睡在帳篷裡。露營地是享受野生自然環境的絕佳方式。他們總是很乾淨而且位置很好，但是在旺季他們也很擁擠。這些營地配有篝火，野餐桌和衛生區。有些淋浴，有些則沒有（4分鐘1-2加元）。', '貨幣單位是歐元', '通常在住宿結束時給導遊提供小費，每人2週的旅行費用約為45加元/人，3週的旅行費用約為65加元/人。', 'trips'),
(7, '冰島遊覽', '冰島', '動物觀察', '五月', '非常簡單', 12, 88888, '可樂旅遊', '2020/05/18', '2020/05/30', 'saut-dune-baleine-a-bosse-1334.jpg', 'carte-voyage-islande-623.jpg', '[\"冰島遊覽和繞行至西北峽灣\",\"私家車可進入的各種景觀\",\"散步與沈思之間的甜蜜旅程\"]', 'qowne.jpg', '000123.svg', '[\"oiseaux-dislande-1338.jpg\",\"jokulsarlon-site-dicebergs-en-islande-1336.jpg\",\"phoques-en-islande-1333.jpg\"]', 'carte-voyage-islande-1025.jpg', '[\"冰島遊覽和繞行至西北峽灣\",\"私家車可進入的各種景觀\",\"散步與沈思之間的甜蜜旅程\"]', 'champ-de-lupin-islande-108.jpg', '沿著環島的主要道路，您會發現冰島及其眾多面孔，並徒步探索美麗的括號。Vatnajökull冰川，Jökulsarlon潟湖和冰山，東部深峽灣，Myvatn湖，火山活動的溫床，北海岸的小漁港，沿著Latrabjarg懸崖和Snæfellsness半島的海雀僧侶的觀察描述這次旅程的風景。', '在帳篷下”，可容納2位旅客：從1385€/人\r\n預算根據出發時間和預訂時的可用性而有所不同', '其他可能的標準住宿', '[\"凱夫拉維克的A / R航班，每人1件托運行李限額，含稅\",\"航空税\",\"在雷克雅未克一家旅館的雙人間住宿2晚，共用浴室和早餐\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"挪威/芬蘭/瑞典/冰島/法羅群島旅行的碳補償5€\",\"可選活動（需提前預訂）\"]', '[\"機場到市中心的接送\",\"膳食（午餐：20-40€/人，晚餐：30-60€/人）\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"車輛燃油和可選保險\"]', '凱夫拉維克/雷克雅未克', '抵達凱夫拉維克。在機場接您的車。如果您選擇了“在帳篷下”選項，請轉到我們基地的雷克雅未克東部，我們的團隊成員將為您提供露營套件並可以回答您的問題。為您的日子加油，晚上在鎮上加油。', '雷克雅未克/黃金圈', '出發前往辛格韋德利（Thingvellir），這是議會谷，是冰島歷史上最重要的地方。這是歷史上最早的共和國之一的930年成立的古代冰島議會的夏季會議所在的地方！我們繼續探索古佛斯瀑布，這是一個“金色的秋天”，它是一條巨大的兩層瀑布，流入裝飾有玄武岩器官的峽谷，而蓋伊西爾地熱區則帶有Strokkur間歇泉，每隔5至10分鐘就會湧出一次。在南海岸的夜晚。', 'Skogar / Vik / Kirkjubaejarklaustur', '火山，冰蓋和海洋之間通往Skogar村的壯麗道路：參觀Skogar的民間藝術博物館，探索Seljalandfoss和Skogafoss的瀑布。然後，您會發現Reynisfjara巨大的黑沙灘，周圍是Reynisdrangar和Dyrholaey（冰島的埃特爾塔）海角。您的路線繼續穿過廣闊的青苔Eldhraun，到達Kirkjubaejarklaustur村。\r\n', 'Kirkjubaejarklaustur / Skaftafell國家公園', '在Skaftafell自然公園中，您可以在幾條遠足徑上漫步，沿著陽台小路俯瞰從該國最高峰降下的冰川舌頭，尋找Svartifoss的瀑布或冰島最大的樹', '赫本/朱皮沃古爾/埃格斯塔爾迪爾\r\n', '穿越東方的峽灣，在Faskrudsfjordur村中探索法國垂釣的過去。根據您的意願，您可以直接前往Egilsstadir或花時間探索峽灣中的幾個村莊。', '埃吉爾斯塔迪爾/黛提瀑布/米湖\r\n', '通過東北的中央沙漠高原，我們到達米湖（Lake Myvatn）上活躍的火山帶。到達湖之前，請沿著黛提瀑布的大瀑布', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。在可選的活動中，您會得到一本英語指南。可供12歲以上的兒童使用。', '我們提醒您，冰島的氣候非常多變。火山島確實位於兩股空氣之間，一股冷空氣來自格陵蘭，另一股熱來自墨西哥灣流。天氣好，雨，風，霧或大雪在一天中並不少見！\r\n\r\n風可能非常頻繁，有時甚至是猛烈的。我們邀請您保持警惕，並在旅途中告知您氣象情況。\r\n在您的自由旅途中，北緯66°會追踪路線並妥善保管組織。提前預訂了機票，租車，住宿和露營套件，您可以放心旅行。', '露營是享受野生自然環境的一種非常好的方法。他們總是很乾淨而且位置很好。他們提供通常的便利設施（每淋浴3至4歐元的衛生和熱水淋浴費用）。\r\n露營裝備將由我們提供。露營地不提前預訂。我們在旅行書中為您提供我們精選的露營地。在第一個和最後一個晚上，在雷克雅未克的一家旅館（共用衛生設施）中住宿。', '冰島克朗不能在法國獲得，或者價格非常不利。\r\n我們建議您（尤其是如果您遲到冰島的話），只需在到達機場（可在行李運送室中）後直接在ATM自動櫃員機上取款即可。', '無', 'trips'),
(8, '魁北克的針葉林,獨木舟,水上飛機', '加拿大', '獨木舟', '六月', '普通', 11, 97000, '酷吉旅行社', '2020/06/27', '2020/07/08', 'groupe-de-canoes-sur-la-riviere-au-quebec-1595.jpg', 'asdasd.jpg', '[\"9月-島與莫伊西河之間的水上飛機飛行\",\"完全自主的探險\",\"探險泰道沙克和薩格奈峽灣\"]', 'qkjnjnw.jpg', 'canada.svg', '[\"feu-de-camp-pres-dun-lac-1567.jpg\",\"voyage-hydravion-canada-847.jpg\",\"qjwiji.jpg\"]', 'carte-voyage-canada-1109.jpg', '[\"9月-島與莫伊西河之間的水上飛機飛行\",\"完全自主的探險\",\"探險泰道沙克和薩格奈峽灣\"]', 'ours-bruns-au-canada-843.jpg', '我們建議您在魁北克北岸的狂野河流上，完全在鋪砌的道路之外，進行一次完全自主的旅行。\r\n\r\n在乘坐浮動飛機飛越北方森林之後，我們直接降落在Moisie河上。遠離任何文明，我們沿著這條河提供的200公里處下降，在全景中總是更加宏偉，跟隨著捕手和美洲原住民的腳步。進行時，我們看到了海狸的小屋，熊的足跡和駝鹿的足跡。\r\n我們參加了這個偉大的獨木舟探險，探索了泰道沙克，魁北克和蒙特利爾等城市的魅力。\r\n', '2人以下：三星級酒店590歐元起', '其他可能的標準住宿', '[\"蒙特利爾航班)\",\"航空税\",\"教練\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"前往魁北克的碳補償：每人10€\",\"可選活動（需提前預訂）\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\"]', '三河勵', '我們開始在平靜的水面上劃獨木舟，以準備我們的探險。在友好的氣氛中在篝火旁享用晚餐。', '北海岸', '享用了豐盛的早餐後，我們乘坐小巴前往聖勞倫斯河沿岸的北岸。距加拿大最大的野生河流之一隻有六個小時的車程。免費午餐和晚餐。', '水上飛機飛往莫伊西河', '完全隔離的Moisie河無法通過任何道路通行，因此我們選擇空中連接的方式。早餐後，我們完成準備工作：稱量設備重量，解釋安全說明，將獨木舟裝載到水上飛機滑道上，……這是一個很大的出發，我們起飛了在北岸的森林之上，在河的中間著陸。在水上午餐，然後我們建立了我們的第一個營地。', '在Moisie河上', '水上冒險：有時是放鬆的跡象，有時是瘋狂的步伐。每天，都會被美麗的風景，腎上腺素劑量和與野生環境的特權接觸所打斷。當我們不划槳時，我們會花時間在瀑布中沐浴，釣魚並探索該地區的動植物。傍晚，我們在海灘上或森林中間建立了我們的營地，我們去取木柴取火和澆水到河裡。釣魚（長矛，大眼鯛，鱒魚）是提高普通水平的機會！通過將自己沉浸在這片荒野的中心，我們可能會看到駝鹿和黑熊。', '泰道沙克', '在Moisie流入聖勞倫斯河之前，我們完成了大約十公里的漫遊。回到文明，我們乘小巴到達Tadoussac村：這是一個以鯨魚和自然美景聞名的一流村莊。免費晚餐。', '魁北克市-蒙特利爾', '免費發現魁北克。夏季，魁北克老城區充滿生機：商人，工匠，音樂家，啞劇……免費午餐。下午，午餐後出發前往蒙特利爾，享受這座國際大都市的樂趣。歷史區，舊港口，皇家山公園，...參觀的可能性很多。參觀和免費用餐。', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。在可選的活動中，您會得到一本英語指南。可供12歲以上的兒童使用。', '早晨，我們提供豐盛的早餐。\r\n我們通常會去野餐午餐。\r\n到了晚上，現場準備的熱食便會在現場購買。篝火旁有許多烤架。\r\n\r\n我們提供烹飪設備和餐具。備餐時將歡迎您的幫助。', '-在生態帳篷中住2晚。它是避難所和帳篷之間的混合體：被帆布包圍的木製結構。裡面有兩張單人床和一張雙人床或沙發床，一張桌子和椅子，一台冰箱和一個小爐灶。外面衛生。\r\n-獨木舟探險期間在帳篷中住7晚。', 'Visa和Mastercard幾乎在任何地方都可以接受。您可以使用它來支付購買和餐飲費用或提款。您也可以兌換歐元。\r\n17年1月1日，EUR = 0.70 CAD', '按照慣例，在住宿結束時，為2週的旅行提供約45加元/人的小費，為3週的旅行提供約65美元的小費。', 'trips'),
(9, '探險瑞典', '瑞典', '動物觀察', '四月', '簡單', 7, 50000, '雄獅旅行社', '2020/04/01', '2020/04/08', 'qijwije.jpg', '1723.jpg', '[\"看到麋鹿和海狸的好機會\",\"在森林中間的小屋中住3晚\",\"砍柴，在篝火旁加熱飯食\"]', 'lac-en-suede-lete-1797.jpg', 'suede.svg', '[\"cabane-dans-les-forets-de-suede-1800.jpg\",\"castors-en-suede-1799.jpg\",\"foret-de-suede-lete-1801.jpg\"]', 'carte-voyage-suede-1099.jpg', '[\"看到麋鹿和海狸的好機會\",\"在森林中間的小屋中住3晚\",\"砍柴，在篝火旁加熱飯食\"]', 'voyage-hiver-en-suede-218.jpg', '瑞典角（Cape on Sweden）在大自然中短暫停留，尋找瑞典野生動植物！在發現首都斯德哥爾摩之後，您將進入森林的中部，成群地進行動物之旅。這種沉浸始於小屋中不尋常的夜晚。這將是您在住宿期間的大本營。當地嚮導將在那裡，使您不會錯過麋鹿和海狸之旅的組織！游泳，篝火和遠足將讓您度過美好的一天！', '2人以下：一人1470歐元起', '可供8歲以上的兒童使用。 ', '[\"巴黎/斯德哥爾摩（定期航班)\",\"航空税\",\"三星級酒店雙人房\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"挪威/芬蘭/瑞典/冰島/法羅群島旅行的碳補償5€\",\"可選活動（需提前預訂）\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"景點和博物館的入口\"]', '斯德哥爾摩', '從法國起飛的航班-抵達阿蘭達國際機場，然後免費轉移至您的住宿。如果您有時間，請在下午首先進入城市。斯德哥爾摩擁有豐富的文化多樣性。您可以參觀市政廳，大教堂或Djurgården小島，該島是瓦薩博物館和Skansen（世界上最古老的露天博物館）的所在地。', '斯德哥爾摩/斯金斯卡伯格-沉浸在大自然中', '在第一個晚上，您將在篝火旁做飯。您從附近的春天取水，砍伐自己的木頭，點燃篝火。儲藏室將提供基本食品。對於新鮮農產品，您可以去隔壁村莊的超市。到了晚上，您可以劃獨木舟，遠足，釣魚，游泳或在篝火旁放鬆。在森林小屋裡的第一夜。', '斯德哥爾摩自由活動日-可選活動', '-斯德哥爾摩的雪鞋行走在\r\n首都附近，在令人窒息的荒野中，在新鮮的雪，冰凍的湖泊和麋鹿的踪跡中成群結隊。\r\n包括：設備（球拍，登山杖，綁腿，背包，額葉）/篝火/ Fika /午餐/接送/指導\r\n價格：130歐元/成人-110歐元/學生-90歐元/兒童- 15歲', 'Safari海狸', '早餐。該區域有免費的日子。您可以探索森林，也可以開車前往距離大本營約10公里的Färna生態公園。客人可以在FärnaHerrgård享受溫泉浴，或到周邊地區散步。還建議您繞行前往科爾斯瓦地區的傳統瑞典咖啡館。\r\n傍晚，您去了海狸野生動物園。起步距離您的客艙18公里。接待處將提供一張卡片，帶您進入野生動物園。在您的嚮導的陪伴下，您去了另一個湖，最有機會看到海狸。為此，您將乘坐充氣船在日落時靠近海狸。然後，您將在一個海狸砍伐木材以創造棲息地的島上停下來吃晚餐。夜幕降臨，回到起點。您拿起車輛返回過夜。', 'Safari Elans', '早餐。可能的戶外活動：遠足，劃獨木舟或在湖邊享受桑拿（木柴加熱）。下午，您將再次遇到我們的目的地和瑞典動物區系專家指南之一。這次，進行麋鹿之旅。將從您的家庭營地開始。您將被轉移到附近的森林中。幾乎可以保證看到麋鹿的機會。徒步旅行持續約5個小時，您將在深夜返回生態小屋。活動期間將提供餐點。', 'Skinnskatteberg /斯德哥爾摩', '到目前為止，這個地方最後的早餐！您可以在湖上或桑拿浴室裡散步，享受這個不尋常地方的最後一次。然後，您將開車前往斯德哥爾摩。我們建議繞行前往烏普薩拉（Uppsala），這是一條被運河橫穿的小鎮。老烏普薩拉也值得一遊。您也可以在Gardsjoalg麋鹿公園或韋斯特羅斯（Västerås）停留，那裡可以參觀美麗的農場。一天結束時，將租車返回市中心。在首都的夜晚。', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。在斯德哥爾摩，您將擁有完全的自由和自治。在可選的活動中，您會得到一本英語指南。可供12歲以上的兒童使用。', '登機前您在機場會獲得高級的產品。晚餐還會送上開胃酒。', '住宿位於斯德哥爾摩市中心的三星級酒店，含早餐。紅船Malaren宿舍或雙人客艙以及共用或私人衛生設施。', '瑞典沒有加入歐元區。貨幣：瑞典克朗。1歐元= 10.40瑞典克朗（2018年10月）', '瑞典看自己想不想給小費都可以。', 'trips'),
(10, '拉普蘭大道口', '芬蘭', '動物觀察', '八月', '非常簡單', 15, 79000, '東南旅行社', '2020/08/04', '2020/08/19', 'huhuw.jpg', '672.jpg', '[\"拉普蘭與北開普省的絕佳交匯處\",\"獨木舟，觀看野生動物\",\"發現迷人的薩米文化\"]', 'randonnee-dans-les-forets-de-finlande-lete-940.jpg', 'finlande.svg', '[\"randonnee-au-cap-nord-norvege-du-norda-321.jpg\",\"canoe-en-riviere-a-hossa-en-finlande-1482.jpg\",\"hotel-de-finlande-a-hossa-960.jpg\"]', 'carte-detaillee-du-voyage-en-laponie-norvege-et-finlande-2046.jpg', '[\"拉普蘭與北開普省的絕佳交匯處\",\"獨木舟，觀看野生動物\",\"發現迷人的薩米文化\"]', 'q3fwq.jpg', '這次獨特的巡迴旅行為北極圈邊緣的北歐打開了大門。這次旅行從芬蘭出發，在絕對北極的氛圍中，在歐洲最美麗的道路之一上開始。它的終點是挪威，朝著芬馬克沙漠高原。\r\n\r\n當我們爬到歐洲最北端時，所穿越的領土千差萬別，臭名昭著的景觀也在演變。北部卡累利阿州眾多湖泊和河流周圍的北方森林逐漸被著名的Tunturit山脈所取代，然後被草食植被所取代的北極平原所取代。穿越薩米人的國家，探索薩米人及其傳統的旅程，最後將是前往神話般的北開普省。', '住宿（小型木屋，生態小屋，rorbu中的12晚和帳篷中的2晚）', NULL, '[\"航空税\",\"北開普省觀鳥郊遊\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"酒水\",\"個人開支\",\"桑拿：每人10歐元/ 1小時30桑拿房私有化：60歐元\",\"獨木舟/皮艇租賃：每人每天15歐元/半天10歐元\",\"在湖上租船：每人每天25歐元/半天15歐元\",\"租用機動船：每人每天30歐元/半天20歐元\",\"租自行車：每人每天20歐元/半天15歐元\",\"床墊和睡袋的租金：每晚10€\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"觀察棕熊：成年人為100歐元，未滿18歲的成年人為60歐元注意：由於狩獵的開始，對棕熊的觀察自8月12日離開開始。\"]', '庫薩默航班', '我們團隊的成員在機場接待。乘坐小巴前往霍薩村（約1小時）。在您的ecolodge房間安裝。客人可以在桑拿浴室放鬆身心，同時欣賞Hossa湖的落日。', '獨木舟之旅', '每天晚上，在河邊爐邊乘獨木舟乘獨木舟出發，進行3天的非凡冒險。完全沉浸在其中，景觀悄然流向潮流，並在歐洲最後保存的自然地區之一中划槳。我們開始從南部的朱爾瑪·厄爾基峽谷（JulmaÖlkky）峽谷開始下降，隨後是標誌著我們路線的一系列小湖。我們離開拉普蘭，穿越由棕熊和駝鹿組成的卡累利阿大森林。在這種下降過程中還將出現許多鳥類，這使我們能夠以鳥類學的方式進行這種水上遠足。晚上在帳篷裡釣魚和採摘。在第4天下午結束時返回生態小屋。', '棕熊', '這一天將是一個機會，享受我們的多功能基地提供的無數活動。可能的活動包括山地自行車，四輪摩托，遠足或劃獨木舟，游泳，釣魚或在Hossanjarvi湖畔放鬆。對於那些希望（在可選地）晚上在飛地地區到鄰近的俄羅斯進行觀察的人來說，這也是一個機會。在俄羅斯附近，熊的比例是歐洲最高的。您將在專門為觀察大河天皇而配備的小木屋中的look望台上度過一個夜晚。觀察的可能性非常好！當母親“帶著”幼崽“降落”或當 一個半盲的老人登上我們的機艙！觀察之夜（為此目的安排了觀察站）。', '霍薩-烏蘭卡：在小熊徑上遠足', '前往歐洲最美麗的國家公園之一奧蘭卡國家公園（Oulanka National Park），參加芬蘭最著名的徒步旅行之一Karhunkierros或Bear Trail進行壯觀的徒步旅行。河流在這裡挖了針葉林，創造了美麗的峽谷。這條小徑是多種多樣的，並散佈著許多吊橋，使我們沉浸在狂野而未受破壞的自然環境中。', 'Oulanka-Urho Kekkonen', '在經過北極圈以北300公里之後，我們於下午加入了芬蘭第二大國家公園。這個巨大的公園匯集了北極自然的所有特徵。參觀了Tankavaara黃金礦工村之後，我們將在公園內俯瞰我們住宿的山脊上進行首次騎行。', 'Urho Kekkonen-稻荷', '今天早上，對於那些希望的人，我們去見馴鹿場（可選）。田園和文化交流將在此舉行。午後，乘船前往芬蘭最大的擁有3000個小島的伊納里湖（Lake Inari）乘船前往神聖的薩滿教徒島拉普斯（Lapps）。在返回的路上，這艘船將我們送入森林中心，沿著湖泊漫步至大自然中間的18世紀Pielpajärvi教堂。回到我們沿湖的住宿。', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。在可選的活動中，您會得到一本英語指南。可供12歲以上的兒童使用。', '享用豐盛的早餐後，野餐總是由當地食物組成：三明治，沙拉以及您的嚮導。水果，蛋糕和乾果...由您早上準備。到了晚上，飯菜會一起準備。', '-芬蘭：住宿期間，雙人房或集體屋傳統木屋中的夜晚（最多4至6人）。小木屋具有以下元素：暖氣，熱水淋浴，廁所，公共飯廳和設備齊全的廚房。桑拿房位於小屋內或室外。\r\n-挪威：羅爾布和平房\r\n您的睡袋會像羽絨被一樣陪伴您整個住宿。。', '芬蘭的貨幣單位是歐元。', '這是一種常見而非強制性的做法。根據旅行結束時的滿意度，通常會給您的嚮導和當地團隊小費。必鬚根據國家的生活水平和旅行時間進行調整。這是您對收到的服務表示讚賞的手勢。\r\n對於芬蘭，為期8天的課程每位參與者10至20歐元，為期2週的課程20至30歐元（可能與嚮導，駕駛員有關）。', 'trips'),
(11, '威廉王子灣', '阿拉斯加州', '郵輪和帆船', '七月', '普通', 10, 63000, '雄獅旅行社', '2020/07/01', '2020/07/10', 'k1j2i3.jpg', 'q1kp2.jpg', '[\"偉大的哥倫比亞冰川\",\"觀察海洋野生動植物\",\"在船上釣魚並享受帝王蟹\"]', 'voilier-qilak-alaska-1318.jpg', 'alaska.svg', '[\"baleine-alaska-1319.jpg\",\"foret-alaska-1322.jpg\",\"qilak-alaska-1287.jpg\"]', 'carte-voyage-alaska-870.jpg', '[\"偉大的哥倫比亞冰川\",\"觀察海洋野生動植物\",\"在船上釣魚並享受帝王蟹\"]', 'chien-de-traineau-en-alaska-2236.jpg', '乘坐Qilak帆船，只有6位乘客和2位水手在威廉王子灣的北極圈中，在鯨的華爾茲和冰川崩塌之間！在阿拉斯加灣的心臟地帶，威廉王子灣是一個擁有200多個島嶼的巨大海灣，其中40座冰川流入大海。', NULL, '其他可能的標準住宿', '[\"港口/港口導航全膳\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"從巴黎出發的套票航班，運輸港口/機場以及郵輪旅行前後的可能夜晚\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"上岸的費用和活動（公園或博物館的門票，餐廳，飲料）\"]', '在瓦爾迪茲港口登船', '登上Qilak。', '哥倫比亞冰川', '哥倫比亞冰川是北美最大的冰川，全長64公里，可儲存數百萬噸的冰。攔住冰山，進入冰川腳下。停泊在翡翠港。', '米雷斯冰川', 'Maeres冰川：威廉王子灣唯一仍在發展的冰川！在熊的腳步遠足到礦工湖。地板上鋪著一層厚實的泡沫地毯“麝香”。在礦工灣繫泊。', '黑石冰川', '最受歡迎的攝影黑石冰川（Blackstone Glacier）的南路，可欣賞令人嘆為觀止的全景。', '科克倫灣', '探索科克倫灣（Cochrane Bay），然後徒步前往什羅德湖。在綠色的環境中，我們到達了絕佳的地點：威廉王子灣最美麗的錨地！', '內莉·胡安冰川', 'Culross內部通道在無數的島嶼和小島中間提供了宏偉的走廊，直達內里胡安冰川腳下受到良好保護的小海灣德里克森灣。停泊在德里克森灣。', '1至6名參與者', '在受保護的海洋中航行，沒有必要事先了解航行知識，歡迎初學者練習。儘管不需要特殊的身體條件，但我們只是要求您足夠健康以方便上下船（梯子爬上去，有時您必須跨過碼頭才能進入船上）並在陸地上行走。有時像海邊的岩石一樣滑', '登機前您在機場會獲得高級的產品。晚餐還會送上開胃酒。', '住船上', 'Visa和Mastercard幾乎在任何地方都可以接受。您可以使用它來支付購買和餐飲費用或提款。您也可以兌換歐元。', '在旅行結束時，習慣性小費將作為一般貢獻。金額由各自決定。小費是非常個人的選擇，您可以給自己想要的金額。\r\n', 'trips'),
(12, '航行到白色大陸', '南極洲', '郵輪和帆船', '一月', '困難', 26, 250000, '極限旅行', '2020/01/05', '2020/01/31', 'qwjieo.jpg', '1po2k2.jpg', '[\"南極航行\",\"以機組成員的身份參加演習\",\"南極動物區系的觀察\"]', 'croisiere-en-voilier-en-antarctique-2370.jpg', 'antarctique.svg', '[\"baleine-a-bosse-en-antarctique-2371.jpg\",\"iceberg-geant-en-antarctique-2369.jpg\",\"manchots-empereurs-et-leurs-bebes-en-antarctique-2368.jpg\"]', 'carte-voyage-antarctique-871.jpg', '[\"南極航行\",\"以機組成員的身份參加演習\",\"南極動物區系的觀察\"]', 'elephants-de-mer-et-manchots-en-antarctique-209.jpg', '這項探索，通常被稱為“白色大陸”的南極半島。這次探險使您可以吸收大自然提供的奇妙風光。幾乎恆定的一天使我們能夠充分享受賞鯨，虎鯨，企鵝殖民地和各種海豹家庭的樂趣。這是我們必須絕對保護的野生生物的天堂，我們擔心在通過過程中不要污染。', '住宿在船上', NULL, '[\"帆船的港口/港口航行，雙層床可容納2人混合泊位)\",\"税\",\"由該領域的專業負責人和他的第二任監督\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"全食宿（有關食宿的信息，請參見下文）\",\"飛往烏斯懷亞的航班（聯繫我們以獲得報價\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"每人每天40歐元的航行費用（每人1040歐元）一盒，第一天以現金和歐元交給船長。這個盒子主要用來蓋郵費，燃料和食物\"]', '烏斯懷亞', '抵達烏斯懷亞，您加入帆船，並在機艙內定居。在餐廳享用晚餐（不包括在內）以了解船員並為這次偉大的冒險做好準備。', '小獵犬海峽和德雷克穿越', '冒險的開始！我們在小獵犬海峽下船航行。然後，我們等待正確的天氣窗口導航Drake。', '南極半島探索', '在南極半島上的砂岩航行和沿岸遊覽以觀察野生動物。每個站都是讓您沉浸在這個狂野而完美的世界中的機會。\r\n根據冰雪條件和天氣，我們駛向企業灣的神話般的地區及其冰川冰激凌，地標燕鷗。', '南極半島探索', '我們探索Cuverviville，這是鯨魚常去的覓食地區。\r\n然後，我們降落在Videla的智利基地，以接近其企鵝殖民地。\r\n我們稍後發現的天堂灣是這次旅行的亮點，因為這個陡峭的山脈和冰川所環繞的地點雄偉壯觀。我們肯定會在這種富含浮游生物的水中看到鯨魚奇觀的景象：像海豚一樣好奇的露脊鯨，座頭鯨，逆戟鯨或虎鯨。', '南極半島探索', '在洛克羅伊港（Port Lockroy）下船，這是許多Gentoo企鵝常去的英國基地，然後從勒梅爾（Lemaire）運河上游到達比尼奧（Plenneau），帕爾默·韋納德斯基（Palmer Vernadsky）和梅爾基奧爾（Melchior）群島。', NULL, NULL, '4至7名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。在斯德哥爾摩，您將擁有完全的自由和自治。在可選的活動中，您會得到一本英語指南。可供12歲以上的兒童使用。', '無', '住宿在船上', '在阿根廷，本國貨幣為阿根廷比索。1〜6比索。出發前無需進行零錢兌換：歐元在阿根廷非常受歡迎。信用卡幾乎可以在任何地方使用，如果有必要，可以很容易地從烏斯懷亞的當地經銷商取錢。 ', '根據您對工作的滿意程度和當地團隊的關注程度，授予慣常的小費（不包括在工資中）（可選）。小費是非常個人的選擇，您可以給自己想要的金額。', 'trips'),
(13, '在薩米人的土地上', '芬蘭', '多活動', '五月', '簡單', 5, 44000, '東南旅行社', '2020/05/04', '2020/05/09', 'qwhuens.jpg', '672.jpg', '[\"遠離旅遊勝地的住宿\",\"各種口味的冬季活動\",\"Inari湖邊緣的北極光\"]', 'renne-en-finlande-687.jpg', 'finlande.svg', '[\"chiens-de-traineau-en-laponie-941.jpg\",\"hebergement-finlande-en-hiver-948.jpg\",\"renne-de-finlande-lhiver-947.jpg\"]', 'carte-voyage-finlande-910.jpg', '[\"遠離旅遊勝地的住宿\",\"各種口味的冬季活動\",\"Inari湖邊緣的北極光\"]', 'q3fwq.jpg', '天氣很冷，這個季節有利於在芬蘭短暫休假。在拉普蘭森林中心的一處住宿中的異國風情度假。您的基地將在伊納洛地區（Inval Lake）的伊納洛（Ivalo）地區。將提供遠北地區的典型活動：狗拉雪橇，雪地摩托，北極光觀察...在芬蘭文化的溫床桑拿浴中度過輕鬆的時光，為您的住宿增添一抹樂趣！', '基本2人：1395歐元起', '對於聖誕節/新年假期，通常的預算不可用：預算為1850€/人。休假活動。', '[\"航空税\",\"伊瓦洛返程通過赫爾辛基\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"酒水\",\"個人開支\",\"桑拿：每人10歐元/ 1小時30桑拿房私有化：60歐元\",\"北極光警報：15€/晚\",\"升級到帶桑拿的原木套房（聯繫我們）\",\"租用機動船：每人每天30歐元/半天20歐元\",\"租自行車：每人每天20歐元/半天15歐元\",\"床墊和睡袋的租金：每晚10€\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"雪地摩托保險免賠額：800歐元/人/雪地摩托/人（按信用卡記號存入）\"]', '伊瓦洛', '飛往芬蘭。下午結束時到達。轉移到您的住宿地點，位於伊瓦洛（Ivalo）東北50公里處。\r\n第一次旅行會使您沉浸在拉普蘭氛圍中。', '大自然', '-健行雪鞋（2h或4h）或越野滑雪（2h）\r\n-狗拉雪橇（3h）\r\n', '大自然', '-雪地摩托（2h，4h或6h進行冰上釣魚）\r\n-在雪地摩托上搜尋北極光，乘雪地車拉雪橇，小巴，雪鞋行走\r\n', '大自然', '-雪地車和馴鹿群', '返程回國', '免費接送至機場。', NULL, NULL, '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。在可選的活動中，您會得到一本英語指南。可供12歲以上的兒童使用。', '芬蘭並不是以美食聞名，儘管有些特色菜真的很美味！由於氣候條件和地方的孤立，新鮮產品很少。\r\n自助早餐和晚餐。\r\n酒精僅在伊瓦洛的國營商店有售。住宿設有一間酒吧。', '伊瓦洛（Ivalo）東北50公里，位於伊納里湖（Lake Inari）和俄羅斯邊境附近，酒店位於自然中心地帶的一家酒店內，結合了木材的溫暖和真實性，並裝飾有斯堪的納維亞風格的現代客房。主樓設有休息室和餐廳。所有客房均設有私人浴室，部分客房設有私人桑拿浴室（額外收費）。', '芬蘭的貨幣單位是歐元。', '這是一種常見而非強制性的做法。根據旅行結束時的滿意度，通常會給您的嚮導和當地團隊小費。必鬚根據國家的生活水平和旅行時間進行調整。這是您對收到的服務表示讚賞的手勢。\r\n對於芬蘭，為期8天的課程每位參與者10至20歐元，為期2週的課程20至30歐元（可能與嚮導，駕駛員有關）。', 'trips'),
(14, '探險霍薩', '芬蘭', '雪橇犬', '七月', '普通', 8, 72000, '探險旅行社', '2020/07/04', '2020/04/12', 'iiqwe.jpg', '672.jpg', '[\"各種各樣的活動\",\"在帶桑拿的旅館過夜\",\"霍薩自然公園，遠離大眾旅遊\"]', 'voyage-en-chien-de-traineau-en-finlande-684.jpg', 'finlande.svg', '[\"alaskan-huskies-en-finlande-2271.jpg\",\"paysage-finlande-en-hiver-686.jpg\",\"randonnee-raquettes-a-neige-en-finlande-lhiver-2256.jpg\"]', 'carte-voyage-finlande-899.jpg', '[\"各種各樣的活動\",\"在帶桑拿的旅館過夜\",\"霍薩自然公園，遠離大眾旅遊\"]', 'q3fwq.jpg', '完成該計劃以了解芬蘭和極北地區的冬季。位於芬蘭東北部的霍薩（Hossa），森林和林地環繞，這是一個非常荒涼的地區，遠離大眾旅遊和大型度假勝地。\r\n\r\n在您一周的日程上：雪地摩托探險，狗拉雪橇探險，雪鞋行走和卡里蘭多，冰上釣魚，捕獸者一天中的生存技巧。而且還有自由的一天來選擇許多可能的活動。每天晚上，您會在宿舍中找到舒適的客房，並可以使用桑拿浴室。多年的旗艦計劃，應該會令您滿意。', '基本2人：1855歐元起', '對於聖誕節/新年假期，通常的預算不可用：預算為1850€/人。休假活動。', '[\"航空税\",\"伊瓦洛返程通過赫爾辛基\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"酒水\",\"個人開支\",\"桑拿：每人10歐元/ 1小時30桑拿房私有化：60歐元\",\"北極光警報：15€/晚\",\"升級到帶桑拿的原木套房（聯繫我們）\",\"租用機動船：每人每天30歐元/半天20歐元\",\"租自行車：每人每天20歐元/半天15歐元\",\"床墊和睡袋的租金：每晚10€\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"雪地摩托保險免賠額：800歐元/人/雪地摩托/人（按信用卡記號存入）\"]', '庫薩莫', '我們團隊的成員在機場接待。乘坐小巴前往霍薩村（約1小時）。在旅館安裝。第一天晚上，在Hossa Inn享用晚餐。屆時將給出一周的活動順序（指示每天的活動順序）。', '狗拉雪橇駕駛（每個掛鉤2人）', '出發並首次徒步約25公里。第一次見面：突擊隊員向您介紹團隊。您將被託付兩隻（7隻狗）的馬車。在湖上的首次啟動和首次測試。清晨，出發前往湖泊和森林小徑遠足。下午晚些時候返回旅館。', '雪地摩托', '乘雪地摩托旅行的兩個人帶您領略文明與自由的融合。當然，沒有技術上的困難。午餐在Piispajoki（傳統的桑拿浴室）誘捕者小木屋中享用，菜單上有：燒烤和振興拉普蘭湯。\r\n', '與雪橇犬在霍薩公園徒步旅行', '我們在cani-rando遠足一日。就像過去的愛斯基摩人一樣，雪橇犬將我們拉到腰間。人與狗之間相互信任和分享的獨特體驗！針葉林地帶的徒步旅行俯瞰著湖泊，將為您提供完美的環境，讓您充分利用這一天的情感。在一個木製的小屋裡野餐在凍河的邊緣。', '捕手節', '在這一天中，我們將通過介紹生存技術來發現陷阱的生活方式。您將發現對於任何極地探險者來說必不可少的技術，並且您將啟動陷阱的安裝，沿著動物的足跡前進，並且還將在冰凍的湖泊水域發現白色的垂釣物。自己打好洞後，您將啟動自己的產品線，希望能趕上潮流，當然您將有機會品嚐！我們還將學習冰屋的建造以及不同類型的庇護所。我們還將參觀我們的狗窩，並藉此機會與我們忠實的同伴一起度過一段時間。\r\n一天結束時，您將有機會發現當地的馴鹿群（每人10歐元，需當地支付）。', '自由活動', '那些希望休息一天的人。進行許多可選活動的機會：越野滑雪，雪鞋徒步，雪地摩托（在現場查看，並根據實際情況，進行其他活動需要現場支付額外的費用）。\r\n到了晚上，我們將品嚐育種者的傳統餐食：Karestus，或用小紅莓跳過馴鹿。', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。在可選的活動中，您會得到一本英語指南。可供12歲以上的兒童使用。', '芬蘭並不是以美食聞名，儘管有些特色菜真的很美味！由於氣候條件和地方的孤立，新鮮產品很少。\r\n自助早餐和晚餐。\r\n酒精僅在伊瓦洛的國營商店有售。住宿設有一間酒吧。', '伊瓦洛（Ivalo）東北50公里，位於伊納里湖（Lake Inari）和俄羅斯邊境附近，酒店位於自然中心地帶的一家酒店內，結合了木材的溫暖和真實性，並裝飾有斯堪的納維亞風格的現代客房。主樓設有休息室和餐廳。所有客房均設有私人浴室，部分客房設有私人桑拿浴室（額外收費）。', '芬蘭的貨幣單位是歐元。', '這是一種常見而非強制性的做法。根據旅行結束時的滿意度，通常會給您的嚮導和當地團隊小費。必鬚根據國家的生活水平和旅行時間進行調整。這是您對收到的服務表示讚賞的手勢。\r\n對於芬蘭，為期8天的課程每位參與者10至20歐元，為期2週的課程20至30歐元（可能與嚮導，駕駛員有關）。', 'trips'),
(15, '看見峽灣', '挪威', '駕車遊覽', '十月', '簡單', 8, 41000, '探險旅行社', '2020/10/01', '2020/10/08', 'qo12o1.jpg', 'carte-voyage-norvege-565.jpg', '[\"挪威南部的峽灣和山脈的發現\",\"在Jotunheimen國家公園散步\",\"卑爾根和奧勒松市\"]', 'geiranger-fjord-norvege-du-sud-1170.jpg', 'norvege.svg', '[\"alesund-en-ete-en-norvege-318.jpg\",\"nigardsbreen-glacier-en-norvege-316.jpg\",\"route-des-trolls-1171.jpg\"]', 'carte-voyage-norvege-1056.jpg', '[\"挪威南部的峽灣和山脈的發現\",\"在Jotunheimen國家公園散步\",\"卑爾根和奧勒松市\"]', 'iles-lofoten-norvege-du-nord-223.jpg', '這次乘車旅行是發現挪威南部奇觀的理想之選。您處於令人驚嘆的風景的中心，這些風景將在您整個旅途中吸引您。您將在湖泊，山谷，森林，Jotunheimen之類的高山高原和Geirangerfjord或Sognefjord之類的深峽灣中騎行。', '2人以下：1380€起/人', NULL, '[\"往返航班奧勒松\",\"航空税\",\"租用大眾汽車！或類似服務7天，包括CDW保險和無限公里\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"挪威/芬蘭/瑞典/冰島/法羅群島旅行的碳補償5€\",\"可選活動（需提前預訂）\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"景點和博物館的入口\"]', '奧勒松', '奧勒松航班（通過奧斯陸）。在機場接您的租車。在這個被水包圍的迷人城市中的第一夜。', '奧勒松/蓋朗厄爾', '奧勒松以其新藝術風格的建築而聞名。它建在幾個島嶼上，通過橋樑或隧道通過海底相連，\r\n然後向海勒瑟爾特（Hellesylt）方向乘船穿越蓋朗厄爾峽灣。雄偉的入口進入這座宏偉的峽灣，陡峭的城牆，點綴著無數瀑布，並帶有令人回味的名字（', '蓋朗厄爾/博韋達倫', '然後，您向洛姆（Lom）下降，在那裡建議您停下來參觀他的站立教堂。然後，您將沿著這條路進入挪威最著名的國家公園：Jotunheimen，在高山的氣氛中度過一夜。', 'Boverdalen /鬆達爾\r\n', '您將前往美麗的Lustrafjorden峽灣，它將帶您前往鬆達爾市。您將經過歐洲最大的冰川Nigardsbreem。沿著布魯斯市（Bruheim），沿著約斯泰達倫（Jostedalen）山谷向上，您可以在挪威南部最大的荒野地區之一：約斯泰達斯本國家公園（Jostedalsbreen National Park）遠足。', '約瑟達公園', '致力於在Nigardsbreen冰川附近遠足的一天。可以在冰川湖上劃皮艇。', '卑爾根', '發現卑爾根。您可以去Mont Floyen。在高處遠足的可能性下降到城市。纜車可通往Ulriken山，這將為您提供最令人驚嘆的城市景觀。同樣不容錯過的是其令人難忘的魚市場和蝦三明治，漢薩同盟區及其眾多博物館。', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。完全自由和自治，您將在特羅姆瑟過得愉快。\r\n\r\n請注意，在挪威，公路旅行通常會在渡輪上安排渡輪通道，因此請檢查渡輪的出發時間。在挪威，我們行駛緩慢。在冬季，由於下雪條件，某些道路可能會封閉。\r\n我們還邀請您保持警惕，並在旅行中告知氣象情況。', '在您的自由旅途中，北緯66°會追踪路線並妥善保管組織。提前預訂航班，住宿和可選活動，您可以放心旅行。', '-三星級或四星級酒店：標準雙人/雙床間。', '匯率：1歐元等於9.7挪威克朗（12/2018）', '無', 'trips'),
(16, '七天七個島嶼', '費洛群島', '駕車遊覽', '一月', '簡單', 7, 43000, '燦星旅遊', '2020/01/20', '2020/01/27', 'ahqun.jpg', '12aas.jpg', '[\"美麗，永恆和狂野的島嶼\",\"七個島嶼群島的美麗概覽\",\"完全自由的租車\"]', 'village-de-sorvagur-sur-lile-de-vagar-aux-iles-feroe-1248.jpg', 'iles-feroe.svg', '[\"cascade-de-mulafossur-a-gasadalur-sur-lile-de-vagar-aux-feroe-1249.jpg\",\"village-de-eidi-aux-iles-feroe-sur-lile-eysturoy-1250.jpg\",\"ville-de-copenhague-et-ses-canaux-1251.jpg\"]', 'carte-voyage-iles-feroe-887.png', '[\"美麗，永恆和狂野的島嶼\",\"七個島嶼群島的美麗概覽\",\"完全自由的租車\"]', 'voyage-aux-iles-feroe-69.jpg', '這個密集而完整的程序通過發現七個島嶼的程序對群島進行了很好的概述：Vagar，Streymoy，Eysturoy，Bordoy，Vidoy，Kalsoy，Sandoy。駕駛，遠足和乘坐傳統船隻將島嶼連接起來，您將帶走這些丟失在海洋中央的土地的脈搏。懸崖，海雀芭蕾，綠色的山丘和噴霧描述了這次旅行的風景和氛圍，這也將打開法羅群島傳奇的頁面。您從峽灣搬到港口，穿過帶有Noroise建築及其泥炭和草屋頂的移動小村莊，漫步在法羅群島迷人之都Torshavn色彩斑streets的街道上。', '2人以下：1380€起/人', NULL, '[\"往返航班瓦加爾\",\"航空税\",\"租用大眾汽車！或類似服務7天，包括CDW保險和無限公里\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"挪威/芬蘭/瑞典/冰島/法羅群島旅行的碳補償5€\",\"可選活動（需提前預訂）\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"景點和博物館的入口\"]', '哥本哈根/ VAGAR', '從巴黎經哥本哈根到達瓦加爾機場。您在機場接您的租車。根據您的到達時間，步行到Bour和Gasadalur村莊以及Vagar島上迷人的Sorvagur漁港。', 'Streymoy和Eysturoy', '前往Vestmannabjorgini的可選遊覽。在28或48座的船上，您將欣賞維斯特曼納的懸崖。船駛入深海洞穴，聲學和光的作用與超現實主義融為一體，玉綠色的水像肺一樣呼吸。往北行駛，到達美麗而狹窄的薩克森峽灣（Saksun Fjord），一個動人​​的小村莊和一座古老的農場博物館坐落在一座小草屋頂的教堂旁。', 'Eysturoy', '在Gjögv和Eidi之間的道路上，在Sundin Sound和Risin“巨人”和Kerling（“女巫”）令人印象深刻的礁石上，您可以欣賞到壯觀的景色。如果時間允許，您可以漫步在群島的最高峰Slættartindur（882 m）。', '北島', '從Gjogv出發，沿著Leirvik的方向行駛，然後沿著隧道到達Klaksvik，然後沿著一條非常美麗的道路前往Vidoy島上的Vidareidi村。我們強烈建議您去Kalsoy島，參觀Trollanes，然後步行到Kallur燈塔。', '托爾斯港', '沿著海路繼續前往托爾斯港，並參觀這個小首都。在最著名的地方中，發現迷人的漁港，在古老的托爾斯港氛圍中充滿色彩的狹窄街道，當地咖啡館，海港周圍的幾家商店，北歐之家', 'Sandoy', '返回瓦加爾機場。經由哥本哈根出發前往法國。', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。完全自由和自治，您將在特羅姆瑟過得愉快。\r\n\r\n請注意，在挪威，公路旅行通常會在渡輪上安排渡輪通道，因此請檢查渡輪的出發時間。在挪威，我們行駛緩慢。在冬季，由於下雪條件，某些道路可能會封閉。\r\n我們還邀請您保持警惕，並在旅行中告知氣象情況。', '在您的自由旅途中，北緯66°會追踪路線並妥善保管組織。提前預訂航班，住宿和可選活動，您可以放心旅行。', '小型雙人/雙床間的旅館或酒店。\r\n-旅館：這是一間私人房間的住宿，但在多個房間之間共享衛生設施（浴室，衛生間）。此套餐不包含早餐。\r\n-旅館：這是在私人房間和私人浴室中的住宿。自助早餐包括在內。通常每個階段只有一間酒店，因此類別之間沒有選擇（從未分類到4 *不等）。只有首都托爾斯港提供幾種類型的酒店（3或4 *）。', '您可以攜帶歐​​元現金，也可以在銀行兌換。一些銀行，機場，一些酒店和商店的櫃檯都接受國際信用卡（Visa，MasterCard，Euro-Card）。托沙文有自動售貨機。', '無', 'trips'),
(17, '貝加爾湖，西伯利亞的明珠', '俄羅斯', '步行', '三月', '普通', 9, 82000, '燦星旅遊', '2020/03/20', '2020/03/29', 'qakaq.jpg', 'qwemma.jpg', '[\"美麗，永恆和狂野的島嶼\",\"七個島嶼群島的美麗概覽\",\"完全自由的租車\"]', 'village-de-sorvagur-sur-lile-de-vagar-aux-iles-feroe-1248.jpg', 'iles-feroe.svg', '[\"cascade-de-mulafossur-a-gasadalur-sur-lile-de-vagar-aux-feroe-1249.jpg\",\"village-de-eidi-aux-iles-feroe-sur-lile-eysturoy-1250.jpg\",\"ville-de-copenhague-et-ses-canaux-1251.jpg\"]', 'carte-voyage-iles-feroe-887.png', '[\"美麗，永恆和狂野的島嶼\",\"七個島嶼群島的美麗概覽\",\"完全自由的租車\"]', 'voyage-aux-iles-feroe-69.jpg', '這個密集而完整的程序通過發現七個島嶼的程序對群島進行了很好的概述：Vagar，Streymoy，Eysturoy，Bordoy，Vidoy，Kalsoy，Sandoy。駕駛，遠足和乘坐傳統船隻將島嶼連接起來，您將帶走這些丟失在海洋中央的土地的脈搏。懸崖，海雀芭蕾，綠色的山丘和噴霧描述了這次旅行的風景和氛圍，這也將打開法羅群島傳奇的頁面。您從峽灣搬到港口，穿過帶有Noroise建築及其泥炭和草屋頂的移動小村莊，漫步在法羅群島迷人之都Torshavn色彩斑streets的街道上。', '2人以下：1380€起/人', NULL, '[\"往返航班瓦加爾\",\"航空税\",\"租用大眾汽車！或類似服務7天，包括CDW保險和無限公里\",\"早餐\",\"詳細的旅行書\",\"24小時的線上支援服務\"]', '[\"註冊費：每人18歐元（免費-12年）\",\"旅行取消保險（行程價格的3％），回國保險（2％）或多重風險旅行保險：取消，協助，行李，回國保險（行程價格的4％）\",\"挪威/芬蘭/瑞典/冰島/法羅群島旅行的碳補償5€\",\"可選活動（需提前預訂）\"]', '[\"機場到市中心的接送\",\"酒水和個人開支\",\"餐點\",\"國際航班上的餐點和飲料：SAS公司不提供機上餐點\",\"景點和博物館的入口\"]', '哥本哈根/ VAGAR', '從巴黎經哥本哈根到達瓦加爾機場。您在機場接您的租車。根據您的到達時間，步行到Bour和Gasadalur村莊以及Vagar島上迷人的Sorvagur漁港。', 'Streymoy和Eysturoy', '前往Vestmannabjorgini的可選遊覽。在28或48座的船上，您將欣賞維斯特曼納的懸崖。船駛入深海洞穴，聲學和光的作用與超現實主義融為一體，玉綠色的水像肺一樣呼吸。往北行駛，到達美麗而狹窄的薩克森峽灣（Saksun Fjord），一個動人​​的小村莊和一座古老的農場博物館坐落在一座小草屋頂的教堂旁。', 'Eysturoy', '在Gjögv和Eidi之間的道路上，在Sundin Sound和Risin“巨人”和Kerling（“女巫”）令人印象深刻的礁石上，您可以欣賞到壯觀的景色。如果時間允許，您可以漫步在群島的最高峰Slættartindur（882 m）。', '北島', '從Gjogv出發，沿著Leirvik的方向行駛，然後沿著隧道到達Klaksvik，然後沿著一條非常美麗的道路前往Vidoy島上的Vidareidi村。我們強烈建議您去Kalsoy島，參觀Trollanes，然後步行到Kallur燈塔。', '托爾斯港', '沿著海路繼續前往托爾斯港，並參觀這個小首都。在最著名的地方中，發現迷人的漁港，在古老的托爾斯港氛圍中充滿色彩的狹窄街道，當地咖啡館，海港周圍的幾家商店，北歐之家', 'Sandoy', '返回瓦加爾機場。經由哥本哈根出發前往法國。', '1至12名參與者', '憑藉我們在該領域的經驗，我們提供了自由的探索之旅，無需嚮導即可訪問。您在旅途中應自行負責。完全自由和自治，您將在特羅姆瑟過得愉快。\r\n\r\n請注意，在挪威，公路旅行通常會在渡輪上安排渡輪通道，因此請檢查渡輪的出發時間。在挪威，我們行駛緩慢。在冬季，由於下雪條件，某些道路可能會封閉。\r\n我們還邀請您保持警惕，並在旅行中告知氣象情況。', '在您的自由旅途中，北緯66°會追踪路線並妥善保管組織。提前預訂航班，住宿和可選活動，您可以放心旅行。', '小型雙人/雙床間的旅館或酒店。\r\n-旅館：這是一間私人房間的住宿，但在多個房間之間共享衛生設施（浴室，衛生間）。此套餐不包含早餐。\r\n-旅館：這是在私人房間和私人浴室中的住宿。自助早餐包括在內。通常每個階段只有一間酒店，因此類別之間沒有選擇（從未分類到4 *不等）。只有首都托爾斯港提供幾種類型的酒店（3或4 *）。', '您可以攜帶歐​​元現金，也可以在銀行兌換。一些銀行，機場，一些酒店和商店的櫃檯都接受國際信用卡（Visa，MasterCard，Euro-Card）。托沙文有自動售貨機。', '無', 'trips');

-- --------------------------------------------------------

--
-- 資料表結構 `wish_list`
--

CREATE TABLE `wish_list` (
  `w_id` int(11) NOT NULL,
  `u_id` varchar(255) NOT NULL,
  `product_label` varchar(255) NOT NULL COMMENT '品牌 / 國家',
  `product_name` varchar(255) NOT NULL COMMENT '商品名稱',
  `product_info` varchar(255) NOT NULL COMMENT '天數 / 尺寸',
  `product_img` varchar(255) NOT NULL,
  `trip_start_date` varchar(255) NOT NULL,
  `trip_end_date` varchar(255) NOT NULL,
  `trip_angency` varchar(255) NOT NULL,
  `product_price` varchar(255) NOT NULL,
  `product_router` varchar(255) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `liked` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `wish_list`
--

INSERT INTO `wish_list` (`w_id`, `u_id`, `product_label`, `product_name`, `product_info`, `product_img`, `trip_start_date`, `trip_end_date`, `trip_angency`, `product_price`, `product_router`, `product_id`, `liked`) VALUES
(4, '79', '瑞典', '探險瑞典', '7', 'qijwije.jpg', '2020/04/01', '2020/04/08', '雄獅旅行社', '50000', 'trips', '9', 1),
(5, '94', '瑞典', '冬季的斯德哥爾摩', '5', 'sotckholm.jpg', '2019/11/04', '2019/11/23', '雄獅旅行社', '19000', 'trips', '1', 1),
(6, '94', 'SnowPeak', '日式單人睡墊組', '1100×1800mm', 'BD-050_BIG.JPG', '4.6kg', '', '', '19030', 'products', '26', 1),
(15, '90', '芬蘭', '芬蘭家庭度假', '9', 'qlwqmw.jpg', '2020/05/04', '2020/05/13', '東南旅行社', '60000', 'trips', '3', 1),
(17, '69', 'AquaMarina', '鬥魚單人充氣式獨木舟', '312x83cm', 'AquaMarinaBettaHM.jpg', '9kg', '', '', '8160', 'products', '27', 1),
(21, '69', '瑞典', '冬季的斯德哥爾摩', '5', 'sotckholm.jpg', '2019/11/04', '2019/11/23', '雄獅旅行社', '19000', 'trips', '1', 1),
(22, '82', 'SnowPeak', '象牙白大地帳', '680x600cm', 'TP-455_BIG.JPG', '16kg', '', '', '29999', 'products', '53', 1),
(23, '82', '挪威', '特羅姆瑟', '5', 'aurores-boreales-en-laponie-norvegienne-1155.jpg', '2019/11/18', '2019/11/03', '雄獅旅行社', '28200', 'trips', '2', 1);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `comments_list`
--
ALTER TABLE `comments_list`
  ADD PRIMARY KEY (`c_id`);

--
-- 資料表索引 `coupon_list`
--
ALTER TABLE `coupon_list`
  ADD PRIMARY KEY (`c_id`);

--
-- 資料表索引 `members_list`
--
ALTER TABLE `members_list`
  ADD PRIMARY KEY (`u_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- 資料表索引 `order_list`
--
ALTER TABLE `order_list`
  ADD PRIMARY KEY (`order_id`),
  ADD UNIQUE KEY `order_status` (`order_id`);

--
-- 資料表索引 `product_list`
--
ALTER TABLE `product_list`
  ADD PRIMARY KEY (`product_id`);

--
-- 資料表索引 `trip_list`
--
ALTER TABLE `trip_list`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `wish_list`
--
ALTER TABLE `wish_list`
  ADD PRIMARY KEY (`w_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `comments_list`
--
ALTER TABLE `comments_list`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon_list`
--
ALTER TABLE `coupon_list`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `members_list`
--
ALTER TABLE `members_list`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_list`
--
ALTER TABLE `order_list`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=244;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_list`
--
ALTER TABLE `product_list`
  MODIFY `product_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `trip_list`
--
ALTER TABLE `trip_list`
  MODIFY `sid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `wish_list`
--
ALTER TABLE `wish_list`
  MODIFY `w_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
