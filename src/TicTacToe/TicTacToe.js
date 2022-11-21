import React, { useState } from 'react';
import './TicTacToe.css';
import './ResetButton'
import { ResetButton } from './ResetButton';

const TicTacToe = () => {
    
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    


    const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
                if (
                     squares[pattern[0]] && squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]
                    
                ){
                    setGameOver(true);
                    setWinner(squares[pattern[0]])
                }
            });
        };

    };
    const handleClick = (num) => {

        if (cells[num] !== ''){
            alert('already clicked');
            return;
        }
        let squares = [...cells];
        if (turn === 'x') {
            squares[num] = 'x' 
            setTurn('o'); 
        } else {
            squares[num] = 'o'
            setTurn('x');
        }   

        checkForWinner(squares);
        setCells(squares);

    };
    const handleRestart = () => {
        setWinner(true);
        setCells(Array(9).fill(''));
        setGameOver(false);

    }
    const Cell = ({num}) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
    };



    return(
        <div>
            <> <h1>Play Tic Tac Toe</h1></>
         <div className='container'>
            <table>
            <> <h1>Turn: {turn}</h1></>
                <tbody>
                    <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                    </tr>
                    <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                    </tr>
                    <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                    </tr>
                </tbody>
            </table>
            {winner && (
             <>
                <p>{winner} is the winner!</p>
                {/* <button onClick={() => gameOver ? handleRestart : handleClick()}>Play Again</button> */}
                <ResetButton handleRestart={handleRestart} />
             </>
            )}
        </div>
    </div>
    );

};

export default TicTacToe;