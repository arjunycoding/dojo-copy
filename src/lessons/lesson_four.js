import React from "react"
import Quiz from "./quiz_lesson_four"
import vowels from "../vowels"
import consonants from "../consonants"
export default function LessonThree() {
    return (
        <div>
            <h1>Lesson 4: Quiz Time!!!</h1>
            <div>
                <p>
                    OK, so you can recognize the sounds and guess the letter. But can you do the opposite. This time you will have the sanskrit letter and you will have to figure out the sound. Hover over the blue boxes to here the sound. Then, when you're ready click the audio you think is right and see if you are correct!
                </p>
                <div className="quiz">
                    <Quiz array={consonants.concat(vowels)} key={1} />
                </div>
            </div>
        </div>
    )
}