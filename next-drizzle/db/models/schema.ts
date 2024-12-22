import { sqliteTable, int, text, integer } from "drizzle-orm/sqlite-core";

export const todoTable = sqliteTable("todo", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  complete: integer({ mode: "boolean" }).default(false),
  createdAt: integer({ mode: "timestamp" }),
  updatedAt: integer({ mode: "timestamp" }),
});
