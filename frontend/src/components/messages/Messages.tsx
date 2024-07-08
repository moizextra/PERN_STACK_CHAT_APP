import { DUMMY_MESSAGES } from "../../dummy_data/dummy";
import Message from "./Message";
import  {useSelector}  from "react-redux";
import { RootState } from '../../store';
 interface Message {
    id: string;
    body:string
    createdAt: string; 
}

interface MessagesProps {
	messages: Message[];
}
const Messages = () => {
	const { messages } = useSelector((state: RootState) => state.CurrentChatMessages);
console.log(messages)

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{messages.map((message) => (
				<Message key={message.id} mesy
				sage={message} />
			))}
		</div>
	);
};
export default Messages;
