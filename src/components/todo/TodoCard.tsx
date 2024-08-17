const TodoCard = () => {
    return (
        <div className="bg-white flex rounded-md justify-between items-center p-4 border">
            <input type="checkbox" />
            <p className="font-semibold"> Todo title </p>
            <p> description</p>
            <div className="space-x-6">
                <button>delete</button>
                <button>edit</button>
            </div>
        </div>
    );
};

export default TodoCard;