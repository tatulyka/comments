import { useState } from "react";
import style from "./Form.module.sass";



export default function Form() {
    const [valueInput, setValueInput] = useState('');
    const [comments, setComments] = useState([]);

    const handleCommentSubmit = (valueInput) => {
        const newComment = {text: valueInput, date: new Date() };
        setComments((prev) => [newComment, ...prev]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCommentSubmit(valueInput);       
        setValueInput("");
    };

    return (
        <div className={style.wrapper}>    
        <form onSubmit={handleSubmit}>   
            <input className={style.comment} type="textarea" placeholder="Your comment" 
            onChange = {(e) => setValueInput(e.target.value)}/>
                  
        <button className={style.button} type="submit">Send </button>       
        </form>   
        
        <ul>
            {comments.map((comment,index) => (
                
                <li key={index} className={style[index === 0 ? "commentNew" : "commentOld"]}>{comment.text}</li>
            ))}
            
        </ul>       

        </div>

    )
}
