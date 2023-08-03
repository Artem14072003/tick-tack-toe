import {useState, useEffect, useCallback} from "react";
import Cell from "./Cell/Cell";

interface Data {
    cells: string[],
    go: string,
    goRu: string,
    win: string
}

const clear:Data = {
    cells: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    go: 'cross',
    goRu: 'крестик',
    win: ''
}

const Home = () => {

    const [data, setData] = useState<Data>({
        cells: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        go: 'cross',
        goRu: 'крестик',
        win: ""
    })

    const checkScore = () => {
        const winCombo = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        winCombo.forEach(array => {
            const circleWin = array.every(cell => data.cells[cell] === 'circle')
            const crossWin = array.every(cell => data.cells[cell] === 'cross')
            const draw = data.cells.every(cell => cell !== "")

            if (circleWin) return setData(prev => ({...prev, win: "Выиграл нолик!"}))
            else if (crossWin) return setData(prev => ({...prev, win: "Выиграл крестик!"}))
            else if (draw) return setData(prev => ({...prev, win: "Ничья!"}))

        })
    }

    const massage: string = `Ходит ${data.goRu}!`;

    const langRu = useCallback((go) => go === 'circle' ?
        setData(prev => ({...prev, goRu: 'крестик'})) :
            go === 'cross' ?
                setData(prev => ({...prev, goRu: 'нолик'})) : go, [data.go])

    useEffect(() => {
        checkScore()
    }, [data.cells])

    return (
        <div className={'Home'}>
            <div className="gamebord">
                {data.win !== '' && <div className={'disabled'} />}
                {data.cells.map((cell, i: number) => (
                    <Cell
                        key={i}
                        id={i}
                        cell={cell}
                        setData={setData}
                        go={data.go}
                        cells={data.cells}
                        langRu={langRu}
                    />
                ))}
                <p>{data.win === "" ? massage : data.win}</p>
                <button onClick={() => setData(clear)}>Reset</button>
            </div>
        </div>
    );
};

export default Home;