import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

// import { MessageCircle } from "lucide-react";

const MessageContainer = () => {
    const chats = useSelector((state: RootState) => state.SidebarChats.chats);
	let name ; 
	if (chats.length > 0) {
	 name = chats[1].fullName;
	}
	console.log(name);	
	// we have to fetch message over here
	return (
		<div className='w-full flex flex-col'>
			<>
				{/* Header */}
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span className='text-black'>To:</span> <span className='text-gray-900 font-bold'>{name}</span>
				</div>

				<Messages  />
				<MessageInput />
			</>
		</div>
	);
};
export default MessageContainer;

// const NoChatSelected = () => {
// 	return (
// 		<div className='flex items-center justify-center w-full h-full'>
// 			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
// 				<p>Welcome 👋 John Doe ❄</p>
// 				<p>Select a chat to start messaging</p>
// 				<MessageCircle className='text-3xl md:text-6xl text-center' />
// 			</div>
// 		</div>
// 	);
// };
