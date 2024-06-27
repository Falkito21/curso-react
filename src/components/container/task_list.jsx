import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)

    //estado del componente
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    //control del siclo de vida del componente
    useEffect(() => {
        
        console.log('task state has been modified')
        setLoading(false);
        return () => {
            console.log('task list component is going to unmount...')
        };
    }, [tasks]);
    
    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea.');
    }
    
    return (
        <div>
            <div>
                <h1>
                    Your Tasks: 
                </h1>
            </div>
            {/* TODO: Aplicar un for/Map para renderizar una lista */}
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
