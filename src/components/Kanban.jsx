import React, {useEffect, useState} from 'react'
import './styles/Kanban.css'
import Navbar from './Navbar';
import Title from './Title';
import Card from './Card';
import Order from './Order';
import DATA from './getItems'

function Kanban() {
    const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
    const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'title');

    useEffect(() => {
        localStorage.setItem('ordering', ordering)
    }, [ordering])

    useEffect(() => {
        localStorage.setItem('grouping', grouping)
    }, [grouping])

    useEffect(() => {if(grouping === 'priority') {setOrdering('title')}}, [grouping])
  
    return (
        <>
            <Navbar grouping={grouping} ordering={ordering} setGrouping={setGrouping} setOrdering={setOrdering} />
            <div className='cards-container'>
                {DATA[grouping].map((group, groupIndex) => {
                return (
                    <div className='group-column' key={groupIndex}>
                        <Title 
                            title={group.title} 
                            grouping={grouping} 
                            count={group.tickets.length} 
                            available={grouping === 'user' ? DATA.users.filter(e => e.name === group.title)[0].available : null}
                        />
                        {Order(group.tickets, ordering).map((item, itemIndex) => {
                            
                            return (
                                <Card 
                                    key={item.id} 
                                    ticket={item} 
                                    grouping={grouping} 
                                    user={DATA.users.filter(e => e.id === item.userId)[0]} 
                                />
                            );

                        })}
                    </div>
                )})}
            </div>
        </>
    )
}

export default Kanban;

