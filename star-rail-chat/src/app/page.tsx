import Chatbox from "@/components/chatbox";

export default function Home() {
  return (
    <div style={{
      backgroundImage: "url('/images/background.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '100vh',
    }}
    className="flex flex-col items-center p-14">
      <h1 className="text-6xl font-bold">Star Rail Message Generator</h1>
      <h1 className="text-2xl font-bold text-shadow">Create animated HSR chats for assets or for fun - @AaronHongry</h1>

      <Chatbox />
    </div>
  );
}
