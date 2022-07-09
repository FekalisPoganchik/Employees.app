import './app-info.css'

const AppInfo = ({countEmployee, countIncreases}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в комании</h1>
            <h2>Общее число сотрудников: {countEmployee}</h2>
            <h2>Премию получат: {countIncreases}</h2>
        </div>
    )
}

export default AppInfo