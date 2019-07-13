-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2019 at 11:52 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dame`
--

-- --------------------------------------------------------

--
-- Table structure for table `pices`
--

CREATE TABLE `pices` (
  `id` int(11) NOT NULL,
  `piese` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pices`
--

INSERT INTO `pices` (`id`, `piese`) VALUES
(1, '[{\"y\":2,\"x\":1,\"piece\":1},{\"y\":4,\"x\":1,\"piece\":1},{\"y\":6,\"x\":1,\"piece\":1},{\"y\":8,\"x\":1,\"piece\":1},{\"y\":1,\"x\":2,\"piece\":1},{\"y\":3,\"x\":2,\"piece\":1},{\"y\":5,\"x\":2,\"piece\":1},{\"y\":7,\"x\":2,\"piece\":1},{\"y\":2,\"x\":3,\"piece\":1},{\"y\":4,\"x\":3,\"piece\":1},{\"y\":6,\"x\":3,\"piece\":1},{\"y\":8,\"x\":3,\"piece\":1},{\"y\":1,\"x\":6,\"piece\":2},{\"y\":3,\"x\":6,\"piece\":2},{\"y\":5,\"x\":6,\"piece\":2},{\"y\":7,\"x\":6,\"piece\":2},{\"y\":2,\"x\":7,\"piece\":2},{\"y\":4,\"x\":7,\"piece\":2},{\"y\":6,\"x\":7,\"piece\":2},{\"y\":8,\"x\":7,\"piece\":2},{\"y\":1,\"x\":8,\"piece\":2},{\"y\":3,\"x\":8,\"piece\":2},{\"y\":5,\"x\":8,\"piece\":2},{\"y\":7,\"x\":8,\"piece\":2}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pices`
--
ALTER TABLE `pices`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pices`
--
ALTER TABLE `pices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
