import { NewTodo } from "@/app/_components/NewTodo";
import { TodoItem } from "@/app/_components/TodoItem";
import { db } from "@/lib/prisma";

export default async function Todo() {
  const todos = await db.todo.findMany();

  return (
    <main className=" flex min-h-screen justify-center items-center bg-slate-50 ">
      <div className="bg-slate-300 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
        <h1 className="text-3xl text-center">TODO LIST</h1>
        <NewTodo />
        <ul className="px-6">
          <TodoItem todos={todos} />
        </ul>
      </div>
    </main>
  );
}
