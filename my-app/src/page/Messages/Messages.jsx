import React from 'react'
import './Messages.css'
import Left from '../../components/Left/Left'
import NavBar from '../../components/Navbar/NavBar'
import Right from '../../components/Right/Right'
import { useParams } from 'react-router-dom'

const Messages = () => {
    const { id } = useParams()
    
    // const [currentConversation,setCurrentConversation]=useState(id)

    return (
        <div>
            {/* Top Bar */}
            <NavBar />

            {/* Message Section */}
            <section className="mainMessage">
                <Left currentConversation={id} />
                {id ? <Right currentConversation={id} /> : <Right/> }
            </section>
            
        </div>
    )
}

export default Messages
