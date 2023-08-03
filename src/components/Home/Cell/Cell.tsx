const Cell = ({id, cell, setData, go, cells, langRu}) => {
    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains('circle') ||
            e.target.firstChild.classList.contains('cross')

        if (!taken) {
            if (go === 'cross') {
                e.target.firstChild.classList.add('cross')
                handleCellChange('cross')
                setData(prev => ({...prev, go: 'circle'}))
                return langRu(go)

            } else if (go === 'circle') {
                e.target.firstChild.classList.add('circle')
                handleCellChange('circle')
                setData(prev => ({...prev, go: 'cross'}))
                return langRu(go)
            }
        }
    }

    const handleCellChange = (className) => {
        const newCells = cells.map((cell, index) => {
            if (index === id) {
                return className
            } else {
                return cell
            }
        })

        setData(prev => ({...prev, cells: newCells}))
    }

    const errorClick = () => console.log('Вы уже кликнули на эту ячейку')

    return (
        <div className={'square'} id={id} onClick={cell === '' ? handleClick : errorClick}>
            <div className={cell}/>
        </div>
    );
};

export default Cell;