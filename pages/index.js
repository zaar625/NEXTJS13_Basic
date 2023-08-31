import { useRef, useState } from "react"

function HomePage() {
    const [feedbackItems, setFeedBackItems] = useState();
    const emailInputRef = useRef();
    const feedBackRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredFeedback = feedBackRef.current.value;

        const reqBody = {
            email:enteredEmail,
            text:enteredFeedback
        }

        fetch("/api/feedback", {
            method:'POST',
            body:JSON.stringify(reqBody),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then((response) => response.json()).then((data) => console.log(data))
    }

    function loadFeedbackHandler(){
        fetch("/api/feedback").then((response) => response.json()).then((data) => setFeedBackItems(data.feedback))
    }

    return (
        <div>
            <h1>The Home Page</h1>
            <form onSubmit={submitFormHandler}>
                <div>
                    <lable htmlFor='email'>Your Email Address</lable>
                    <input type="email" id="email" ref={emailInputRef}></input>
                </div>
                <div>
                    <lable htmlFor='feedback'>Your Email Address</lable>
                    <textarea id="feedback" rows={5} ref={feedBackRef}></textarea>
                </div>
                <button>Send</button>
            </form>
            <hr/>
            <button onClick={loadFeedbackHandler}>LoadFeedBack</button>
            <ul>
                {feedbackItems && feedbackItems.map(item => <li key={item.id}>{item.text}</li>)}
            </ul>
        </div>
    )
}

export default HomePage