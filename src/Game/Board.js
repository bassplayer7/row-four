import React from "react";
import './Board.css'
import BoardCell from "./Board/BoardCell";


export default function Board() {
    const [xAxis, yAxis] = [8, 8]

    return (
        <div className={'Board'} style={{'--x': xAxis, '--y': yAxis}}>
            {
                [...Array(xAxis).keys()].map(x =>
                    [...Array(yAxis).keys()].map(y => BoardCell({x: x + 1, y: y + 1, key: x + y}))
                )
            }
        </div>
    )
}
