import React from "react"
import LetterBtn from "./letter_button";
import consonants from "../consonants";
import { Row, Col, Container } from "react-bootstrap";
import "../App.css"
export default function LessonOne() {
    const [current_letter, set_current_letter] = React.useState(false)
    let add_break = 0
    return (
        <div>
            Similar to English Sanskrit also has vowels, and consonants. Click on a consonant to look at it more in detail. Click on the huge letter to here it! However, don't be overwhelmed by the amount of consonants. Don't worry! With constant practice and dedication you will learn them in no time!
            <br />
            <br />
            <Container>
                <Row>
                    <Col sm={3}>
                        {consonants.map((letter) => {
                            add_break++
                            return (<span>
                                <button className="letter_button_select" key={letter.letter} onClick={() => { set_current_letter(letter) }}>{letter.letter}</button>
                                {console.log(add_break % 5)}
                                {(add_break % 5 === 0 && add_break < 29) || add_break === 29 || add_break === 33 ? <br /> : ""}
                            </span>)
                        })}
                    </Col>
                    <Col>
                        {current_letter ?
                            <div>
                                <LetterBtn symbol={current_letter.letter} audio_file={current_letter.fileName} huge={true} />
                                <p className="none_selected">click to play</p>
                            </div>
                            :
                            <p className="none_selected">-- Please Select A Letter -- </p>
                        }
                    </Col>
                </Row>
            </Container>
        </div >
    )
}