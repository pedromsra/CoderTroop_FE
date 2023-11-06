import React, { ChangeEvent, FunctionComponent, useEffect, useRef, useState } from "react";
import { Container, Input } from "./styles";
import { Button } from "../Button";
import { api } from "../../services/api";
import { ButtonText } from "../ButtonText";

type TaskProps = {
    header?: boolean;
    classNameIcon?: string;
    task: {id?: number, task: string, priority: number, done: boolean};
    handleUpdateTasks?: Function
    handleDeleteTasks?: Function
}

const priorityOptions = ['baixa', 'moderada', 'elevada', 'urgente']

export const Task: FunctionComponent<TaskProps & React.InputHTMLAttributes<HTMLElement>> = ({ header=false, task, classNameIcon, handleUpdateTasks, handleDeleteTasks, ...rest }) => {

    const [tasksEdit, setTasksEdit] = useState<{id?: Number, task:string, priority:number, done: boolean}>(task)
    const [priority, setPriority] = useState(task.priority);
    const [selected, setSelected] = useState(task.priority);
    const [edit, setEdit] = useState(false)

    const ref = useRef<any>(null)

    function handlePriorityChange(i:any) {
        setSelected((prev) => (i === prev ? null : i));
    }

    function handleKeyPress(event: React.KeyboardEvent) {
        if (event.key === "Enter") {
            setTasksEdit({id: task.id, task: tasksEdit.task, priority: priority, done: tasksEdit.done})
        }
    }

    function handleOutsideClick (e:any) {
        if (edit && ref.current && !ref.current.contains(e.target)) {
            setTasksEdit({id: task.id, task: tasksEdit.task, priority: priority, done: tasksEdit.done})
            setEdit(!edit)
        }
    }

    async function handleSave() {
        await api.put(`/tasks/${task.id}`, tasksEdit && {task: tasksEdit.task, priority: tasksEdit.priority, done: tasksEdit.done});
    }

    function handleDoneClick(don:boolean) {
        setTasksEdit({id: task.id, task: task.task, priority: priority, done: don})
        edit && setEdit(!edit)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            };
    });

    useEffect(() => {
        handleUpdateTasks && handleUpdateTasks(tasksEdit)
        handleSave()
    }, [tasksEdit]);
    
    return (
        <Container $isHeader={header} tabIndex={1} className={classNameIcon}
        ref={ref}
        >
            <div className="task" >
                {
                    tasksEdit.done ?  
                    <Button title="" outlined 
                        icon={{icon: <span className="material-symbols-outlined"
                            >radio_button_checked
                        </span>}}
                        onClick={() => handleDoneClick(false)} />
                    :
                    <Button title="" outlined 
                        icon={{icon: <span className="material-symbols-outlined"
                            >radio_button_unchecked
                        </span>}} 
                        onClick={() => handleDoneClick(true)} />
                }
                <div className="inputTask">
                    <Input $done={tasksEdit.done} {...rest} value={tasksEdit.task} onChange={(e: ChangeEvent<HTMLInputElement>) => setTasksEdit({id: task.id, task: e.currentTarget.value, priority: priority, done: tasksEdit.done})}
                        onBlur={() => setTasksEdit({id: task.id, task: tasksEdit.task, priority: priority, done: tasksEdit.done})}
                        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                            if(e.key === "Enter") {
                                handleKeyPress(e)
                                setEdit(!edit)
                            }
                        }}
                        disabled={!edit}
                    />
                    {
                        !edit && <p>prioridade: {priorityOptions[task.priority]}</p>
                    }
                </div>
                <ButtonText title="" icon={{icon: <span className="material-symbols-outlined" >delete</span>}}
                    onClick={() => {
                        const confirm = window.confirm("Deseja realmente remover essa tarefa??");
                        if(confirm) {
                            handleDeleteTasks && handleDeleteTasks(task)
                        }
                    }} disabled={tasksEdit.done}
                    className="delete"
                />
                {!edit && <Button title="" 
                    icon={{
                        icon: <span className="material-symbols-outlined">edit</span>
                    }}
                    onClick={() => {
                        setEdit(!edit)
                    }}
                    disabled={edit || tasksEdit.done}
                />}
                {edit && <Button title="" 
                    icon={{
                        icon: <span className="material-symbols-outlined">done</span>
                    }}
                    onClick={() => {
                        setTasksEdit({id: task.id, task: tasksEdit.task, priority: priority, done: tasksEdit.done})
                        setEdit(!edit)
                    }}
                    disabled={!edit}
                />}
            </div>
            <div className="priority">
                {edit && priorityOptions.map((p, i) => (
                    <label key={i}>
                        <input
                        type="checkbox"
                        checked={i === selected}
                        value={i}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setPriority(Number(e.currentTarget.value))
                            handlePriorityChange(i)
                        }}
                        />
                        {p}
                    </label>
                ))}
            </div>
        </Container>
    )
}