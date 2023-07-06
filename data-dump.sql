-- MariaDB dump 10.19-11.0.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: cms_assignment
-- ------------------------------------------------------
-- Server version	11.0.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Sequence structure for `customer_seq`
--

DROP SEQUENCE IF EXISTS `customer_seq`;
CREATE SEQUENCE `customer_seq` start with 1 minvalue 1 maxvalue 9223372036854775806 increment by 50 cache 1000 nocycle ENGINE=InnoDB;
SELECT SETVAL(`customer_seq`, 50001, 0);

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `dob` date NOT NULL,
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `mobile` varbinary(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `nic` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_9st6x9trhf0s27g0vgpcaeu3m` (`nic`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES
('2023-07-04',1,NULL,'¨Ì\0sr\0java.lang.Integer‚†§˜Åá8\0I\0valuexr\0java.lang.NumberÜ¨ïî‡ã\0\0xpf>∆','binara','1231231231v'),
('2006-06-15',2,'Primerose Garden, Uggalboda','¨Ì\0sr\0java.lang.Long;ã‰êÃè#ﬂ\0J\0valuexr\0java.lang.NumberÜ¨ïî‡ã\0\0xp\0\0\0Ì','Binara Sewmina','19996745664');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-06 16:59:20
