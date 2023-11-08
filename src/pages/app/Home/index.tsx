import { Container } from "./styles";

import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import { Task } from "../../../components/Task";
import { api } from "../../../services/api";

const priorityOptions = ['baixa', 'moderada', 'elevada', 'urgente']

const filterOptions = [{label: 'Todas', value: true}, {label: 'Prioridade baixa', value: 0}, {label: 'Prioridade moderada', value: 1}, {label: 'Prioridade alta', value: 2}, {label: 'Prioridade urgente', value: 3}]
const filterDoneOptions = [{label: 'Todas', value: true}, {label: 'Concluída', value: true}, {label: 'Pendente', value: false}]

export function Home() {
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState<{id?: number, task: string, priority: number, done: boolean}[]>([])
  const [tasksFiltered, setTasksFiltered] = useState<{id?: number, task: string, priority: number, done: boolean}[]>([])

  const [updater, setUpdater] = useState<any>()

  const [priority, setPriority] = useState(0);
  const [selected, setSelected] = useState(0);

  const [filter, setFilter] = useState<{filter: {label?: string, value?: number | boolean}, filterDone:{label?: string, value?: number | boolean}}>({filter: {label: 'Todas', value: true}, filterDone:{label: "Todas", value: true}})

  const [selectedPriority, setSelectedPriority] = useState(0)
  const [selectedDone, setSelectedDone] = useState(0)
  const [filterMenu, setFilterMenu] = useState(filterOptions[selected])
  const [filterDoneMenu, setFilterDoneMenu] = useState(filterDoneOptions[selectedDone])


  function handlePriorityChange(i:any, newPriority: SetStateAction<string>) {
    setSelected((prev) => (i === prev ? null : i));
    setPriority(Number(newPriority))
  }

  async function handleAddNewTask(taskN:any) {

    setNewTask("")

    await api.post("/tasks", { task: taskN, priority: priority })

    setUpdater(taskN)
  }

  function handleFilter(filter:{label: string, value: number | boolean}, filterDone:{label: string, value: boolean}) {
    setFilter({filter, filterDone})

  }

  function handleUpdateTasks(task:{id: number, task: string, priority: number, done: boolean}) {
    const tasksOld = tasks
    const tasksNew = tasksOld.map((taskO) => task.id === taskO.id ? task : taskO )
    setTasks(tasksNew)
  }

  async function handleDeleteTasks(task:{id: number, task: string, priority: number, done: boolean}) {
    const tasksOld = tasks
    const tasksNew = tasksOld.filter((taskO) => task.id !== taskO.id)
    setTasks(tasksNew)
    await api.delete(`/tasks/${task.id}`);
  }

  function handleFilterChange(i:any, newFilter: SetStateAction<string>) {
    setSelectedPriority((prev) => (i === prev ? null : i));
    setFilterMenu(filterOptions[Number(newFilter)])
}

function handleFilterDoneChange(i:any, newFilterDone: SetStateAction<string>) {
    setSelectedDone((prev) => (i === prev ? null : i));
    setFilterDoneMenu(filterDoneOptions[Number(newFilterDone)])
}

  async function filterTasks(){
    let showTasks
    
    if(filter.filter.label === "Todas" && filter.filterDone.label === "Todas") {
      showTasks = tasks
    } else if (filter.filterDone.label === "Concluída"  && filter.filter.label === "Todas")  {
      showTasks = tasks.filter((task:any) => task.done === 1 || task.done === true);
    } else if (filter.filterDone.label === "Pendente"  && filter.filter.label === "Todas") {
      showTasks = tasks.filter((task:any) => task.done === 0 || task.done === false);
    }else if(filter.filter.label !== "Todas" && filter.filterDone.label === "Todas") {
      showTasks = tasks.filter((task:any) => task.priority === filter.filter.value);
    } else if (filter.filterDone.label === "Concluída"  && filter.filter.label !== "Todas")  {
      showTasks = tasks.filter((task:any) => task.priority === filter.filter.value && task.done === 1 || task.done === true);
    } else if (filter.filterDone.label === "Pendente"  && filter.filter.label !== "Todas") {
      showTasks = tasks.filter((task:any) => task.priority === filter.filter.value && task.done === 0 || task.done === false);
    }
    
    showTasks && setTasksFiltered(showTasks);
  }

  useEffect(()=>{
    async function fetchTasks(){
      const response = await api.get(`/tasks`);
      setTasks(response.data);
    }
    fetchTasks()
  }, [updater])

  useEffect(()=>{
    filterTasks()
    
  }, [tasks, filter])

  return (
    <Container>
      <Header handleFilter={handleFilter} />
      <main>
        <div className="newTask">
          <div className="newTaskInput">
            <Input
              placeholder="Adicionar nova tarefa"
              value={newTask}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNewTask(e.currentTarget.value)
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                  if(e.key === 'Enter') {
                    const taskToAdd = tasks
                    taskToAdd.push({ id: Math.random() , task: newTask, priority: priority, done: false })
                    setTasksFiltered(taskToAdd)
                    
                    handleAddNewTask(newTask)
                  }
              }}
            />
            <Button
              title=""
              icon={{
                icon: <span className="material-symbols-outlined">add</span>,
              }}
              onClick={() => {
                const taskToAdd = tasks
                taskToAdd.push({ id: Math.random() , task: newTask, priority: priority, done: false })
                setTasksFiltered(taskToAdd)
                
                handleAddNewTask(newTask)
              }}
              disabled={!newTask}
              outlined={!newTask}
            />
          </div>
          <div className="newTaskPriority">
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
          </div>
        </div>
        <div className="tasksAndFilter">
          {tasks.length || tasksFiltered.length ? <div className="filter">
            <div className="filterHeader">
              <span className="material-symbols-outlined" >
                  filter_alt
              </span>
              <p>{filterMenu.label === "Todas" ? filterMenu.label : filterMenu.label.split(" ")[1] }</p><p className="spacer"> | </p><p>{filterDoneMenu.label}</p>
            </div>
            {filterOptions.map((filter, i) => 
                <label className="filterItem" key={i}>
                    <input
                        type="checkbox"
                        checked={i === selectedPriority}
                        value={i}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleFilterChange(i, e.currentTarget.value)
                        }}
                    />
                    {filter.label}
                </label>
            )
            }
            {filterDoneOptions.map((filterDone, i) => 
                <label className="filterItem" key={i}>
                    <input
                        type="checkbox"
                        checked={i === selectedDone}
                        value={i}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleFilterDoneChange(i, e.currentTarget.value)
                        }}
                    />
                    {filterDone.label}
                </label>
            )
            }
            <Button title="Aplicar filtro" onClick={() => {
              Promise.resolve(setUpdater({filterMenu, filterDoneMenu})).then(() => handleFilter(filterMenu, filterDoneMenu))
            }} />
          </div> : null}
          {tasksFiltered.length ? 
            <div className="tasks">
                {tasksFiltered.map(task => (
                  <Task handleUpdateTasks={handleUpdateTasks}
                  handleDeleteTasks={handleDeleteTasks}
                  key={String(task.id)} task={task} />
                ))}
            </div>
            :
            <div className="tasksPlaceHolder"></div>
          }
        </div>
      </main>
    </Container>
  );
}
