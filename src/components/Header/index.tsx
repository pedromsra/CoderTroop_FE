import { ChangeEvent, FunctionComponent, SetStateAction, useEffect, useRef, useState } from "react";
import { useDispatch, ProviderProps } from "react-redux";

// import { useAuth } from "../../hooks/auth";

// import { roleEnum } from "../../pages/auth/definitionfile.ts";

import { Link } from "react-router-dom";

import { Container } from "./styles.ts";
import { Button } from "../Button/index.tsx";

import { useAuth } from "../../hooks/auth"
import { ButtonText } from "../ButtonText/index.tsx";
import { applyTheme } from "../../redux/themeActions.tsx";
import { darkTheme, lightTheme } from "../../styles/theme.ts";
import { useStore } from "react-redux";

type HeaderProps = {
    handleFilter?: Function
}

const filterOptions = [{label: 'Todas', value: true}, {label: 'Prioridade baixa', value: 0}, {label: 'Prioridade moderada', value: 1}, {label: 'Prioridade alta', value: 2}, {label: 'Prioridade urgente', value: 3}]
const filterDoneOptions = [{label: 'Todas', value: true}, {label: 'Concluída', value: true}, {label: 'Pendente', value: false}]

export const Header: FunctionComponent<HeaderProps> = ({handleFilter}) => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [selected, setSelected] = useState(0)
    const [selectedDone, setSelectedDone] = useState(0)
    const [filter, setFilter] = useState(filterOptions[selected])
    const [filterDone, setFilterDone] = useState(filterDoneOptions[selectedDone])

    const store = useStore<any>()

    const dispatch = useDispatch();

    const changeTheme = (theme: any) => {
        dispatch(applyTheme(theme));
    }


    const ref = useRef<any>(null)

    const { signOut, user } = useAuth();

    function handleFilterChange(i:any, newFilter: SetStateAction<string>) {
        setSelected((prev) => (i === prev ? null : i));
        setFilter(filterOptions[Number(newFilter)])
    }

    function handleFilterDoneChange(i:any, newFilterDone: SetStateAction<string>) {
        setSelectedDone((prev) => (i === prev ? null : i));
        setFilterDone(filterDoneOptions[Number(newFilterDone)])
    }

    function handleOutsideClick (e:any) {
        if (toggleMenu && ref.current && !ref.current.contains(e.target)) {
            setToggleMenu(!toggleMenu)
        }
    }

    function handleSignOut(){
        signOut();
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            };
    });
    
    
    return (
        <Container $menu={toggleMenu} $user={user ? true : false} ref={ref} >
            <div className="main">
                {user ? <ButtonText title="" className="logout" icon={{icon:<span className="material-symbols-outlined" >logout</span>}} onClick={() => handleSignOut()} /> : null}
                {store.getState() && store.getState().theme.title === "darkTheme" ? 
                <ButtonText title="" icon={{icon: <span className="material-symbols-outlined">light_mode</span>}} onClick={() => changeTheme(lightTheme)} />
                :
                <ButtonText title="" icon={{icon: <span className="material-symbols-outlined">dark_mode</span>}} onClick={() => changeTheme(darkTheme)} />
                }

                <Link to="/"><div className="logo"><h1>Painel de Tarefas</h1></div></Link>
                {user ? <div className="menuPopUp" onClick={() => setToggleMenu(!toggleMenu)} >
                    {!toggleMenu ?
                        <span className="material-symbols-outlined" >
                            filter_alt
                        </span>
                        :
                        <span className="material-symbols-outlined" >
                            close
                        </span>
                    }
                    <p>{filter.label === "Todas" || filter.label === "Concluída" || filter.label === "Pendente" ? filter.label : filter.label.split(" ")[1] }</p><p className="spacer"> | </p><p>{filterDone.label}</p>
                </div> : null}
            </div>
                {toggleMenu && 
                    <div className="menuContainer" >
                        <div className="menu" >
                                {filterOptions.map((filter, i) => 
                                    <label className="menuItem" key={i}>
                                        <input
                                            type="checkbox"
                                            checked={i === selected}
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
                                    <label className="menuItem" key={i}>
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
                                    handleFilter && handleFilter(filter, filterDone)
                                    setToggleMenu(!toggleMenu)
                                    }} />
                        </div>
                    </div>
                }
        </Container>
    )
}
