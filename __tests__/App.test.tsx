import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Task } from '../src/components/Task/index.tsx'

import { ThemeProvider } from 'styled-components';
import GlobalStyles from "../src/styles/global.ts";

import {lightTheme} from '../src/styles/theme.ts'

const task = {id: Math.floor(Math.random() * 1000), task: 'Testando o componente task', priority: 2, done: false}
console.log(React)


test('Edit Button', async () => {
    
    render(
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <Task task={task} />
        </ThemeProvider>
    )
    
    expect(screen.getByDisplayValue(task.task)).toBeDisabled()

    await userEvent.click(screen.getByText('edit'))

    expect(screen.getByDisplayValue(task.task)).toBeEnabled()
    expect(screen.getByDisplayValue('0')).toBeTruthy()
    expect(screen.getByDisplayValue('1')).toBeTruthy()
    expect(screen.getByDisplayValue('2')).toBeTruthy()
    expect(screen.getByDisplayValue('3')).toBeTruthy()
    expect(true).toBeTruthy();
});

test('Done Button', async () => {
    render(
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <Task task={task} />
        </ThemeProvider>
    )
    
    expect(screen.getByDisplayValue(task.task)).toBeDisabled()

    await userEvent.click(screen.getByText('radio_button_unchecked'))

    expect(screen.getByDisplayValue(task.task)).toBeDisabled()
    expect(screen.getByText('edit').parentElement).toBeDisabled()
    expect(screen.getByText('delete').parentElement).toBeDisabled()
    expect(screen.getByText('radio_button_checked')).toBeTruthy()
    expect(true).toBeTruthy();
});

// window.confirm = jest.fn()
// test('Delete Button', async () => {
    
//     render(
//         <ThemeProvider theme={lightTheme}>
//             <GlobalStyles />
//             <Task task={task} />
//         </ThemeProvider>
//     )


//     await userEvent.click(screen.getByText('delete'))

//     const confirmMock = jest.spyOn(window, 'confirm').mockImplementation()
    
//     expect(confirmMock).toHaveBeenCalledTimes(1)
// })