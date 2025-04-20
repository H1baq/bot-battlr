import React from "react";

function BotCard ({bot, onClick, OnDischarge}) {
    return(
        <div className="bot-card" onClick={() => onClick(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
        </div>
    )
}