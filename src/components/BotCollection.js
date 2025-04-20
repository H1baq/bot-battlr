import React from "react";
import BotCard from "./BotCard";

function BotCollection ({bots, onList, OnDischarge}) {
    return(
        <div>
            <h2>All Bots</h2>
            <div className="bot-collection">
                {bots.map(bot => (
                    <BotCard key={bot.id} bot={bot} onClick={onList} onDischarge={OnDischarge}/>
                ))}
            </div>

        </div>
    );
}

export default BotCollection;