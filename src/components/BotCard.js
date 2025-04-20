import React from "react";

function BotCard ({bot, onClick, OnDischarge}) {
    return(
        <div className="bot-card" onClick={() => onClick(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p>{bot.bot_class}</p>
            <p>{bot.catchphrase}</p>
            <p>{bot.armor}</p>
            <p>{bot.damage}</p>
            <button onClick={(e) => {
                e.stopPropagation();
                OnDischarge(bot.id);
                 }}>
                     </button>

        </div>
    )
}
export default BotCard;