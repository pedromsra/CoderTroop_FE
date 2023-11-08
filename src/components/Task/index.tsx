import React, { ChangeEvent, FunctionComponent, SetStateAction, useEffect, useRef, useState } from "react";
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

    const [tasksEdit, setTasksEdit] = useState<{id?: number, task:string, priority:number, done: boolean}>(task)
    const [priority, setPriority] = useState(task.priority);
    const [selected, setSelected] = useState(task.priority);
    const [input, setInput] = useState(task.task)
    const [edit, setEdit] = useState(false)

    const ref = useRef<any>(null)

    function handlePriorityChange(i:any, newPriority: SetStateAction<string>) {
        setSelected((prev) => (i === prev ? null : i));
        setPriority(Number(newPriority))
    }

    function handleKeyPress(event: React.KeyboardEvent) {
        if (event.key === "Enter") {
            setTasksEdit({id: task.id, task: input, priority: priority, done: tasksEdit.done})
        }
    }

    function handleOutsideClick (e:any) {
        if (edit && ref.current && !ref.current.contains(e.target)) {
            setEdit(!edit)
        }
    }

    async function handleSave() {
        tasksEdit.id && tasksEdit.id % 1 === 0 && await api.put(`/tasks/${task.id}`, tasksEdit && {task: tasksEdit.task, priority: tasksEdit.priority, done: tasksEdit.done});
    }

    function handleDoneClick(don:boolean) {
        edit && setEdit(!edit)
        setTasksEdit({id: task.id, task: task.task, priority: priority, done: don})
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            };
    });

    useEffect(() => {
        setTasksEdit({id: task.id, task: tasksEdit.task, priority: priority, done: tasksEdit.done})
    }, [priority]);

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
                    <Input $done={tasksEdit.done} {...rest} value={input} onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.currentTarget.value)}
                        onBlur={() => setTasksEdit({id: task.id, task: input, priority: priority, done: tasksEdit.done})}
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
                        const confirm = window.confirm("Deseja realmente remover essa tarefa?");
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
                        setEdit(!edit)
                        setTasksEdit({id: task.id, task: input, priority: priority, done: tasksEdit.done})
                    }}
                    disabled={!edit}
                />}
            </div>
            {edit && <div className="priority">
                {priorityOptions.map((p, i) => (
                    <label key={i}>
                        <input
                        type="checkbox"
                        checked={i === selected}
                        value={i}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handlePriorityChange(i, e.currentTarget.value)
                        }}
                        />
                        {p}
                    </label>
                ))}
            </div>}
        </Container>
    )
}