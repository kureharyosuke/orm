CREATE TABLE `todo` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`complete` integer DEFAULT false,
	`createdAt` integer,
	`updatedAt` integer
);
