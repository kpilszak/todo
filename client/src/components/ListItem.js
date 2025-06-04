import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'

const ListItem = ({ task }) => {
    return (
        <div class="list-item">
            <div className="info-container">
                <TickIcon/>
                <p className="task-title">{ task.title }</p>
                <ProgressBar/>
            </div>
        </div>
    )
}

export default ListItem
  