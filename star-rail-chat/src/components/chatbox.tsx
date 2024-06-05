function Chatbox() {
    return (
        <div className="m-20 w-1/3 flex flex-col items-center chat-box-shadow">
            <div style={{
                fontFamily: "SDK-SC"
            }} className="w-full text-2xl flex flex-col chat-background rounded-tr-3xl">
                <div className="p-4 pb-2 flex flex-col gap-0">
                    <input className="chat-main-text chat-background font-bold text-xl ml-3 w-4/5 focus:outline-none" placeholder="Enter Title of Chat"></input>
                    <input className="chat-sub-text chat-background font-bold text-sm ml-3 w-4/5 focus:outline-none" placeholder="Enter Description of Chat"></input>
                </div>
                <div className="separator-top w-full mb-2 chat-in-shadow-down z-20"></div>
                <div className="flex flex-col items-center py-4 z-10">
                    <h1 className="chat-sub-text text-sm py-10">There are no chats!</h1>
                </div>
                <div className="separator-bottom w-full mt-2 chat-in-shadow-up z-20"></div>
                <div className="flex flex-col items-center w-full chat-entry-background py-5 pb-16">
                    <input className="chat-main-text font-bold text-base py-2 px-6 focus:outline-none text-center w-10/12 send-message" placeholder="Enter Chat"></input>
                </div>
            </div>
        </div>
    );
}

export default Chatbox;