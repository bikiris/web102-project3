import { useState } from "react";

const FlashCard = ({ subject, question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(true);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <>
            <h4>Subject: {subject}</h4>
            <button className={"flashcard " + subject} onClick={handleClick}>
                {isFlipped ? question : answer}
            </button>
        </>
    )
}

export default FlashCard;