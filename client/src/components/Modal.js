import { useState } from 'react'

const Modal = ({ mode, setShowModal, task }) => {
    const editMode = mode === 'edit' ? true : false
    
    const [data, setData] = useState({
        user_email: editMode ? task.user_email: null,
        title: editMode ? task.title : null,
        progress: editMode ?  task.progress : null,
        date: editMode ? "" : new Date()
    })

    const postData = async () => {
        try {
            const response = await fetch('http://localhost:8000/todos', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            console.log(response)
        } catch (err) {
            console.err(err)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <div className="overlay">
            <div className="modal">
                <div className="form-title-container">
                    <h3>Let's {mode} your task</h3>
                    <button onClick={() => setShowModal(false)}>X</button>
                </div>
                <form>
                    <input 
                        required
                        maxLength={30}
                        placeholder="Your task goes here"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <br/>
                    <label for="range">Drag to select your current progress</label>
                    <input 
                        type="range"
                        id="range"
                        min="0"
                        max="100"
                        name="progress"
                        value={data.progress}
                        onChange={handleChange}
                    />
                    <input className={mode} type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Modal
  