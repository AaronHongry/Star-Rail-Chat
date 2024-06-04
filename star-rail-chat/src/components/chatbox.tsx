function Chatbox() {
    return (
        <>
            <div style={{
                fontFamily: "SDK-SC"
            }} className="m-20 p-4 w-1/3 text-2xl flex flex-col chat-background rounded-tr-3xl">
                <input className="chat-main-text chat-background font-bold text-xl ml-3 w-4/5" placeholder="Enter Title of Chat"></input>
                <input className="chat-sub-text chat-background font-bold text-sm ml-3 w-4/5" placeholder="Enter Description of Chat"></input>
            </div>
        </>
    );
}

export default Chatbox;