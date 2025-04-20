import React from "react";
import BotCard from "./BotCard";
import _default from "eslint-plugin-react-refresh";

function YourBotArmy({army, onRelease, onDischarge}) {
    return (
        <div>
            <h2>Your Bot Army</h2>
            <div className="Bot-Army">
                {army.map(bot => (
                    <BotCard key={bot.id} bot={bot} onClick={onRelease} onDischarge={onDischarge} />
                ))}
            </div>
        </div>
    );
}
export default YourBotArmy;