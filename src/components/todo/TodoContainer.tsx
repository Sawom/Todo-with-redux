import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal></AddTodoModal>
                <Button>Filter</Button>
            </div>

            <div className="bg-primary-gradient w-full h-full rounded-xl p-3 space-y-2">
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                

                <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
                    <p>there is no task pending</p>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default TodoContainer;