import { useAppSelector } from "@/redux/hooks";
import { Button } from "../ui/button";
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

            <div className="bg-primary-gradient w-full h-full rounded-xl p-3 space-y-2">

                <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
                    {
                        todos.map((item)=>{
                            <TodoCard title={item.title} description={item.description} ></TodoCard>
                        })
                    }
                </div>
                
                
                
            </div>
        </div>
    );
};

export default TodoContainer;