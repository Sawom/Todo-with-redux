import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
    const {todos} = useAppSelector((state)=> state.todos )

    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal></AddTodoModal>
                <TodoFilter></TodoFilter>
            </div>

            <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">

                <div className="bg-white font-bold w-full h-full rounded-lg p-5 space-y-2">
                    { todos.map((item)=>(
                            <TodoCard {...item} ></TodoCard>
                    ))}
                </div>
                
                
                
            </div>
        </div>
    );
};

export default TodoContainer;