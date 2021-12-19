import { VICTORY_CONDITIONS } from "../../../constants";

export const calculateResult = (board) => {

    let winner = null;

    for (let i = 0; i < VICTORY_CONDITIONS.length; ++i) {
        let figure = board[VICTORY_CONDITIONS[i][0]];

        if (VICTORY_CONDITIONS[i].every(tile => _checkTile(board, tile, figure))) {
            winner = figure;
            break;
        }
    }
    if (isDraw(board)) {
        winner = "draw";
    }
    return winner;

}


const isDraw = (board) => {
    for (let i = 0; i < 9; i++) {
        if (board[i] === '-') {
            return false;
        }
        for (let i = 0; i < VICTORY_CONDITIONS.length; ++i) {
            let figure = board[VICTORY_CONDITIONS[i][0]];

            if (VICTORY_CONDITIONS[i].every(tile => _checkTile(board, tile, figure))) {
                return false;
            }
        }
    }
    return true;
}

const _checkTile = (board, tile, figure) => {
    return (
        board[tile] === figure && board[tile] !== "-"
    );
}

