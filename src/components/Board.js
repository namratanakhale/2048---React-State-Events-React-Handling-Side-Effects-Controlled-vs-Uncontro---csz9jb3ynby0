import React, { useEffect, useState } from "react";

export default function Board(props) {
    let [board, setBoard] = useState([])
    let GridSize = props.GridSize;
    let [score, setScore] = useState(0)
    let blueBoard = [];
    for (let i = 0; i < GridSize; i++) {
        blueBoard.push([])
        for (let j = 0; j < GridSize; j++) {
            blueBoard[i].push(0)
        }
    }
    const updateDOM = () => {
        let finalBoard = [];
        for (let i = 0; i < GridSize; i++) {
            let row = []
            for (let j = 0; j < GridSize; j++) {
                row.push(<div className={"board-box" + (blueBoard[i][j] > 0 ? " board-box-high" : "")}>{blueBoard[i][j] > 0 ? blueBoard[i][j] : ""}</div>)
            }
            finalBoard.push(<div className='board-row'>{row}</div>)
        }

        setBoard(finalBoard);
    }
    useEffect(() => {
        let a = (parseInt(Math.random() * 10)) % GridSize;
        let b = (parseInt(Math.random() * 10)) % GridSize;
        while (blueBoard[a][b] !== 0) {
            a = (parseInt(Math.random() * 10)) % GridSize; 
            b = (parseInt(Math.random() * 10)) % GridSize;  
        }     
        let valv = (parseInt(Math.random() * 10)) > 8 ? 4 : 2; 
        blueBoard[a][b] = valv; 
        updateDOM();
        document.addEventListener('keydown', (e) => {
            let tempScore = 0;
            if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "ArrowDown") {
                if (e.key === "ArrowUp") {
                    for (let col = 0; col < GridSize; col++) {
                        for (let row = 0; row < (GridSize - 1); row++) {
                            for (let k = row + 1; k < GridSize; k++) {
                                if (blueBoard[k][col] == blueBoard[row][col]) {
                                    blueBoard[row][col] = blueBoard[row][col] * 2;
                                    score += blueBoard[row][col];
                                    blueBoard[k][col] = 0;
                                }
                                else if (blueBoard[row][col] == 0) {
                                    blueBoard[row][col] = blueBoard[k][col];
                                    blueBoard[k][col] = 0;
                                     }
                            }
                        }
                    }
                }
                else if (e.key === "ArrowDown") {
                    for (let col = 0; col < GridSize; col++) {
                        for (let row = GridSize - 1; row > 0; row--) {
                            for (let k = (row - 1); k >= 0; k--) {
                                if (blueBoard[k][col] == blueBoard[row][col]) {
                                    blueBoard[row][col] = blueBoard[row][col] * 2;
                                    score += blueBoard[row][col];
                                    blueBoard[k][col] = 0;
                                }
                                else if (blueBoard[row][col] == 0) {
                                    blueBoard[row][col] = blueBoard[k][col];
                                    blueBoard[k][col] = 0;
                                }
                                }
                        }
                    }
                }
                else if (e.key === "ArrowRight") {
                    for (let row = GridSize - 1; row >= 0; row--) {
                        for (let col = GridSize - 1; col > 0; col--) {
                            for (let k = (col - 1); k >= 0; k--) {
                                if (blueBoard[row][col] == blueBoard[row][k]) {
                                    blueBoard[row][col] = blueBoard[row][col] * 2;
                                    score += blueBoard[row][col];
                                    blueBoard[row][k] = 0;
                                }
                                else if (blueBoard[row][col] == 0) {
                                    blueBoard[row][col] = blueBoard[row][k];
                                    blueBoard[row][k] = 0;
                                }
                            }
                        }
                    }
                }
                else if (e.key === "ArrowLeft") {
                    for (let row = GridSize - 1; row >= 0; row--) {
                        for (let col = 0; col < (GridSize - 1); col++) {
                            for (let k = (col + 1); k < GridSize; k++) {
                                if (blueBoard[row][col] == blueBoard[row][k]) {
                                    blueBoard[row][col] = blueBoard[row][col] * 2;
                                    score += blueBoard[row][col];
                                    blueBoard[row][k] = 0;
                                }
                                else if (blueBoard[row][col] == 0) {
                                    blueBoard[row][col] = blueBoard[row][k];
                                    blueBoard[row][k] = 0;
                                }
                             }
                        }
                    }
                }
                let a = (parseInt(Math.random() * 10)) % GridSize;
                let b = (parseInt(Math.random() * 10)) % GridSize;
                while (blueBoard[a][b] !== 0) {
                a = (parseInt(Math.random() * 10)) % GridSize; 
                b = (parseInt(Math.random() * 10)) % GridSize;
                }  
                let valv = (parseInt(Math.random() * 10)) > 8 ? 4 : 2;   
                blueBoard[a][b] = valv;
                updateDOM()
                setScore(tempScore + score)
            }
        })
        }, [])
        return (
        <div>
            <div className="board">
                {board}
            </div>
            {'Score:- ' + score}
        </div>
    )
}
